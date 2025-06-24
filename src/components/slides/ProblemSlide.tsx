
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface ProblemSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const ProblemSlide: React.FC<ProblemSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <h2>🎯 Výzva pro ředitele škol v Karlovarském kraji</h2>
      
      <div className="glass-card problem-highlight">
        <h3>Vážení ředitelé, každý student se učí jinak, ale vyučujeme všechny stejně</h3>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">25-30</span>
          <span className="stat-label">studentů na jednoho učitele</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">40%</span>
          <span className="stat-label">studentů označuje školu za "nudnou"</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">60%</span>
          <span className="stat-label">učitelů se cítí přetížených</span>
        </div>
      </div>

      <div className="grid-2-symmetric">
        <div>
          <h3>🔍 Co vidíme ve školách Karlovarského kraje:</h3>
          <ul>
            <li><strong>Demografický pokles</strong> - konkurence o každého studenta</li>
            <li><strong>Odchod talentů</strong> do Prahy nebo Plzně</li>
            <li><strong>Konkurence soukromých škol</strong> s lepším vybavením</li>
            <li><strong>Potřeba ukázat moderní přístup</strong> rodičům</li>
            <li>Přetížení učitelé bez času na individuální přístup</li>
            <li>Standardizované testy neodráží skutečné schopnosti</li>
          </ul>
        </div>
        <div>
          <div className="glass-card solution-highlight">
            <h3>💡 Naše řešení pro ředitele:</h3>
            <p>AI asistent, který pomůže vaší škole vyniknout v regionu a přitáhnout nejlepší studenty i učitele.</p>
            
            <h4 style={{ marginTop: '1.5rem' }}>Konkurenční výhoda:</h4>
            <ul style={{ marginTop: '1rem' }}>
              <li><strong>První škola s komplexním AI řešením</strong> v regionu - nikdo jiný se nemůže pochlubit podobnou integrací</li>
              <li><strong>Lepší reputace:</strong> "Moderní škola" přitáhne talenty</li>
              <li><strong>Udržení studentů:</strong> Méně odchodů na jiné školy</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
