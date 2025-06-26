import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';

interface ProjectileState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  time: number;
  isFlying: boolean;
}

export const KinestheticLearning: React.FC = () => {
  const [angle, setAngle] = useState([45]);
  const [velocity, setVelocity] = useState([20]);
  const [projectile, setProjectile] = useState<ProjectileState>({
    x: 50,
    y: 350,
    vx: 0,
    vy: 0,
    time: 0,
    isFlying: false
  });
  const [trails, setTrails] = useState<{x: number, y: number}[]>([]);
  const [calculatorInput, setCalculatorInput] = useState({
    a: '1',
    b: '0', 
    c: '-4'
  });
  const [calculatorResult, setCalculatorResult] = useState<string>('');
  const [experimentResults, setExperimentResults] = useState<{angle: number, distance: number}[]>([]);

  const gravity = 9.81;
  const scale = 10; // pixels per meter

  useEffect(() => {
    let animationId: number;
    
    if (projectile.isFlying) {
      const animate = () => {
        setProjectile(prev => {
          const newTime = prev.time + 0.05;
          const newX = 50 + prev.vx * newTime;
          const newY = 350 - (prev.vy * newTime - 0.5 * gravity * newTime * newTime) * scale;
          
          if (newY >= 350) {
            // Landed
            const distance = Math.abs(newX - 50) / scale;
            setExperimentResults(prev => [...prev, { angle: angle[0], distance }]);
            setTrails([]);
            return {
              x: newX,
              y: 350,
              vx: prev.vx,
              vy: prev.vy,
              time: newTime,
              isFlying: false
            };
          }
          
          // Add to trail
          setTrails(prev => [...prev.slice(-20), { x: newX, y: newY }]);
          
          return {
            x: newX,
            y: newY,
            vx: prev.vx,
            vy: prev.vy,
            time: newTime,
            isFlying: true
          };
        });
        
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [projectile.isFlying, angle]);

  const fireProjectile = () => {
    if (projectile.isFlying) return;
    
    const angleRad = (angle[0] * Math.PI) / 180;
    const vx = velocity[0] * Math.cos(angleRad);
    const vy = velocity[0] * Math.sin(angleRad);
    
    setProjectile({
      x: 50,
      y: 350,
      vx,
      vy,
      time: 0,
      isFlying: true
    });
  };

  const calculateQuadratic = () => {
    const a = parseFloat(calculatorInput.a) || 0;
    const b = parseFloat(calculatorInput.b) || 0;
    const c = parseFloat(calculatorInput.c) || 0;
    
    if (a === 0) {
      setCalculatorResult('Koeficient a nesmí být 0!');
      return;
    }
    
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant < 0) {
      setCalculatorResult('Žádné reálné kořeny (D < 0)');
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      setCalculatorResult(`Jeden kořen: x = ${x.toFixed(3)}`);
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setCalculatorResult(`Dva kořeny: x₁ = ${x1.toFixed(3)}, x₂ = ${x2.toFixed(3)}`);
    }
  };

  const optimalAngle = 45; // degrees for maximum range
  const currentDistance = experimentResults.find(r => r.angle === angle[0])?.distance || 0;
  const maxDistance = Math.max(...experimentResults.map(r => r.distance), 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🚀 Praktické učení: Kvadratické rovnice
        </h1>
        <p className="text-gray-600">
          Experimentujte s trajektoriemi a objevte matematiku v pohybu!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Projectile Simulator */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">🎯 Simulátor házení míčku</h2>
          
          <div className="bg-gradient-to-b from-blue-200 to-green-200 rounded-lg p-4 mb-4 relative overflow-hidden">
            <svg width="100%" height="300" viewBox="0 0 500 300">
              {/* Ground */}
              <rect x="0" y="290" width="500" height="10" fill="#8B4513" />
              
              {/* Trail */}
              {trails.length > 1 && (
                <path
                  d={`M ${trails[0].x} ${trails[0].y} ${trails.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')}`}
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                />
              )}
              
              {/* Projectile */}
              <circle
                cx={projectile.x}
                cy={projectile.y}
                r="6"
                fill="#FF6B6B"
                stroke="#fff"
                strokeWidth="2"
              />
              
              {/* Cannon */}
              <rect x="40" y="280" width="20" height="20" fill="#666" />
              <line
                x1="50"
                y1="290"
                x2={50 + 30 * Math.cos((angle[0] * Math.PI) / 180)}
                y2={290 - 30 * Math.sin((angle[0] * Math.PI) / 180)}
                stroke="#333"
                strokeWidth="4"
                strokeLinecap="round"
              />
              
              {/* Distance markers */}
              {Array.from({ length: 11 }, (_, i) => (
                <g key={i}>
                  <line x1={50 + i * 40} y1="290" x2={50 + i * 40} y2="295" stroke="#666" />
                  <text x={50 + i * 40} y="310" textAnchor="middle" className="text-xs fill-gray-600">
                    {i * 4}m
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Úhel: {angle[0]}° {angle[0] === optimalAngle && '(Optimální!)'}
              </label>
              <Slider
                value={angle}
                onValueChange={setAngle}
                min={15}
                max={75}
                step={5}
                className="mb-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Rychlost: {velocity[0]} m/s
              </label>
              <Slider
                value={velocity}
                onValueChange={setVelocity}
                min={10}
                max={30}
                step={1}
                className="mb-2"
              />
            </div>

            <Button
              onClick={fireProjectile}
              disabled={projectile.isFlying}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              {projectile.isFlying ? '🚀 Letí...' : '🎯 Vystřelit míček'}
            </Button>
          </div>

          {/* Results */}
          {experimentResults.length > 0 && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">📊 Výsledky experimentů:</h4>
              <div className="text-sm space-y-1">
                <div>Aktuální dosah: {currentDistance.toFixed(1)}m</div>
                <div>Nejlepší dosah: {maxDistance.toFixed(1)}m</div>
                <div>Počet pokusů: {experimentResults.length}</div>
              </div>
            </div>
          )}
        </Card>

        {/* Calculator */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">🧮 Experimentální kalkulátor</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Kvadratická rovnice: ax² + bx + c = 0
              </label>
              
              <div className="flex items-center gap-2">
                <Input
                  value={calculatorInput.a}
                  onChange={(e) => setCalculatorInput(prev => ({ ...prev, a: e.target.value }))}
                  placeholder="a"
                  className="w-16"
                />
                <span>x² +</span>
                <Input
                  value={calculatorInput.b}
                  onChange={(e) => setCalculatorInput(prev => ({ ...prev, b: e.target.value }))}
                  placeholder="b"
                  className="w-16"
                />
                <span>x +</span>
                <Input
                  value={calculatorInput.c}
                  onChange={(e) => setCalculatorInput(prev => ({ ...prev, c: e.target.value }))}
                  placeholder="c"
                  className="w-16"
                />
                <span>= 0</span>
              </div>
            </div>

            <Button onClick={calculateQuadratic} className="w-full">
              🔢 Vypočítat kořeny
            </Button>

            {calculatorResult && (
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-900">Výsledek:</div>
                <div className="text-green-800">{calculatorResult}</div>
              </div>
            )}
          </div>

          {/* Quick examples */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Rychlé příklady:</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { a: '1', b: '0', c: '-4', label: 'x² - 4' },
                { a: '1', b: '-5', c: '6', label: 'x² - 5x + 6' },
                { a: '2', b: '-4', c: '2', label: '2x² - 4x + 2' },
                { a: '1', b: '0', c: '1', label: 'x² + 1' }
              ].map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setCalculatorInput(example)}
                  className="text-xs"
                >
                  {example.label}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Real-world connections */}
      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">🌍 Spojení s reálným světem</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🏀</div>
            <h3 className="font-semibold mb-2">Sport</h3>
            <p className="text-sm text-gray-600">
              Trajektorie míče v basketbalu, fotbale nebo tenisu následuje parabolu popisovanou kvadratickou rovnicí.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">🏗️</div>
            <h3 className="font-semibold mb-2">Architektura</h3>
            <p className="text-sm text-gray-600">
              Parabolické oblouky v mostech a budovách využívají vlastnosti kvadratických funkcí pro optimální rozložení zatížení.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">📡</div>
            <h3 className="font-semibold mb-2">Technologie</h3>
            <p className="text-sm text-gray-600">
              Parabolické antény a reflektory využívají fokusní vlastnosti paraboly pro koncentraci signálů.
            </p>
          </div>
        </div>
      </Card>

      {/* Learning tips */}
      <Card className="p-6 bg-purple-50 border-purple-200">
        <h3 className="font-semibold text-purple-900 mb-4">🎯 Tipy pro praktické učení:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm text-purple-800">
            <li>• Experimentujte s různými úhly a pozorujte změny</li>
            <li>• Zkuste předpovědět výsledek před výpočtem</li>
            <li>• Hledejte vzorce ve vašich experimentech</li>
            <li>• Propojte matematiku s reálnými situacemi</li>
          </ul>
          <ul className="space-y-2 text-sm text-purple-800">
            <li>• Používejte kalkulátor k ověření hypotéz</li>
            <li>• Vytvořte si vlastní experimenty</li>
            <li>• Diskutujte výsledky s ostatními</li>
            <li>• Zapisujte si pozorování a závěry</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};