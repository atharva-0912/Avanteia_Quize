import React from 'react';
import { Trophy, Download, RotateCcw, Home, CheckCircle, XCircle, Medal } from 'lucide-react';
import { Question, Course } from '../types/quiz';
import { generatePDF } from '../utils/pdfGenerator';
import toast from 'react-hot-toast';

interface QuizResultsProps {
  course: Course;
  level: string;
  userName: string;
  questions: Question[];
  userAnswers: (number | null)[];
  score: number;
  onRestart: () => void;
  onHome: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  course,
  level,
  userName,
  questions,
  userAnswers,
  score,
  onRestart,
  onHome
}) => {
  const percentage = Math.round((score / questions.length) * 100);
  
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGradient = (percentage: number) => {
    if (percentage >= 80) return 'from-green-400 to-emerald-500';
    if (percentage >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return { title: "Outstanding!", message: "You're a true expert!" };
    if (percentage >= 80) return { title: "Excellent!", message: "Great job on this quiz!" };
    if (percentage >= 70) return { title: "Good job!", message: "You have a solid understanding!" };
    if (percentage >= 60) return { title: "Not bad!", message: "Room for improvement, but good effort!" };
    return { title: "Keep learning!", message: "Practice makes perfect!" };
  };

  const handleDownloadPDF = async () => {
    try {
      await generatePDF({
        courseId: course.id,
        courseName: course.name,
        level,
        userName,
        questions,
        userAnswers,
        score,
        completedAt: new Date()
      });
      toast.success('Answer sheet downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download answer sheet');
    }
  };

  const performance = getPerformanceMessage(percentage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Results Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${getScoreGradient(percentage)} rounded-full mb-4`}>
            <Trophy className="text-white" size={36} />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Quiz Completed!</h1>
          <p className="text-xl text-gray-600">{performance.title} {performance.message}</p>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <div className={`text-6xl font-bold ${getScoreColor(percentage)} mb-2`}>
              {percentage}%
            </div>
            <p className="text-gray-600 text-lg">
              You scored {score} out of {questions.length} questions correctly
            </p>
          </div>

          {/* Quiz Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className={`bg-gradient-to-r ${course.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                <Medal className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Course</h3>
              <p className="text-gray-600">{course.name}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Level</h3>
              <p className="text-gray-600 capitalize">{level.replace('-', ' ')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Accuracy</h3>
              <p className="text-gray-600">{score}/{questions.length} Correct</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              <Download size={18} />
              <span>Download Answer Sheet</span>
            </button>
            
            <button
              onClick={onRestart}
              className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
            >
              <RotateCcw size={18} />
              <span>Retake Quiz</span>
            </button>
            
            <button
              onClick={onHome}
              className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200"
            >
              <Home size={18} />
              <span>Back to Home</span>
            </button>
          </div>
        </div>

        {/* Answer Review */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Answer Review</h2>
          
          <div className="space-y-6">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isCorrect ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {isCorrect ? (
                        <CheckCircle className="text-green-600" size={16} />
                      ) : (
                        <XCircle className="text-red-600" size={16} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Question {index + 1}: {question.question}
                      </h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Your answer:</span>
                          <span className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                          </span>
                        </div>
                        
                        {!isCorrect && (
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Correct answer:</span>
                            <span className="font-medium text-green-600">
                              {question.options[question.correctAnswer]}
                            </span>
                          </div>
                        )}
                        
                        {question.explanation && (
                          <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Explanation:</span> {question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};