
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface PartnershipSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const PartnershipSlide: React.FC<PartnershipSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <h2>🤝 Partnerství s Karlovarským krajem</h2>
      
      <div className="glass-card partnership-highlight">
        <h3 style={{ textAlign: 'center' }}>Hledáme 3-5 škol z Karlovarského kraje pro pilotní program</h3>
      </div>

      <div>
        <div className="glass-card problem-highlight">
          <h3>🎯 Ideální partner pro pilotní program:</h3>
          <ul style={{ marginTop: '1rem' }}>
            <li><strong>Otevřený inovacím</strong> - ředitel podporující modernizaci</li>
            <li><strong>Motivovaný tým učitelů</strong> - alespoň 2-3 nadšení učitelé</li>
            <li><strong>Stabilní škola</strong> - minimálně 200 studentů</li>
            <li><strong>Dobré vztahy s rodiči</strong> - otevřená komunikace s komunitou</li>
            <li><strong>Zájem o výjimečnost</strong> - chce se odlišit od konkurence</li>
          </ul>
        </div>
        
        <div className="glass-card solution-highlight" style={{ marginTop: '2rem' }}>
          <h3>🎁 Co jako ředitel získáte:</h3>
          
          <h4 style={{ marginTop: '1.5rem' }}>Bezplatná implementace (běžná hodnota 500 000 Kč)</h4>
          <ul style={{ marginTop: '0.75rem' }}>
            <li>Kompletní AI systém pro jednu třídu na celý školní rok</li>
            <li>Instalace, nastavení a školení učitelů zdarma</li>
            <li>Technická podpora a pravidelné konzultace</li>
          </ul>
          
          <h4 style={{ marginTop: '1.5rem' }}>Konkurenční výhoda</h4>
          <ul style={{ marginTop: '0.75rem' }}>
            <li>První škola s AI personalizací v regionu</li>
            <li>Pozitivní publicita v médiích a u rodičů</li>
            <li>Možnost prezentovat se jako "škola budoucnosti"</li>
          </ul>
          
          <h4 style={{ marginTop: '1.5rem' }}>Dlouhodobé partnerství</h4>
          <ul style={{ marginTop: '0.75rem' }}>
            <li>Spoluúčast na vývoji produktu</li>
            <li>Prioritní přístup k novým funkcím</li>
            <li>Možnost stát se referenční školou pro celou ČR</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
};
