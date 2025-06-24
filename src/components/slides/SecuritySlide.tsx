
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface SecuritySlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SecuritySlide: React.FC<SecuritySlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <h2>🔒 Ochrana dat a bezpečnost</h2>
      
      <div className="glass-card partnership-highlight">
        <h3 style={{ textAlign: 'center' }}>Vaše obavy chápeme - data studentů jsou citlivá</h3>
      </div>

      <div className="security-grid">
        <div className="security-card">
          <h4>🔐 Anonymizace</h4>
          <ul>
            <li>Žádná jména ani osobní údaje studentů</li>
            <li>Pouze vzdělávací vzorce a styly učení</li>
            <li>Veškerá data zůstávají ve vlastnictví školy</li>
          </ul>
        </div>
        
        <div className="security-card">
          <h4>📋 GDPR compliance</h4>
          <ul>
            <li>Plně v souladu s evropským nařízením</li>
            <li>Transparentní informování rodičů</li>
            <li>Možnost opt-out kdykoliv</li>
          </ul>
        </div>
        
        <div className="security-card">
          <h4>💾 Lokální uložení</h4>
          <ul>
            <li>Data zůstávají na školních serverech</li>
            <li>AI algoritmus běží lokálně</li>
            <li>Žádný přenos citlivých informací ven</li>
          </ul>
        </div>
        
        <div className="security-card">
          <h4>⚙️ Kontrola školy</h4>
          <ul>
            <li>Škola má plnou kontrolu nad všemi daty</li>
            <li>Možnost kdykoliv ukončit spolupráci</li>
            <li>Exportní možnosti pro vlastní analýzy</li>
          </ul>
        </div>
      </div>

      <div className="glass-card solution-highlight">
        <h3 style={{ textAlign: 'center', margin: 0 }}>
          🛡️ Bezpečnost a důvěra jsou naší prioritou číslo jedna
        </h3>
      </div>
    </SlideLayout>
  );
};
