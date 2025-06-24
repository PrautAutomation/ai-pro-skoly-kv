
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface ImplementationSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const ImplementationSlide: React.FC<ImplementationSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <h2>📅 Implementace krok za krokem</h2>
      
      <div className="glass-card partnership-highlight">
        <h3 style={{ textAlign: 'center' }}>Jak začneme - časový plán:</h3>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="month-label">Měsíc 1: Příprava</div>
            <ul>
              <li>Setkání s vedením školy a učiteli</li>
              <li>Prezentace rodičům a získání souhlasů</li>
              <li>Technické nastavení systému</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="month-label">Měsíc 2-3: Diagnostika a nastavení</div>
            <ul>
              <li>Studenti vyplní vstupní testy</li>
              <li>Kalibrace AI pro českou vzdělávací soustavu</li>
              <li>Školení učitelů v práci se systémem</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="month-label">Měsíc 4-12: Aktivní pilotování</div>
            <ul>
              <li>Pravidelná výuka s AI asistencí</li>
              <li>Měsíční hodnocení pokroku</li>
              <li>Průběžné dotazníky spokojenosti</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="month-label">Měsíc 12: Vyhodnocení</div>
            <ul>
              <li>Porovnání výsledků před/po implementaci</li>
              <li>Zpráva o dopadu na vzdělávání</li>
              <li>Rozhodnutí o pokračování</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
