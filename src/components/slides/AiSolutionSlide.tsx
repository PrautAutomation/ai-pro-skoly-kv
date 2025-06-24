
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface AiSolutionSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const AiSolutionSlide: React.FC<AiSolutionSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <h2>🤖 Naše AI řešení pro školy</h2>
      
      <div className="glass-card partnership-highlight">
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Jak to funguje v praxi:</h3>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="month-label">1. Rychlá diagnostika (5 minut)</div>
            <ul>
              <li>Student vyplní jednoduchý test svého stylu učení</li>
              <li>AI analyzuje odpovědi a chování</li>
              <li>Vytvoří osobní "vzdělávací profil"</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="month-label">2. Automatická personalizace</div>
            <ul>
              <li>Stejné učivo, různé formáty pro různé studenty</li>
              <li>Vizuální studenti dostanou grafy a obrázky</li>
              <li>Auditivní studenti si mohou pustit vysvětlení</li>
              <li>Praktici dostanou simulace a experimenty</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="month-label">3. Podpora pro učitele</div>
            <ul>
              <li>AI navrhne, jak vysvětlit látku různým typům studentů</li>
              <li>Automaticky připraví materiály v různých formátech</li>
              <li>Upozorní na studenty, kteří potřebují extra pomoc</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
