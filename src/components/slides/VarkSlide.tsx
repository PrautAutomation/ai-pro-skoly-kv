
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface VarkSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const VarkSlide: React.FC<VarkSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <h2>🧠 Vědecký základ - Jak se lidé učí</h2>
      
      <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', marginBottom: '2rem', textAlign: 'center', fontWeight: 500 }}>
        <strong>VARK Model - 4 základní styly učení:</strong>
      </p>

      <div className="vark-grid-symmetric">
        <div className="vark-card">
          <h3>👁️ Vizuální studenti</h3>
          <p><span className="highlight-text">65% populace</span></p>
          <p>Lépe chápou prostřednictvím obrázků, grafů, schémat. Potřebují "vidět" informace.</p>
        </div>
        
        <div className="vark-card">
          <h3>🎧 Auditivní studenti</h3>
          <p><span className="highlight-text">30% populace</span></p>
          <p>Učí se posloucháním a diskuzí. Rádi si vysvětlují látku nahlas.</p>
        </div>
        
        <div className="vark-card">
          <h3>📖 Čteči/písaři</h3>
          <p><span className="highlight-text">25% populace</span></p>
          <p>Preferují textové materiály a psaní poznámek. Potřebují strukturované texty.</p>
        </div>
        
        <div className="vark-card">
          <h3>🤝 Kinestetičtí studenti</h3>
          <p><span className="highlight-text">15% populace</span></p>
          <p>Musí si věci "osahat" a vyzkoušet. Učí se nejlépe praktickými aktivitami.</p>
        </div>
      </div>

      <div className="glass-card solution-highlight">
        <p style={{ textAlign: 'center', fontStyle: 'italic', margin: 0, fontSize: '1.1rem' }}>
          Většina studentů kombinuje více stylů, ale má jeden dominantní. <br />
          <strong>Personalizace podle stylu učení může zlepšit výsledky o 34%!</strong>
        </p>
      </div>
    </SlideLayout>
  );
};
