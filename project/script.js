// Global variables
let currentCourse = null;
let currentLevel = null;
let currentUserName = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let selectedAnswer = null;
let showingFeedback = false;
let quizScore = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    generateCourseCards();
    setupEventListeners();
    showWelcomeToast();
});

// Show welcome toast
function showWelcomeToast() {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
        setTimeout(() => {
            showToast('Welcome to TechQuiz Pro! Select a course to begin.', 'success', '🎓');
            localStorage.setItem('hasSeenWelcome', 'true');
        }, 1000);
    }
}

// Toast notification system
function showToast(message, type = 'success', icon = '') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `${icon} ${message}`;
    
    toastContainer.appendChild(toast);
    
    // Remove toast after 4 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 4000);
}

// Generate course cards
function generateCourseCards() {
    const coursesGrid = document.getElementById('courses-grid');
    coursesGrid.innerHTML = '';
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.setAttribute('data-course', course.id);
        courseCard.onclick = () => selectCourse(course);
        
        courseCard.innerHTML = `
            <div class="course-image-container">
                <img src="${getCourseImage(course.id)}" alt="${course.name}" class="course-background-image" onerror="this.style.display='none'">
                <div class="course-icon">
                    ${getIconSVG(course.icon)}
                </div>
            </div>
            <div class="course-content">
                <div class="course-info">
                    <h3>${course.name}</h3>
                    <p>${getCourseDescription(course.id)}</p>
                </div>
                <button class="answer-quiz-btn">Answer Now</button>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
    });
}

// Get course images
function getCourseImage(courseId) {
    const images = {
        'web-development': 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
        'digital-marketing': 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        'blockchain': 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
        'cybersecurity': 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
        'ai': 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
        'iot': 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'cloud-computing': 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
        'machine-learning': 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
        'data-science': 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        'big-data': 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
    return images[courseId] || '';
}
// Get course descriptions
function getCourseDescription(courseId) {
    const descriptions = {
        'web-development': 'Learn HTML, CSS, JavaScript, and modern frameworks',
        'digital-marketing': 'Master online marketing strategies and tools',
        'blockchain': 'Understand distributed ledger technology and cryptocurrencies',
        'cybersecurity': 'Protect systems and networks from digital attacks',
        'ai': 'Explore artificial intelligence and machine learning concepts',
        'iot': 'Connect devices and build smart systems',
        'cloud-computing': 'Deploy and manage applications in the cloud',
        'machine-learning': 'Build predictive models and intelligent systems',
        'data-science': 'Analyze data and extract meaningful insights',
        'big-data': 'Process and analyze large-scale datasets'
    };
    return descriptions[courseId] || 'Test your knowledge with interactive quizzes';
}

// Get icon SVG
function getIconSVG(iconName) {
    const icons = {
        'code': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',
        'trending-up': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>',
        'link': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
        'shield': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        'brain': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
        'wifi': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
        'cloud': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
        'cpu': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
        'bar-chart': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
        'database': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'
    };
    return icons[iconName] || icons['code'];
}

// Setup event listeners
function setupEventListeners() {
    // Level selection
    document.querySelectorAll('.level-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.level-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            currentLevel = this.dataset.level;
            updateStartButton();
        });
    });
    
    // Name input
    document.getElementById('user-name').addEventListener('input', function() {
        currentUserName = this.value.trim();
        updateStartButton();
    });
}

// Select course
function selectCourse(course) {
    currentCourse = course;
    showSetupPage();
}

// Show setup page
function showSetupPage() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('setup-page').classList.add('active');
    
    // Update course header
    const courseHeader = document.getElementById('course-header');
    courseHeader.style.background = `linear-gradient(135deg, ${currentCourse.gradient})`;
    courseHeader.innerHTML = `
        <h1>${currentCourse.name} Quiz</h1>
        <p>Get ready to test your knowledge with 10 challenging questions!</p>
    `;
    
    // Reset form
    document.getElementById('user-name').value = '';
    document.querySelectorAll('.level-option').forEach(opt => opt.classList.remove('selected'));
    currentLevel = null;
    currentUserName = '';
    updateStartButton();
}

// Update start button state
function updateStartButton() {
    const startButton = document.getElementById('start-quiz-btn');
    const canStart = currentUserName && currentLevel;
    startButton.disabled = !canStart;
}

// Start quiz
function startQuiz() {
    if (!currentUserName || !currentLevel || !currentCourse) return;
    
    // Get questions for the selected course and level
    const questions = questionBank[currentCourse.id]?.[currentLevel];
    if (!questions || questions.length === 0) {
        showToast('Questions not available for this course and level.', 'error');
        return;
    }
    
    // Shuffle questions
    currentQuestions = [...questions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    selectedAnswer = null;
    showingFeedback = false;
    quizScore = 0;
    
    showQuizPage();
}

// Show quiz page
function showQuizPage() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('quiz-page').classList.add('active');
    
    // Update quiz header
    document.getElementById('quiz-course-name').textContent = currentCourse.name;
    document.getElementById('quiz-user-name').textContent = `Hello, ${currentUserName}`;
    
    const levelBadge = document.getElementById('quiz-level');
    levelBadge.textContent = currentLevel.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    levelBadge.className = `level-badge ${currentLevel}`;
    
    // Set course gradient
    document.documentElement.style.setProperty('--course-gradient', currentCourse.gradient);
    
    displayCurrentQuestion();
}

// Display current question
function displayCurrentQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    
    // Update progress
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('question-counter').textContent = `${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    // Update question
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('question-label').textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById('question-text').textContent = question.question;
    
    // Update options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.onclick = () => selectOption(index);
        
        optionElement.innerHTML = `
            <div class="option-indicator"></div>
            <span class="option-text">${option}</span>
        `;
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Reset UI state
    selectedAnswer = null;
    showingFeedback = false;
    document.getElementById('feedback-container').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'inline-flex';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('question-info').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
}

// Select option
function selectOption(index) {
    if (showingFeedback) return;
    
    selectedAnswer = index;
    
    // Update UI
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) {
            opt.classList.add('selected');
        }
    });
    
    document.getElementById('submit-btn').disabled = false;
}

