export interface LearningProfile {
  visual: number;
  auditory: number;
  kinesthetic: number;
  readWrite: number;
  social: number; // -50 to +50 (individual to social)
  sequential: number; // -50 to +50 (sequential to global)
  analytical: number; // -50 to +50 (analytical to intuitive)
}

export interface Question {
  id: string;
  type: 'behavioral' | 'scenario' | 'interactive';
  weight: number;
  question: string;
  options: QuestionOption[];
  category: keyof LearningProfile;
}

export interface QuestionOption {
  id: string;
  text: string;
  emoji?: string;
  scores: Partial<LearningProfile>;
}

export interface TestSession {
  id: string;
  userId?: string;
  startedAt: Date;
  completedAt?: Date;
  responses: TestResponse[];
  profile?: LearningProfile;
  confidence: number;
}

export interface TestResponse {
  questionId: string;
  optionId: string;
  responseTime: number;
  timestamp: Date;
}

export type LearningStyleType = 'visual' | 'auditory' | 'kinesthetic' | 'readWrite' | 'balanced';

export interface PersonalizedContent {
  style: LearningStyleType;
  title: string;
  description: string;
  methods: string[];
  example: {
    topic: string;
    approach: string;
    activities: string[];
  };
}