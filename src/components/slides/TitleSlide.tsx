
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface TitleSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        textAlign: 'center' 
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <div className="school-icon">🏫</div>
        </div>
        
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
          AI vzdělávání pro Karlovarský kraj
        </h2>
        
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ 
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', 
            margin: '0 0 1.5rem 0', 
            opacity: 0.95, 
            fontWeight: 500,
            textAlign: 'center'
          }}>
            Setkání ředitelů škol - Partnerství pro budoucnost
          </p>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
            opacity: 0.8, 
            fontWeight: 400, 
            margin: 0,
            textAlign: 'center'
          }}>
            Každý student se učí jinak. Pojďme být první, kdo to respektuje.
          </p>
        </div>
        
        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/lovable-uploads/8b66dd82-101f-4836-8d7d-70ac1d4b9147.png" alt="Praut s.r.o." style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
        </div>
      </div>
    </SlideLayout>
  );
};
