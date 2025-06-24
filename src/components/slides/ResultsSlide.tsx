
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface ResultsSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const ResultsSlide: React.FC<ResultsSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <h2>📈 Očekávané výsledky</h2>
      
      <div className="glass-card partnership-highlight">
        <h3 style={{ textAlign: 'center' }}>Co můžete čekat po roce spolupráce:</h3>
      </div>

      <div className="benefit-card">
        <h4>🎓 Měřitelné benefity pro studenty</h4>
        <div className="stats-grid" style={{ margin: '1.5rem 0' }}>
          <div className="stat-card">
            <span className="stat-number" style={{ fontSize: '2rem' }}>25-40%</span>
            <span className="stat-label">zlepšení výsledků v testech</span>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{ fontSize: '2rem' }}>50%</span>
            <span className="stat-label">vyšší míra dokončení úkolů</span>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{ fontSize: '2rem' }}>60%</span>
            <span className="stat-label">studentů hlásí vyšší zájem</span>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{ fontSize: '2rem' }}>30%</span>
            <span className="stat-label">snížení neprospívajících</span>
          </div>
        </div>
      </div>
      
      <div className="benefit-card" style={{ marginTop: '2rem' }}>
        <h4>👨‍🏫 Benefity pro učitele</h4>
        <ul>
          <li><strong>3-5 hodin týdně</strong> úspory času při přípravě</li>
          <li><strong>Lepší vztahy</strong> se studenty díky individuálnímu přístupu</li>
          <li><strong>Nové dovednosti</strong> v oblasti digitálního vzdělávání</li>
          <li><strong>Vyšší pracovní spokojenost</strong> a motivace</li>
        </ul>
      </div>
      
      <div className="benefit-card" style={{ marginTop: '2rem' }}>
        <h4>🏫 Benefity pro školu</h4>
        <ul>
          <li><strong>Pozitivní publicita</strong> jako inovativní instituce</li>
          <li><strong>Lepší výsledky</strong> v krajských/národních srovnáních</li>
          <li><strong>Vyšší zájem</strong> rodičů o přihlášení dětí</li>
          <li><strong>Možnost získání grantů</strong> na inovace ve vzdělávání</li>
        </ul>
      </div>
    </SlideLayout>
  );
};
