import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { LearningStyleTest } from '../components/LearningStyleTest';
import { VisualLearning } from '../components/VisualLearning';
import { AuditoryLearning } from '../components/AuditoryLearning';
import { KinestheticLearning } from '../components/KinestheticLearning';
import { LearningStyleType } from '../types/learningStyle';

type ViewType = 'home' | 'test' | 'visual' | 'auditory' | 'kinesthetic';

export const LearningMVP: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [detectedStyle, setDetectedStyle] = useState<LearningStyleType | null>(null);

  const renderView = () => {
    switch (currentView) {
      case 'test':
        return <LearningStyleTest />;
      case 'visual':
        return <VisualLearning />;
      case 'auditory':
        return <AuditoryLearning />;
      case 'kinesthetic':
        return <KinestheticLearning />;
      default:
        return <HomeView />;
    }
  };

  const HomeView = () => (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🧠 Adaptivní učení kvadratických rovnic
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Objevte svůj ideální způsob učení a vyzkoušejte si personalizované výukové materiály 
          pro kvadratické rovnice založené na vašem učebním stylu.
        </p>
        
        {detectedStyle && (
          <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-4 py-2">
            Váš styl: {
              detectedStyle === 'visual' ? 'Vizuální' :
              detectedStyle === 'auditory' ? 'Sluchový' :
              detectedStyle === 'kinesthetic' ? 'Pohybový' :
              detectedStyle === 'readWrite' ? 'Čtecí/Písací' :
              'Vyvážený'
            }
          </Badge>
        )}
      </div>

      {/* Main Options */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Learning Style Test */}
        <Card className="p-8 hover:shadow-lg transition-shadow">
          <div className="text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Test učebního stylu
            </h2>
            <p className="text-gray-600 mb-6">
              Absolvujte 3-4 minutový test a objevte svůj ideální způsob učení. 
              Získáte personalizované doporučení pro efektivnější studium.
            </p>
            <Button 
              onClick={() => setCurrentView('test')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              🚀 Začít test
            </Button>
          </div>
        </Card>

        {/* Direct Access */}
        <Card className="p-8 hover:shadow-lg transition-shadow">
          <div className="text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Přímý přístup k materiálům
            </h2>
            <p className="text-gray-600 mb-6">
              Už znáte svůj učební styl? Přejděte přímo k personalizovaným 
              výukovým materiálům pro kvadratické rovnice.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 mb-3">Vyberte svůj styl:</div>
              <div className="grid grid-cols-1 gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentView('visual')}
                  className="justify-start"
                >
                  👁️ Vizuální učení
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentView('auditory')}
                  className="justify-start"
                >
                  🎧 Sluchové učení
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentView('kinesthetic')}
                  className="justify-start"
                >
                  🤝 Praktické učení
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Features Overview */}
      <Card className="p-8 mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          ✨ Co nabízíme pro každý styl učení
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-3">Vizuální learneři</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Interaktivní grafy paraboly</li>
              <li>• Barevné kódování koeficientů</li>
              <li>• Animace změn funkcí</li>
              <li>• Geometrické reprezentace</li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🎧</div>
            <h3 className="text-xl font-semibold mb-3">Sluchoví learneři</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Hlasové vysvětlení krok za krokem</li>
              <li>• Rytmické načítání vzorců</li>
              <li>• Diskuze s AI asistentem</li>
              <li>• Audio poznámky a shrnutí</li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Praktičtí learneři</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Simulace házení míčku</li>
              <li>• Experimentální kalkulátor</li>
              <li>• Praktické projekty a úlohy</li>
              <li>• Reálné aplikace paraboly</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* About Section */}
      <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎯 O tomto MVP
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Tato aplikace je ukázkou toho, jak může AI personalizovat vzdělávání podle individuálních 
            potřeb studentů. Náš adaptivní test identifikuje váš preferovaný styl učení a následně 
            vám nabídne materiály optimalizované právě pro vás. Téma kvadratických rovnic jsme vybrali 
            jako praktický příklad z matematiky, kde lze demonstrovat různé přístupy k výuce.
          </p>
          
          <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg">
              <div className="font-semibold text-blue-600">3-4 min</div>
              <div className="text-gray-600">Doba testu</div>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <div className="font-semibold text-green-600">85%+</div>
              <div className="text-gray-600">Přesnost</div>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <div className="font-semibold text-purple-600">3 styly</div>
              <div className="text-gray-600">Učení</div>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <div className="font-semibold text-orange-600">∞</div>
              <div className="text-gray-600">Možnosti</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentView('home')}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              🧠 Learning MVP
            </button>
            
            <div className="flex gap-4">
              {currentView !== 'home' && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentView('home')}
                >
                  🏠 Domů
                </Button>
              )}
              
              <Button
                variant="outline"
                onClick={() => setCurrentView('test')}
                className={currentView === 'test' ? 'bg-blue-50' : ''}
              >
                🎯 Test
              </Button>
              
              <div className="hidden md:flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentView('visual')}
                  className={currentView === 'visual' ? 'bg-blue-50' : ''}
                >
                  👁️ Vizuální
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentView('auditory')}
                  className={currentView === 'auditory' ? 'bg-blue-50' : ''}
                >
                  🎧 Sluchové
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentView('kinesthetic')}
                  className={currentView === 'kinesthetic' ? 'bg-blue-50' : ''}
                >
                  🤝 Praktické
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-300">
            🎓 Learning Style MVP - Demonstrace adaptivního AI-powered vzdělávání
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Vytvořeno pro Karlovarský kraj • AI Pro Školy
          </p>
        </div>
      </footer>
    </div>
  );
};