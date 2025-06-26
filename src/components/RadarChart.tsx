import React from 'react';
import { LearningProfile } from '../types/learningStyle';

interface RadarChartProps {
  profile: LearningProfile;
}

export const RadarChart: React.FC<RadarChartProps> = ({ profile }) => {
  const data = [
    { label: 'Vizuální', value: profile.visual, color: '#3B82F6' },
    { label: 'Sluchový', value: profile.auditory, color: '#10B981' },
    { label: 'Pohybový', value: profile.kinesthetic, color: '#8B5CF6' },
    { label: 'Čtecí/Písací', value: profile.readWrite, color: '#F59E0B' }
  ];

  const size = 300;
  const center = size / 2;
  const maxRadius = 100;
  const levels = 5;

  // Calculate points for the polygon
  const angleStep = (2 * Math.PI) / data.length;
  const points = data.map((item, index) => {
    const angle = index * angleStep - Math.PI / 2; // Start from top
    const radius = (item.value / 100) * maxRadius;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    return { x, y, ...item };
  });

  const polygonPoints = points.map(p => `${p.x},${p.y}`).join(' ');

  // Background grid lines
  const gridLines = [];
  for (let level = 1; level <= levels; level++) {
    const radius = (level / levels) * maxRadius;
    const levelPoints = data.map((_, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const x = center + Math.cos(angle) * radius;
      const y = center + Math.sin(angle) * radius;
      return `${x},${y}`;
    }).join(' ');
    
    gridLines.push(
      <polygon
        key={level}
        points={levelPoints}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="1"
      />
    );
  }

  // Axis lines
  const axisLines = data.map((item, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const x = center + Math.cos(angle) * maxRadius;
    const y = center + Math.sin(angle) * maxRadius;
    
    return (
      <line
        key={index}
        x1={center}
        y1={center}
        x2={x}
        y2={y}
        stroke="#D1D5DB"
        strokeWidth="1"
      />
    );
  });

  // Labels
  const labels = data.map((item, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const labelRadius = maxRadius + 20;
    const x = center + Math.cos(angle) * labelRadius;
    const y = center + Math.sin(angle) * labelRadius;
    
    return (
      <g key={index}>
        <text
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-sm font-medium fill-gray-700"
        >
          {item.label}
        </text>
        <text
          x={x}
          y={y + 16}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs fill-gray-500"
        >
          {item.value}%
        </text>
      </g>
    );
  });

  return (
    <div className="flex justify-center">
      <svg width={size + 80} height={size + 80} className="overflow-visible">
        <g transform={`translate(40, 40)`}>
          {/* Grid lines */}
          {gridLines}
          
          {/* Axis lines */}
          {axisLines}
          
          {/* Data polygon */}
          <polygon
            points={polygonPoints}
            fill="rgba(59, 130, 246, 0.2)"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          
          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill={point.color}
              stroke="white"
              strokeWidth="2"
            />
          ))}
          
          {/* Labels */}
          {labels}
          
          {/* Level labels */}
          {Array.from({ length: levels }, (_, i) => {
            const level = ((i + 1) / levels) * 100;
            const y = center - ((i + 1) / levels) * maxRadius;
            return (
              <text
                key={i}
                x={center + 5}
                y={y}
                className="text-xs fill-gray-400"
                dominantBaseline="middle"
              >
                {level}%
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
};