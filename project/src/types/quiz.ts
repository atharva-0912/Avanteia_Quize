export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Course {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
}

export interface QuizAttempt {
  courseId: string;
  courseName: string;
  level: string;
  userName: string;
  questions: Question[];
  userAnswers: (number | null)[];
  score: number;
  completedAt: Date;
}