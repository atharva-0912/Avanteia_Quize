import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { CourseCard } from './components/CourseCard';
import { QuizSetup } from './components/QuizSetup';
import { QuizGame } from './components/QuizGame';
import { QuizResults } from './components/QuizResults';
import { courses } from './data/courses';
import { questionBank } from './data/questions';
import { Course, Question } from './types/quiz';
import { GraduationCap, Brain, Zap } from 'lucide-react';
import toast from 'react-hot-toast';

type AppState = 'home' | 'setup' | 'quiz' | 'results';

interface QuizSession {
  course: Course;
  level: string;
  userName: string;
  questions: Question[];
  userAnswers: (number | null)[];
  score: number;
}

function App() {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [quizSession, setQuizSession] = useState<QuizSession | null>(null);

  // Show welcome toast on app load
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setTimeout(() => {
        toast.success('Welcome to the Quiz Platform! Select a course to begin.', {
          duration: 3000,
          icon: '🎓'
        });
        localStorage.setItem('hasSeenWelcome', 'true');
      }, 1000);
    }
  }, []);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setCurrentState('setup');
  };

  const handleQuizStart = (userName: string, level: string) => {
    if (!selectedCourse) return;

    const questions = questionBank[selectedCourse.id]?.[level];
    if (!questions || questions.length === 0) {
      toast.error('Questions not available for this course and level.');
      return;
    }

    // Shuffle questions to provide variety
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

    setQuizSession({
      course: selectedCourse,
      level,
      userName,
      questions: shuffledQuestions,
      userAnswers: [],
      score: 0
    });
    setCurrentState('quiz');
  };

  const handleQuizComplete = (userAnswers: (number | null)[], score: number) => {
    if (!quizSession) return;

    setQuizSession({
      ...quizSession,
      userAnswers,
      score
    });
    setCurrentState('results');

    // Show score toast
    const percentage = Math.round((score / quizSession.questions.length) * 100);
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
      toast.success(message, {
        duration: 4000,
        icon
      });
    }, 500);
  };

  const handleRestart = () => {
    setCurrentState('setup');
  };

  const handleBackToHome = () => {
    setCurrentState('home');
    setSelectedCourse(null);
    setQuizSession(null);
  };

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <GraduationCap size={40} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Avantiea Pro
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Challenge yourself with comprehensive quizzes across 10 cutting-edge technology domains. 
            From beginner to advanced levels, test your knowledge and track your progress.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Brain size={16} className="text-blue-500" />
              <span>10+ Technology Courses</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap size={16} className="text-purple-500" />
              <span>3 Difficulty Levels</span>
            </div>
            <div className="flex items-center space-x-2">
              <GraduationCap size={16} className="text-green-500" />
              <span>Instant PDF Reports</span>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Choose Your Course
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => handleCourseSelect(course)}
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Why Choose TechQuiz Pro?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Adaptive Learning</h4>
              <p className="text-gray-600">
                Three difficulty levels that progressively challenge your understanding
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Instant Feedback</h4>
              <p className="text-gray-600">
                Get immediate results and detailed explanations for every question
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Reports</h4>
              <p className="text-gray-600">
                Download detailed PDF answer sheets with your complete performance analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      
      {currentState === 'home' && renderHome()}
      
      {currentState === 'setup' && selectedCourse && (
        <QuizSetup
          course={selectedCourse}
          onBack={handleBackToHome}
          onStart={handleQuizStart}
        />
      )}
      
      {currentState === 'quiz' && quizSession && (
        <QuizGame
          course={quizSession.course}
          level={quizSession.level}
          userName={quizSession.userName}
          questions={quizSession.questions}
          onComplete={handleQuizComplete}
        />
      )}
      
      {currentState === 'results' && quizSession && (
        <QuizResults
          course={quizSession.course}
          level={quizSession.level}
          userName={quizSession.userName}
          questions={quizSession.questions}
          userAnswers={quizSession.userAnswers}
          score={quizSession.score}
          onRestart={handleRestart}
          onHome={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;