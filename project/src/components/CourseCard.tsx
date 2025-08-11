import React from 'react';
import * as Icons from 'lucide-react';
import { Course } from '../types/quiz';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  const IconComponent = Icons[course.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer bg-gradient-to-br ${course.gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-white relative overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white bg-opacity-20 rounded-xl group-hover:bg-opacity-30 transition-all duration-300">
            <IconComponent size={32} className="text-white" />
          </div>
          <div className="w-2 h-2 bg-white bg-opacity-40 rounded-full animate-pulse" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
          {course.name}
        </h3>
        
        <p className="text-white text-opacity-80 text-sm mb-4">
          Test your knowledge with interactive quizzes
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">
            3 Levels Available
          </span>
          <Icons.ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};