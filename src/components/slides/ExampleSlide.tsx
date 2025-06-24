
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface ExampleSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const ExampleSlide: React.FC<ExampleSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <h2>📐 Konkrétní příklad - Hodina matematiky</h2>
      
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h3 style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          backdropFilter: 'blur(10px)', 
          padding: '1.5rem', 
          borderRadius: '16px', 
          border: '1px solid rgba(255, 255, 255, 0.2)' 
        }}>
          📚 Téma: Kvadratické rovnice
        </h3>
      </div>

      <div className="example-section">
        <h4 style={{ color: '#ef4444', marginBottom: '1.5rem' }}>❌ Tradiční výuka:</h4>
        <p>Všichni dostali stejný výklad u tabule + stejné příklady</p>
        
        <h4 style={{ margin: '2rem 0 1.5rem 0', color: '#22c55e' }}>✅ S naším AI:</h4>
        
        <div className="slide-6-grid">
          <div className="student-example">
            <h4>👁️ Pro vizuálního studenta:</h4>
            <ul>
              <li>Interaktivní graf zobrazující paraboly</li>
              <li>Barevné schéma pro různé části rovnice</li>
              <li>Animace měnících se koeficientů</li>
            </ul>
          </div>
          
          <div className="student-example">
            <h4>🎧 Pro auditivního studenta:</h4>
            <ul>
              <li>Hlasové vysvětlení krok za krokem</li>
              <li>Možnost diskuze s AI o problematických místech</li>
              <li>Rytmické načítání vzorců</li>
            </ul>
          </div>
          
          <div className="student-example">
            <h4>🤝 Pro praktického studenta:</h4>
            <ul>
              <li>Simulace házení míčku (reálná aplikace paraboly)</li>
              <li>Kalkulátor s možností experimentování</li>
              <li>Projekty typu "najdi optimální úhel pro katapult"</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-card solution-highlight">
        <h3 style={{ textAlign: 'center', margin: 0, color: '#22c55e' }}>
          🎯 Výsledek: Všichni pochopili stejné učivo, každý svým způsobem!
        </h3>
      </div>
    </SlideLayout>
  );
};
