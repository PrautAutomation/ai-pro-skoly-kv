
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface PersonalizationSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const PersonalizationSlide: React.FC<PersonalizationSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <h2>📊 Proč personalizace funguje</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">34%</span>
          <span className="stat-label">zlepšení výsledků při personalizované výuce</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">50%</span>
          <span className="stat-label">vyšší motivace studentů</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">60%</span>
          <span className="stat-label">snížení počtu "nepozorných" studentů</span>
        </div>
      </div>

      <div className="grid-2-symmetric">
        <div>
          <h3>🌍 Mezinárodní příklady úspěchu:</h3>
          <ul>
            <li><strong>Finsko:</strong> Individuální přístup = světový lídr ve vzdělávání</li>
            <li><strong>Singapur:</strong> Personalizované STEM programy</li>
            <li><strong>Montessori školy:</strong> Individuální tempo od počátku</li>
            <li><strong>Khan Academy:</strong> Adaptivní učení s prokázanými výsledky</li>
          </ul>
        </div>
        
        <div>
          <h3>🎯 Výhody pro vaši školu jako ředitele:</h3>
          <div className="glass-card solution-highlight">
            <ul style={{ margin: 0 }}>
              <li><strong>Konkurenční výhoda:</strong> První škola s AI personalizací v regionu</li>
              <li><strong>Lepší reputace:</strong> "Moderní škola" přitáhne nejlepší studenty a učitele</li>
              <li><strong>Měřitelné výsledky:</strong> Lepší výsledky studentů = vyšší prestiž školy</li>
              <li><strong>Spokojení učitelé:</strong> Méně stresu, více času na kreativní výuku</li>
              <li><strong>Pozitivní publicita:</strong> Média se budou zajímat o vaši inovaci</li>
              <li><strong>Udržení studentů:</strong> Méně odchodů na jiné školy</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
