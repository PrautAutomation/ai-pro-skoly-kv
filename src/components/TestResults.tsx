import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { TestSession } from '../types/learningStyle';
import { LearningStyleAnalyzer } from '../utils/learningStyleAnalyzer';
import { RadarChart } from './RadarChart';

interface TestResultsProps {
  session: TestSession;
  onRestart: () => void;
}

export const TestResults: React.FC<TestResultsProps> = ({ session, onRestart }) => {
  if (!session.profile) return null;

  const dominantStyle = LearningStyleAnalyzer.getDominantStyle(session.profile);
  const styleInfo = LearningStyleAnalyzer.getStyleDescription(dominantStyle);
  
  const testDuration = session.completedAt && session.startedAt 
    ? Math.round((session.completedAt.getTime() - session.startedAt.getTime()) / 1000)
    : 0;

  const confidenceColor = session.confidence >= 80 ? 'bg-green-100 text-green-800' :
                         session.confidence >= 60 ? 'bg-yellow-100 text-yellow-800' :
                         'bg-red-100 text-red-800';

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎉 Tvůj učební profil
        </h1>
        <div className="flex justify-center gap-4 mb-4">
          <Badge className={confidenceColor}>
            Spolehlivost: {session.confidence}%
          </Badge>
          <Badge variant="outline">
            Dokončeno za {testDuration}s
          </Badge>
          <Badge variant="outline">
            {session.responses.length} odpovědí
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Profile Overview */}
        <Card className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {styleInfo.name}
            </h2>
            <p className="text-gray-600 text-lg">
              {styleInfo.description}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎯 Tvé silné stránky:</h3>
              <ul className="space-y-2">
                {styleInfo.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💡 Doporučení pro učení:</h3>
              <ul className="space-y-2">
                {styleInfo.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Radar Chart */}
        <Card className="p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Detailní profil učebních stylů
          </h3>
          <RadarChart profile={session.profile} />
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{session.profile.visual}%</div>
              <div className="text-sm text-gray-600">Vizuální</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{session.profile.auditory}%</div>
              <div className="text-sm text-gray-600">Sluchový</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{session.profile.kinesthetic}%</div>
              <div className="text-sm text-gray-600">Pohybový</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{session.profile.readWrite}%</div>
              <div className="text-sm text-gray-600">Čtecí/Písací</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Secondary Dimensions */}
      <Card className="p-8 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          📊 Další charakteristiky tvého učebního stylu
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="font-medium text-gray-900 mb-2">Sociální preference</h4>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-sm">Individuální</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ 
                    width: `${50 + session.profile.social}%`,
                    marginLeft: session.profile.social < 0 ? '0%' : 'auto'
                  }}
                />
              </div>
              <span className="text-sm">Skupinové</span>
            </div>
            <div className="text-sm text-gray-600">
              {session.profile.social > 20 ? 'Preferuješ skupinové učení' :
               session.profile.social < -20 ? 'Preferuješ individuální učení' :
               'Flexibilní v obou přístupech'}
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-medium text-gray-900 mb-2">Způsob zpracování</h4>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-sm">Postupné</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-500"
                  style={{ 
                    width: `${50 + session.profile.sequential}%`,
                    marginLeft: session.profile.sequential < 0 ? '0%' : 'auto'
                  }}
                />
              </div>
              <span className="text-sm">Globální</span>
            </div>
            <div className="text-sm text-gray-600">
              {session.profile.sequential > 20 ? 'Preferuješ postupné učení' :
               session.profile.sequential < -20 ? 'Preferuješ celkový přehled' :
               'Vyvážený přístup'}
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-medium text-gray-900 mb-2">Styl myšlení</h4>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-sm">Analytické</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 transition-all duration-500"
                  style={{ 
                    width: `${50 + session.profile.analytical}%`,
                    marginLeft: session.profile.analytical < 0 ? '0%' : 'auto'
                  }}
                />
              </div>
              <span className="text-sm">Intuitivní</span>
            </div>
            <div className="text-sm text-gray-600">
              {session.profile.analytical > 20 ? 'Analytické myšlení' :
               session.profile.analytical < -20 ? 'Intuitivní myšlení' :
               'Kombinace obou stylů'}
            </div>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={onRestart}
          variant="outline"
          className="px-8 py-3"
        >
          🔄 Zkusit test znovu
        </Button>
        <Button 
          onClick={() => {
            // Navigate to learning materials (would be implemented in routing)
            console.log('Navigate to personalized learning materials');
          }}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700"
        >
          🚀 Vyzkoušet personalizované učení
        </Button>
      </div>

      {/* Debug Info (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <Card className="p-4 mt-8 bg-gray-50">
          <details>
            <summary className="cursor-pointer font-medium">Debug Info</summary>
            <pre className="text-xs mt-2 overflow-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </details>
        </Card>
      )}
    </div>
  );
};