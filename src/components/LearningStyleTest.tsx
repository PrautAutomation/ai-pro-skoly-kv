import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { TestSession, TestResponse, LearningProfile } from '../types/learningStyle';
import { questionBank, getAdaptiveQuestion } from '../data/questions';
import { LearningStyleAnalyzer } from '../utils/learningStyleAnalyzer';
import { TestResults } from './TestResults';

export const LearningStyleTest: React.FC = () => {
  const [session, setSession] = useState<TestSession>({
    id: `test_${Date.now()}`,
    startedAt: new Date(),
    responses: [],
    confidence: 0
  });
  
  const [currentQuestion, setCurrentQuestion] = useState(questionBank[0]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    setStartTime(new Date());
  }, [currentQuestion]);

  const handleAnswer = (optionId: string) => {
    if (!startTime) return;

    const response: TestResponse = {
      questionId: currentQuestion.id,
      optionId,
      responseTime: Date.now() - startTime.getTime(),
      timestamp: new Date()
    };

    const updatedResponses = [...session.responses, response];
    const tempProfile = LearningStyleAnalyzer.calculateProfile(updatedResponses);
    const confidence = LearningStyleAnalyzer.calculateConfidence(tempProfile, updatedResponses);

    const updatedSession = {
      ...session,
      responses: updatedResponses,
      confidence
    };

    setSession(updatedSession);

    // Check if we should continue or finish
    if (updatedResponses.length >= 12 || confidence >= 85) {
      // Test completed
      const finalProfile = LearningStyleAnalyzer.calculateProfile(updatedResponses);
      setSession({
        ...updatedSession,
        completedAt: new Date(),
        profile: finalProfile
      });
      setIsCompleted(true);
    } else {
      // Get next question
      const nextQuestion = getAdaptiveQuestion(updatedResponses, tempProfile);
      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
      } else {
        // No more questions available
        const finalProfile = LearningStyleAnalyzer.calculateProfile(updatedResponses);
        setSession({
          ...updatedSession,
          completedAt: new Date(),
          profile: finalProfile
        });
        setIsCompleted(true);
      }
    }
  };

  const resetTest = () => {
    setSession({
      id: `test_${Date.now()}`,
      startedAt: new Date(),
      responses: [],
      confidence: 0
    });
    setCurrentQuestion(questionBank[0]);
    setIsCompleted(false);
    setStartTime(null);
  };

  if (isCompleted && session.profile) {
    return <TestResults session={session} onRestart={resetTest} />;
  }

  const progress = Math.min((session.responses.length / 12) * 100, 100);
  const questionTypeColors = {
    behavioral: 'bg-blue-100 text-blue-800',
    scenario: 'bg-green-100 text-green-800',
    interactive: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🎮 LearnStyle Quest
        </h1>
        <div className="text-2xl mb-4">
          ⚔️ Akademie čtyř elementů ⚔️
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Vítej, mladý výzkumníku! Objevíš svou superpower ve světě učení. Každý element má svou magickou sílu:
        </p>
        <div className="flex justify-center gap-4 mt-4 mb-6">
          <div className="bg-red-100 p-3 rounded-lg">
            <div className="text-2xl">🔥</div>
            <div className="text-sm font-medium">Oheň</div>
            <div className="text-xs">Akce</div>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <div className="text-2xl">💧</div>
            <div className="text-sm font-medium">Voda</div>
            <div className="text-xs">Zvuky</div>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <div className="text-2xl">🌱</div>
            <div className="text-sm font-medium">Země</div>
            <div className="text-xs">Texty</div>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <div className="text-2xl">💨</div>
            <div className="text-sm font-medium">Vzduch</div>
            <div className="text-xs">Obrazy</div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            ⚡ Scénář {session.responses.length + 1} z max. 8
          </span>
          <span className="text-sm font-medium text-gray-700">
            🎯 Element síla: {session.confidence}%
          </span>
        </div>
        <Progress value={progress} className="h-3 bg-gradient-to-r from-red-200 via-blue-200 via-green-200 to-purple-200" />
        <div className="flex justify-between text-xs mt-1">
          <span>🔥</span>
          <span>💧</span>
          <span>🌱</span>
          <span>💨</span>
        </div>
      </div>

      {/* Quest Scenario Card */}
      <Card className="p-8 mb-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            🎲 Quest Scénář
          </span>
          <span className="text-amber-700 text-sm font-medium">
            ⭐ Magická síla: {Math.round(currentQuestion.weight * 100)}%
          </span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-8 leading-relaxed bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {currentQuestion.question}
        </h2>

        <div className="grid gap-4">
          {currentQuestion.options.map((option) => {
            const elementColors = {
              '🔥': 'hover:bg-red-50 hover:border-red-300 hover:shadow-red-200',
              '💧': 'hover:bg-blue-50 hover:border-blue-300 hover:shadow-blue-200',
              '🌱': 'hover:bg-green-50 hover:border-green-300 hover:shadow-green-200',
              '💨': 'hover:bg-purple-50 hover:border-purple-300 hover:shadow-purple-200'
            };
            
            const elementEmoji = option.emoji as keyof typeof elementColors;
            const hoverClass = elementColors[elementEmoji] || 'hover:bg-gray-50 hover:border-gray-300';
            
            return (
              <Button
                key={option.id}
                variant="outline"
                className={`w-full p-6 h-auto text-left ${hoverClass} transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2`}
                onClick={() => handleAnswer(option.id)}
              >
                <div className="flex items-center gap-4">
                  {option.emoji && (
                    <span className="text-3xl animate-pulse">{option.emoji}</span>
                  )}
                  <span className="text-base font-semibold flex-1 text-gray-800">
                    {option.text}
                  </span>
                  <span className="text-sm text-gray-500">👆</span>
                </div>
              </Button>
            );
          })}
        </div>
      </Card>

      {/* Progress Indicator */}
      <div className="text-center">
        <p className="text-sm text-amber-600 font-medium">
          {session.confidence >= 85 
            ? "🎉 Tvá element síła je už dostatečně silná pro vyhodnocení!" 
            : `✨ Ještě ${Math.max(0, 8 - session.responses.length)} quest scénářů do objevení tvé superpower!`
          }
        </p>
        <div className="flex justify-center gap-2 mt-3">
          {Array.from({ length: session.responses.length }, (_, i) => (
            <div key={i} className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          ))}
          {Array.from({ length: Math.max(0, 8 - session.responses.length) }, (_, i) => (
            <div key={i} className="w-3 h-3 bg-gray-200 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
};