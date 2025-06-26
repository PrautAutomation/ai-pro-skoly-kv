import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

export const VisualLearning: React.FC = () => {
  const [a, setA] = useState([1]);
  const [b, setB] = useState([0]);
  const [c, setC] = useState([0]);
  
  // Calculate parabola points
  const generatePoints = (aVal: number, bVal: number, cVal: number) => {
    const points = [];
    const step = 0.2;
    for (let x = -10; x <= 10; x += step) {
      const y = aVal * x * x + bVal * x + cVal;
      if (y >= -20 && y <= 20) { // Limit y range for visibility
        points.push({ x: x * 20 + 200, y: 200 - y * 10 }); // Scale and center
      }
    }
    return points;
  };

  const points = generatePoints(a[0], b[0], c[0]);
  const pathData = points.length > 0 
    ? `M ${points[0].x},${points[0].y} ` + points.slice(1).map(p => `L ${p.x},${p.y}`).join(' ')
    : '';

  // Calculate roots using quadratic formula
  const discriminant = b[0] * b[0] - 4 * a[0] * c[0];
  const roots = discriminant >= 0 && a[0] !== 0 ? [
    (-b[0] + Math.sqrt(discriminant)) / (2 * a[0]),
    (-b[0] - Math.sqrt(discriminant)) / (2 * a[0])
  ] : [];

  // Calculate vertex
  const vertexX = a[0] !== 0 ? -b[0] / (2 * a[0]) : 0;
  const vertexY = a[0] * vertexX * vertexX + b[0] * vertexX + c[0];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          📈 Vizuální učení: Kvadratické rovnice
        </h1>
        <p className="text-gray-600">
          Objevte, jak koeficienty ovlivňují tvar paraboly!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Interactive Graph */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Graf funkce y = ax² + bx + c</h2>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <svg width="400" height="400" className="mx-auto">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e5e5" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
              
              {/* Axes */}
              <line x1="0" y1="200" x2="400" y2="200" stroke="#666" strokeWidth="2" />
              <line x1="200" y1="0" x2="200" y2="400" stroke="#666" strokeWidth="2" />
              
              {/* Axis labels */}
              <text x="390" y="195" className="text-sm fill-gray-600">x</text>
              <text x="205" y="15" className="text-sm fill-gray-600">y</text>
              
              {/* Parabola */}
              {pathData && (
                <path
                  d={pathData}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />
              )}
              
              {/* Vertex */}
              {a[0] !== 0 && (
                <circle
                  cx={vertexX * 20 + 200}
                  cy={200 - vertexY * 10}
                  r="5"
                  fill="#EF4444"
                  stroke="white"
                  strokeWidth="2"
                />
              )}
              
              {/* Roots */}
              {roots.map((root, index) => (
                <circle
                  key={index}
                  cx={root * 20 + 200}
                  cy={200}
                  r="4"
                  fill="#10B981"
                  stroke="white"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          {/* Current equation */}
          <div className="text-center mb-4">
            <div className="text-xl font-mono bg-blue-50 p-3 rounded-lg">
              y = <span className="text-red-600 font-bold">{a[0]}</span>x² + 
              <span className="text-green-600 font-bold"> {b[0] >= 0 ? '+' : ''}{b[0]}</span>x + 
              <span className="text-blue-600 font-bold"> {c[0] >= 0 ? '+' : ''}{c[0]}</span>
            </div>
          </div>

          {/* Information */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-red-50 p-3 rounded">
              <div className="font-semibold text-red-800">Vrchol paraboly:</div>
              <div className="text-red-600">({vertexX.toFixed(2)}, {vertexY.toFixed(2)})</div>
            </div>
            
            <div className="bg-green-50 p-3 rounded">
              <div className="font-semibold text-green-800">Kořeny:</div>
              <div className="text-green-600">
                {roots.length === 2 
                  ? `x₁ = ${roots[0].toFixed(2)}, x₂ = ${roots[1].toFixed(2)}`
                  : roots.length === 1 
                  ? `x = ${roots[0].toFixed(2)} (dvojnásobný)`
                  : 'Žádné reálné kořeny'
                }
              </div>
            </div>
          </div>
        </Card>

        {/* Controls */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Ovládání koeficientů</h2>
          
          <div className="space-y-6">
            {/* Coefficient a */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Koeficient a = <span className="text-red-600 font-bold">{a[0]}</span>
              </label>
              <Slider
                value={a}
                onValueChange={setA}
                max={3}
                min={-3}
                step={0.1}
                className="mb-2"
              />
              <div className="text-xs text-gray-500">
                Ovlivňuje šířku a orientaci paraboly
              </div>
            </div>

            {/* Coefficient b */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Koeficient b = <span className="text-green-600 font-bold">{b[0]}</span>
              </label>
              <Slider
                value={b}
                onValueChange={setB}
                max={10}
                min={-10}
                step={0.5}
                className="mb-2"
              />
              <div className="text-xs text-gray-500">
                Ovlivňuje polohu vrcholu na ose x
              </div>
            </div>

            {/* Coefficient c */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Koeficient c = <span className="text-blue-600 font-bold">{c[0]}</span>
              </label>
              <Slider
                value={c}
                onValueChange={setC}
                max={10}
                min={-10}
                step={0.5}
                className="mb-2"
              />
              <div className="text-xs text-gray-500">
                Ovlivňuje průsečík s osou y
              </div>
            </div>
          </div>

          {/* Quick presets */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Rychlé předvolby:</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setA([1]); setB([0]); setC([0]); }}
              >
                y = x²
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setA([1]); setB([0]); setC([-4]); }}
              >
                y = x² - 4
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setA([1]); setB([-4]); setC([3]); }}
              >
                y = x² - 4x + 3
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setA([-1]); setB([2]); setC([3]); }}
              >
                y = -x² + 2x + 3
              </Button>
            </div>
          </div>

          {/* Learning tips */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Tipy pro vizuální učení:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Pozorujte, jak se mění tvar paraboly při změně koeficientů</li>
              <li>• Všimněte si barevného kódování v rovnici</li>
              <li>• Sledujte polohu vrcholu (červený bod) a kořenů (zelené body)</li>
              <li>• Vyzkoušejte různé kombinace koeficientů</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};