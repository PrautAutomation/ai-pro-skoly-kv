import React, { useState, useRef } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const AuditoryLearning: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentExample, setCurrentExample] = useState('2x² - 8x + 6 = 0');
  
  const steps = [
    {
      title: 'Úvod do kvadratických rovnic',
      content: 'Kvadratická rovnice má obecný tvar a x na druhou plus b x plus c se rovná nule. Kde a, b a c jsou reálná čísla a a se nerovná nule.',
      audioText: 'ax² + bx + c = 0',
      tip: 'Opakujte si vzorec nahlas několikrát'
    },
    {
      title: 'Identifikace koeficientů',
      content: 'V naší rovnici 2x² - 8x + 6 = 0 máme: koeficient a se rovná 2, koeficient b se rovná mínus 8, koeficient c se rovná 6.',
      audioText: 'a = 2, b = -8, c = 6',
      tip: 'Říkejte koeficienty nahlas při jejich identifikaci'
    },
    {
      title: 'Diskriminant',
      content: 'Vypočítáme diskriminant podle vzorce D se rovná b na druhou minus 4 a c. D se rovná mínus 8 na druhou minus 4 krát 2 krát 6. D se rovná 64 minus 48. D se rovná 16.',
      audioText: 'D = b² - 4ac = (-8)² - 4·2·6 = 64 - 48 = 16',
      tip: 'Počítejte nahlas každý krok'
    },
    {
      title: 'Kvadratický vzorec',
      content: 'Použijeme kvadratický vzorec: x se rovná mínus b plus minus odmocnina z D, to vše děleno 2a. X se rovná mínus mínus 8 plus minus odmocnina ze 16, děleno 2 krát 2.',
      audioText: 'x = (-b ± √D) / 2a = (8 ± 4) / 4',
      tip: 'Rytmicky si opakujte vzorec'
    },
    {
      title: 'Výpočet kořenů',
      content: 'X 1 se rovná 8 plus 4 děleno 4 se rovná 12 děleno 4 se rovná 3. X 2 se rovná 8 mínus 4 děleno 4 se rovná 4 děleno 4 se rovná 1.',
      audioText: 'x₁ = 3, x₂ = 1',
      tip: 'Ověřte si výsledek dosazením zpět do rovnice'
    }
  ];

  const examples = [
    '2x² - 8x + 6 = 0',
    'x² - 5x + 6 = 0',
    '3x² + 7x - 6 = 0',
    'x² - 4x + 4 = 0'
  ];

  // Simulate speech synthesis (in real app, use Web Speech API)
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'cs-CZ';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      
      speechSynthesis.speak(utterance);
    } else {
      // Fallback for browsers without speech synthesis
      alert('Váš prohlížeč nepodporuje syntézu řeči. Text: ' + text);
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const playStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    speakText(step.content);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🎧 Sluchové učení: Kvadratické rovnice
        </h1>
        <p className="text-gray-600">
          Poslouchejte podrobný výklad a opakujte si klíčové pojmy nahlas!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card className="p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Krok {currentStep + 1}: {steps[currentStep].title}
              </h2>
              <Badge variant="outline">
                {currentStep + 1} / {steps.length}
              </Badge>
            </div>

            {/* Current equation display */}
            <div className="text-center mb-6">
              <div className="text-2xl font-mono bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                {currentExample}
              </div>
            </div>

            {/* Step content */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-800 text-lg leading-relaxed mb-4">
                {steps[currentStep].content}
              </p>
              
              <div className="bg-blue-100 p-3 rounded-md">
                <div className="font-mono text-blue-900 text-center">
                  {steps[currentStep].audioText}
                </div>
              </div>
            </div>

            {/* Audio controls */}
            <div className="flex gap-3 mb-6">
              <Button
                onClick={() => playStep(currentStep)}
                disabled={isPlaying}
                className="bg-green-600 hover:bg-green-700"
              >
                {isPlaying ? '🔊 Přehrává se...' : '🎤 Přehrát výklad'}
              </Button>
              
              {isPlaying && (
                <Button
                  onClick={stopSpeech}
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-50"
                >
                  ⏹️ Zastavit
                </Button>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                disabled={currentStep === 0}
                variant="outline"
              >
                ← Předchozí krok
              </Button>
              
              <Button
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
              >
                Další krok →
              </Button>
            </div>
          </Card>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep 
                    ? 'bg-blue-600' 
                    : index < currentStep 
                    ? 'bg-green-500' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Learning tip */}
          <Card className="p-4 bg-yellow-50 border-yellow-200">
            <h3 className="font-semibold text-yellow-900 mb-2">💡 Tip pro tento krok:</h3>
            <p className="text-sm text-yellow-800">
              {steps[currentStep].tip}
            </p>
          </Card>

          {/* Example selector */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Vyberte příklad:</h3>
            <div className="space-y-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentExample(example);
                    setCurrentStep(0);
                  }}
                  className={`w-full p-2 text-left rounded border transition-colors ${
                    example === currentExample
                      ? 'bg-blue-100 border-blue-300 text-blue-900'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <code className="text-sm">{example}</code>
                </button>
              ))}
            </div>
          </Card>

          {/* Audio learning tips */}
          <Card className="p-4 bg-blue-50 border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-3">🎧 Tipy pro sluchové učení:</h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• Opakujte si vzorce nahlas</li>
              <li>• Používejte rytmus při memorování</li>
              <li>• Diskutujte o řešení s ostatními</li>
              <li>• Nahlas si komentujte každý krok</li>
              <li>• Vytvářejte si audio poznámky</li>
            </ul>
          </Card>

          {/* Quick actions */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Rychlé akce:</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  const formula = 'x se rovná mínus b plus minus odmocnina z b na druhou mínus 4ac, to vše děleno 2a';
                  speakText(formula);
                }}
              >
                🔁 Opakovat vzorec
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  steps.forEach((step, index) => {
                    setTimeout(() => speakText(step.content), index * 8000);
                  });
                }}
              >
                📚 Přehrát celý výklad
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};