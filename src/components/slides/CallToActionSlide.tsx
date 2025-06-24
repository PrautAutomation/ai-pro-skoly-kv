
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface CallToActionSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const CallToActionSlide: React.FC<CallToActionSlideProps> = ({ slideNumber, totalSlides }) => {
  const handleEmailClick = () => {
    window.open('mailto:info@praut.cz?subject=Zájem o AI vzdělávání - Karlovarský kraj');
  };

  const handlePhoneClick = () => {
    window.open('tel:+420XXXXXXXXX');
  };

  const handleMeetingClick = () => {
    alert('Kontaktujte nás pro individuální schůzku na vaší škole!');
  };

  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="cta-section">
        <h1 style={{ marginBottom: '2rem' }}>🚀 Výzva k partnerství pro Karlovarský kraj</h1>
        
        <div style={{ margin: '3rem 0', fontSize: '1.2rem' }}>
          <h3 style={{ marginBottom: '2rem' }}>Dnes vám nabízím možnost stát se průkopníky</h3>
        </div>
        
        <div className="grid-2-symmetric" style={{ margin: '3rem 0', textAlign: 'left' }}>
          <div>
            <h4>🎯 Proč právě vaše školy:</h4>
            <ul>
              <li><strong>Karlovarský kraj</strong> může být první region s AI vzděláváním</li>
              <li><strong>Demografické výzvy</strong> vyžadují inovativní řešení</li>
              <li><strong>Konkurence</strong> mezi školami roste - potřebujete výhodu</li>
              <li><strong>Talentovaní studenti</strong> zůstanou v regionu</li>
            </ul>
          </div>
          
          <div>
            <h4>🎁 Co nabízím jako CEO:</h4>
            <ul>
              <li><strong>3-5 pilotních míst</strong> pro školy z kraje</li>
              <li><strong>Bezplatná implementace</strong> v hodnotě 500 000 Kč</li>
              <li><strong>Preferenční podmínky</strong> po úspěšném pilotu</li>
              <li><strong>Mediální podpora</strong> - "škola budoucnosti"</li>
            </ul>
          </div>
        </div>

        <div style={{ margin: '3rem 0' }}>
          <h4 style={{ marginBottom: '1.5rem' }}>📋 Jak to bude probíhat:</h4>
          <ol style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
            <li><strong>Dnes se rozhodnete</strong> - kdo má zájem o prezentaci</li>
            <li><strong>Příští týden navštívím</strong> vybrané školy (individuálně)</li>
            <li><strong>Do konce měsíce</strong> výběr 3-5 partnerských škol</li>
            <li><strong>Od září</strong> start pilotního programu</li>
          </ol>
        </div>
        
        <div style={{ margin: '3rem 0' }}>
          <button className="cta-button" onClick={handleEmailClick}>📧 info@praut.cz</button>
          <button className="cta-button" onClick={handlePhoneClick}>📞 +420 XXX XXX XXX</button>
          <button className="cta-button" onClick={handleMeetingClick}>🤝 Chci individuální schůzku</button>
        </div>
        
        <p style={{ fontSize: '1.4rem', margin: '2rem 0', fontWeight: 600 }}>
          <span className="pulse">⚡</span> Kdo má zájem, ať se ozve ještě dnes - místa jsou limitovaná!
        </p>
        
        <p style={{ fontSize: '1.6rem', margin: 0, fontStyle: 'italic', opacity: 0.9 }}>
          "Karlovarský kraj může být první region, kde každé dítě dostane vzdělávání šité na míru."
        </p>
        
        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/lovable-uploads/8b66dd82-101f-4836-8d7d-70ac1d4b9147.png" alt="Praut s.r.o." style={{ height: '50px', width: 'auto', opacity: 0.7 }} />
        </div>
      </div>
    </SlideLayout>
  );
};
