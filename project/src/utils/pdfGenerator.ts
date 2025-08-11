import jsPDF from 'jspdf';
import { QuizAttempt } from '../types/quiz';

export const generatePDF = async (quizAttempt: QuizAttempt) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const lineHeight = 7;
  let currentY = margin;

  // Helper function to add text with word wrapping
  const addText = (text: string, x: number, y: number, maxWidth?: number, fontSize?: number) => {
    if (fontSize) doc.setFontSize(fontSize);
    if (maxWidth) {
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * lineHeight);
    } else {
      doc.text(text, x, y);
      return y + lineHeight;
    }
  };

  // Add new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (currentY + requiredSpace > pageHeight - margin) {
      doc.addPage();
      currentY = margin;
    }
  };

  // Header
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  currentY = addText('Quiz Answer Sheet', margin, currentY);

  // Quiz Information
  currentY += 10;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  
  currentY = addText(`Student Name: ${quizAttempt.userName}`, margin, currentY);
  currentY = addText(`Course: ${quizAttempt.courseName}`, margin, currentY);
  currentY = addText(`Level: ${quizAttempt.level.replace('-', ' ').toUpperCase()}`, margin, currentY);
  currentY = addText(`Date: ${quizAttempt.completedAt.toLocaleDateString()}`, margin, currentY);
  currentY = addText(`Score: ${quizAttempt.score}/${quizAttempt.questions.length} (${Math.round((quizAttempt.score / quizAttempt.questions.length) * 100)}%)`, margin, currentY);

  // Add a line
  currentY += 10;
  doc.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 10;

  // Questions and Answers
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  currentY = addText('Questions and Answers', margin, currentY);
  currentY += 5;

  quizAttempt.questions.forEach((question, index) => {
    const userAnswer = quizAttempt.userAnswers[index];
    const isCorrect = userAnswer === question.correctAnswer;
    
    // Check if we need a new page
    checkPageBreak(50);

    // Question number and status
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    const statusIcon = isCorrect ? '✓' : '✗';
    const statusColor = isCorrect ? [0, 128, 0] : [255, 0, 0];
    
    doc.setTextColor(...statusColor);
    currentY = addText(`${statusIcon} Question ${index + 1}:`, margin, currentY);
    
    // Question text
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    currentY = addText(question.question, margin, currentY, pageWidth - 2 * margin) + 3;

    // Answer options
    question.options.forEach((option, optionIndex) => {
      let prefix = '';
      let color: [number, number, number] = [0, 0, 0];
      
      if (optionIndex === question.correctAnswer) {
        prefix = '✓ ';
        color = [0, 128, 0];
        doc.setFont('helvetica', 'bold');
      } else if (optionIndex === userAnswer && userAnswer !== question.correctAnswer) {
        prefix = '✗ ';
        color = [255, 0, 0];
        doc.setFont('helvetica', 'bold');
      } else {
        doc.setFont('helvetica', 'normal');
      }
      
      doc.setTextColor(...color);
      currentY = addText(`${prefix}${String.fromCharCode(65 + optionIndex)}) ${option}`, margin + 10, currentY, pageWidth - 2 * margin - 20);
    });

    // Your answer and correct answer summary
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    currentY += 3;
    currentY = addText(`Your Answer: ${userAnswer !== null ? String.fromCharCode(65 + userAnswer) : 'Not answered'}`, margin + 10, currentY);
    currentY = addText(`Correct Answer: ${String.fromCharCode(65 + question.correctAnswer)}`, margin + 10, currentY);
    
    // Explanation if available
    if (question.explanation) {
      currentY += 2;
      doc.setFont('helvetica', 'italic');
      currentY = addText(`Explanation: ${question.explanation}`, margin + 10, currentY, pageWidth - 2 * margin - 20);
    }
    
    currentY += 10;
  });

  // Footer with summary
  const summaryY = currentY + 20;
  checkPageBreak(40);
  
  doc.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 15;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  currentY = addText('Quiz Summary', margin, currentY);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  currentY += 5;
  currentY = addText(`Total Questions: ${quizAttempt.questions.length}`, margin, currentY);
  currentY = addText(`Correct Answers: ${quizAttempt.score}`, margin, currentY);
  currentY = addText(`Incorrect Answers: ${quizAttempt.questions.length - quizAttempt.score}`, margin, currentY);
  currentY = addText(`Final Score: ${Math.round((quizAttempt.score / quizAttempt.questions.length) * 100)}%`, margin, currentY);

  // Performance message
  const percentage = Math.round((quizAttempt.score / quizAttempt.questions.length) * 100);
  let performanceMessage = '';
  if (percentage >= 90) performanceMessage = 'Outstanding performance!';
  else if (percentage >= 80) performanceMessage = 'Excellent work!';
  else if (percentage >= 70) performanceMessage = 'Good job!';
  else if (percentage >= 60) performanceMessage = 'Fair performance, keep practicing!';
  else performanceMessage = 'Keep studying and try again!';

  currentY += 5;
  doc.setFont('helvetica', 'italic');
  currentY = addText(`Performance: ${performanceMessage}`, margin, currentY);

  // Save the PDF
  const fileName = `${quizAttempt.courseName.replace(/\s+/g, '_')}_${quizAttempt.level}_${quizAttempt.userName.replace(/\s+/g, '_')}_AnswerSheet.pdf`;
  doc.save(fileName);
};