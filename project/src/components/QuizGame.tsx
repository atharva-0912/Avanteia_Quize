import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, XCircle, Clock, Award } from 'lucide-react';
import { Question, Course } from '../types/quiz';
import toast from 'react-hot-toast';

interface QuizGameProps {
  course: Course;
  level: string;
  userName: string;
  questions: Question[];
  onComplete: (userAnswers: (number | null)[], score: number) => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({
  course,
  level,
  userName,
  questions,
  onComplete
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showFeedback) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Update user answers
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newUserAnswers);

    // Show immediate feedback
    if (correct) {
      toast.success('Correct! Well done!', { duration: 2000 });
    } else {
      toast.error('Incorrect. Better luck next time!', { duration: 2000 });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
    } else {
      // Quiz complete
      const score = userAnswers.reduce((total, answer, index) => {
        return total + (answer === questions[index].correctAnswer ? 1 : 0);
      }, 0);
      
      onComplete(userAnswers, score);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-600';
      case 'level-1': return 'text-yellow-600';
      case 'level-2': return 'text-red-600';
      default: return 'text-blue-600';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'level-1': return 'bg-yellow-100 text-yellow-800';
      case 'level-2': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">{course.name}</h1>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600">Hello, {userName}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelBadge(level)}`}>
                  {level.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-600">
                <Award size={18} />
                <span className="font-medium">
                  {currentQuestionIndex + 1} of {questions.length}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`bg-gradient-to-r ${course.gradient} h-2 rounded-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-8 h-8 bg-gradient-to-r ${course.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                {currentQuestionIndex + 1}
              </div>
              <span className="text-gray-500 font-medium">Question {currentQuestionIndex + 1}</span>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options */}
          <div className="grid gap-4 mb-8">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left border-2 rounded-xl transition-all duration-200 ";
              
              if (showFeedback) {
                if (index === currentQuestion.correctAnswer) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 text-gray-600";
                }
              } else {
                if (selectedAnswer === index) {
                  buttonClass += "border-blue-500 bg-blue-50 text-blue-800";
                } else {
                  buttonClass += "border-gray-200 hover:border-gray-300 text-gray-800";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={buttonClass}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                      showFeedback && index === currentQuestion.correctAnswer
                        ? 'border-green-500 bg-green-500'
                        : showFeedback && index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer
                        ? 'border-red-500 bg-red-500'
                        : selectedAnswer === index && !showFeedback
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {showFeedback && index === currentQuestion.correctAnswer && (
                        <CheckCircle size={14} className="text-white" />
                      )}
                      {showFeedback && index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer && (
                        <XCircle size={14} className="text-white" />
                      )}
                      {selectedAnswer === index && !showFeedback && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && currentQuestion.explanation && (
            <div className={`p-4 rounded-xl mb-6 ${
              isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-start space-x-3">
                {isCorrect ? (
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                ) : (
                  <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                )}
                <div>
                  <p className={`font-medium mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </p>
                  <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between">
            <div className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            
            {!showFeedback ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
              >
                <span>Submit Answer</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <span>{currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};