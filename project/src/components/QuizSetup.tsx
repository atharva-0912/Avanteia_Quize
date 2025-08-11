import React, { useState } from 'react';
import { ArrowLeft, User, Target, Play } from 'lucide-react';
import { Course } from '../types/quiz';

interface QuizSetupProps {
  course: Course;
  onBack: () => void;
  onStart: (userName: string, level: string) => void;
}

const levels = [
  {
    id: 'beginner',
    name: 'Beginner Level',
    description: 'Basic concepts and fundamentals',
    difficulty: 'Easy',
    color: 'bg-green-100 text-green-800',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    id: 'level-1',
    name: 'Level 1',
    description: 'Intermediate concepts and applications',
    difficulty: 'Medium',
    color: 'bg-yellow-100 text-yellow-800',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'level-2',
    name: 'Level 2',
    description: 'Advanced topics and complex scenarios',
    difficulty: 'Hard',
    color: 'bg-red-100 text-red-800',
    gradient: 'from-red-400 to-pink-500'
  }
];

export const QuizSetup: React.FC<QuizSetupProps> = ({ course, onBack, onStart }) => {
  const [userName, setUserName] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleStart = () => {
    if (userName.trim() && selectedLevel) {
      onStart(userName.trim(), selectedLevel);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Courses</span>
          </button>
        </div>

        {/* Course Info */}
        <div className={`bg-gradient-to-r ${course.gradient} p-6 rounded-2xl text-white mb-8`}>
          <h1 className="text-3xl font-bold mb-2">{course.name} Quiz</h1>
          <p className="text-white text-opacity-90">
            Get ready to test your knowledge with 10 challenging questions!
          </p>
        </div>

        {/* Setup Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Quiz Setup</h2>

          {/* Name Input */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
              <User size={18} />
              <span>Your Name</span>
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
            />
          </div>

          {/* Level Selection */}
          <div className="mb-8">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-4">
              <Target size={18} />
              <span>Choose Your Level</span>
            </label>
            
            <div className="grid gap-4">
              {levels.map((level) => (
                <div
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedLevel === level.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-800">{level.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${level.color}`}>
                          {level.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{level.description}</p>
                      <p className="text-gray-500 text-xs mt-1">10 Questions • No time limit</p>
                    </div>
                    
                    <div className={`w-4 h-4 border-2 rounded-full transition-all duration-200 ${
                      selectedLevel === level.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedLevel === level.id && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={handleStart}
            disabled={!userName.trim() || !selectedLevel}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Play size={20} />
            <span>Start Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};