// Submit answer
function submitAnswer() {
    if (selectedAnswer === null || showingFeedback) return;
    
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    // Update user answers
    userAnswers[currentQuestionIndex] = selectedAnswer;
    if (isCorrect) quizScore++;
    
    // Show feedback
    showingFeedback = true;
    showAnswerFeedback(isCorrect, question);
    
    // Update UI
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-flex';
    
    const nextBtnText = document.getElementById('next-btn-text');
    nextBtnText.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';
    
    // Update options appearance
    document.querySelectorAll('.option').forEach((opt, index) => {
        opt.classList.add('disabled');
        if (index === question.correctAnswer) {
            opt.classList.add('correct');
        } else if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
            opt.classList.add('incorrect');
        }
    });
    
    // Show toast
    if (isCorrect) {
        showToast('Correct! Well done!', 'success', '✅');
    } else {
        showToast('Incorrect. Better luck next time!', 'error', '❌');
    }
}

// Show answer feedback
function showAnswerFeedback(isCorrect, question) {
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.style.display = 'block';
    feedbackContainer.className = `feedback-container ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const iconSVG = isCorrect 
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
    
    feedbackContainer.innerHTML = `
        <div class="feedback-content">
            <div class="feedback-icon ${isCorrect ? 'correct' : 'incorrect'}">
                ${iconSVG}
            </div>
            <div class="feedback-text ${isCorrect ? 'correct' : 'incorrect'}">
                <h4>${isCorrect ? 'Correct!' : 'Incorrect'}</h4>
                <p>${question.explanation}</p>
            </div>
        </div>
    `;
}

// Next question
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayCurrentQuestion();
    } else {
        showResultsPage();
    }
}

// Show results page
function showResultsPage() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('results-page').classList.add('active');
    
    const percentage = Math.round((quizScore / currentQuestions.length) * 100);
    
    // Update trophy icon and performance message
    const trophyIcon = document.getElementById('trophy-icon');
    const performanceMessage = document.getElementById('performance-message');
    
    if (percentage >= 80) {
        trophyIcon.className = 'trophy-icon excellent';
        performanceMessage.textContent = 'Outstanding! You\'re a true expert!';
    } else if (percentage >= 60) {
        trophyIcon.className = 'trophy-icon good';
        performanceMessage.textContent = 'Good job! You have a solid understanding!';
    } else {
        trophyIcon.className = 'trophy-icon poor';
        performanceMessage.textContent = 'Keep learning! Practice makes perfect!';
    }
    
    // Update score display
    const scorePercentage = document.getElementById('score-percentage');
    scorePercentage.textContent = `${percentage}%`;
    scorePercentage.className = `score-percentage ${percentage >= 80 ? 'excellent' : percentage >= 60 ? 'good' : 'poor'}`;
    
    document.getElementById('score-description').textContent = 
        `You scored ${quizScore} out of ${currentQuestions.length} questions correctly`;
    
    // Update quiz details
    document.getElementById('result-course-name').textContent = currentCourse.name;
    document.getElementById('result-level').textContent = currentLevel.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    document.getElementById('result-accuracy').textContent = `${quizScore}/${currentQuestions.length} Correct`;
    
    // Set course gradient for detail icon
    document.documentElement.style.setProperty('--course-gradient', currentCourse.gradient);
    
    // Generate answer review
    generateAnswerReview();
    
    // Show score toast
    let message = '';
    let icon = '';
    
    if (percentage >= 80) {
        message = `Excellent! You scored ${percentage}%`;
        icon = '🏆';
    } else if (percentage >= 60) {
        message = `Good job! You scored ${percentage}%`;
        icon = '🎉';
    } else {
        message = `You scored ${percentage}%. Keep practicing!`;
        icon = '📚';
    }
    
    setTimeout(() => {
        showToast(message, 'success', icon);
    }, 500);
}

// Generate answer review
function generateAnswerReview() {
    const reviewContainer = document.getElementById('answer-review-container');
    reviewContainer.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const statusIcon = isCorrect 
            ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>'
            : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
        
        reviewItem.innerHTML = `
            <div class="review-header">
                <div class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                    ${statusIcon}
                </div>
                <div class="review-question">
                    <h3>Question ${index + 1}: ${question.question}</h3>
                    <div class="review-answers">
                        <div class="review-answer user-answer">
                            <span>Your answer:</span>
                            <span>${userAnswer !== null ? question.options[userAnswer] : 'Not answered'}</span>
                        </div>
                        ${!isCorrect ? `
                            <div class="review-answer correct-answer">
                                <span>Correct answer:</span>
                                <span>${question.options[question.correctAnswer]}</span>
                            </div>
                        ` : ''}
                    </div>
                    ${question.explanation ? `
                        <div class="review-explanation">
                            <p><span>Explanation:</span> ${question.explanation}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
}

// Download PDF
function downloadPDF() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 20;
        let currentY = margin;
        
        // Helper function to add text
        const addText = (text, x, y, fontSize = 12, style = 'normal') => {
            doc.setFontSize(fontSize);
            doc.setFont('helvetica', style);
            doc.text(text, x, y);
            return y + (fontSize * 0.5);
        };
        
        // Helper function to check page break
        const checkPageBreak = (requiredSpace) => {
            if (currentY + requiredSpace > pageHeight - margin) {
                doc.addPage();
                currentY = margin;
            }
        };
        
        // Header
        currentY = addText('Quiz Answer Sheet', margin, currentY, 24, 'bold');
        currentY += 10;
        
        // Quiz information
        currentY = addText(`Student Name: ${currentUserName}`, margin, currentY);
        currentY = addText(`Course: ${currentCourse.name}`, margin, currentY);
        currentY = addText(`Level: ${currentLevel.replace('-', ' ').toUpperCase()}`, margin, currentY);
        currentY = addText(`Date: ${new Date().toLocaleDateString()}`, margin, currentY);
        currentY = addText(`Score: ${quizScore}/${currentQuestions.length} (${Math.round((quizScore / currentQuestions.length) * 100)}%)`, margin, currentY);
        
        // Add line
        currentY += 10;
        doc.line(margin, currentY, pageWidth - margin, currentY);
        currentY += 10;
        
        // Questions and answers
        currentY = addText('Questions and Answers', margin, currentY, 16, 'bold');
        currentY += 5;
        
        currentQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            checkPageBreak(50);
            
            // Question
            doc.setTextColor(isCorrect ? 0 : 255, isCorrect ? 128 : 0, 0);
            currentY = addText(`${isCorrect ? '✓' : '✗'} Question ${index + 1}:`, margin, currentY, 12, 'bold');
            
            doc.setTextColor(0, 0, 0);
            const questionLines = doc.splitTextToSize(question.question, pageWidth - 2 * margin);
            doc.text(questionLines, margin, currentY);
            currentY += questionLines.length * 7 + 3;
            
            // Options
            question.options.forEach((option, optionIndex) => {
                let prefix = '';
                let color = [0, 0, 0];
                let style = 'normal';
                
                if (optionIndex === question.correctAnswer) {
                    prefix = '✓ ';
                    color = [0, 128, 0];
                    style = 'bold';
                } else if (optionIndex === userAnswer && userAnswer !== question.correctAnswer) {
                    prefix = '✗ ';
                    color = [255, 0, 0];
                    style = 'bold';
                }
                
                doc.setTextColor(...color);
                doc.setFont('helvetica', style);
                currentY = addText(`${prefix}${String.fromCharCode(65 + optionIndex)}) ${option}`, margin + 10, currentY);
            });
            
            // Answer summary
            doc.setTextColor(0, 0, 0);
            doc.setFont('helvetica', 'normal');
            currentY += 3;
            currentY = addText(`Your Answer: ${userAnswer !== null ? String.fromCharCode(65 + userAnswer) : 'Not answered'}`, margin + 10, currentY);
            currentY = addText(`Correct Answer: ${String.fromCharCode(65 + question.correctAnswer)}`, margin + 10, currentY);
            
            // Explanation
            if (question.explanation) {
                currentY += 2;
                doc.setFont('helvetica', 'italic');
                const explanationLines = doc.splitTextToSize(`Explanation: ${question.explanation}`, pageWidth - 2 * margin - 20);
                doc.text(explanationLines, margin + 10, currentY);
                currentY += explanationLines.length * 7;
            }
            
            currentY += 10;
        });
        
        // Summary
        checkPageBreak(40);
        doc.line(margin, currentY, pageWidth - margin, currentY);
        currentY += 15;
        
        doc.setFont('helvetica', 'bold');
        currentY = addText('Quiz Summary', margin, currentY, 14);
        
        doc.setFont('helvetica', 'normal');
        currentY += 5;
        currentY = addText(`Total Questions: ${currentQuestions.length}`, margin, currentY);
        currentY = addText(`Correct Answers: ${quizScore}`, margin, currentY);
        currentY = addText(`Incorrect Answers: ${currentQuestions.length - quizScore}`, margin, currentY);
        currentY = addText(`Final Score: ${Math.round((quizScore / currentQuestions.length) * 100)}%`, margin, currentY);
        
        // Performance message
        const percentage = Math.round((quizScore / currentQuestions.length) * 100);
        let performanceMessage = '';
        if (percentage >= 90) performanceMessage = 'Outstanding performance!';
        else if (percentage >= 80) performanceMessage = 'Excellent work!';
        else if (percentage >= 70) performanceMessage = 'Good job!';
        else if (percentage >= 60) performanceMessage = 'Fair performance, keep practicing!';
        else performanceMessage = 'Keep studying and try again!';
        
        currentY += 5;
        doc.setFont('helvetica', 'italic');
        currentY = addText(`Performance: ${performanceMessage}`, margin, currentY);
        
        // Save PDF
        const fileName = `${currentCourse.name.replace(/\s+/g, '_')}_${currentLevel}_${currentUserName.replace(/\s+/g, '_')}_AnswerSheet.pdf`;
        doc.save(fileName);
        
        showToast('Answer sheet downloaded successfully!', 'success', '📄');
    } catch (error) {
        console.error('PDF generation error:', error);
        showToast('Failed to download answer sheet', 'error');
    }
}

// Retake quiz
function retakeQuiz() {
    showSetupPage();
}

// Show home page
function showHomePage() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('home-page').classList.add('active');
    
    // Reset state
    currentCourse = null;
    currentLevel = null;
    currentUserName = '';
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    selectedAnswer = null;
    showingFeedback = false;
    quizScore = 0;
}