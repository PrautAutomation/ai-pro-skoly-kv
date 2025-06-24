
import React from 'react';
import { SlideLayout } from './SlideLayout';

interface TitleSlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="school-icon">🏫</div>
      <h1>AI vzdělávání pro Karlovarský kraj</h1>
      <div style={{ 
        background: 'rgba(0, 0, 0, 0.3)', 
        backdropFilter: 'blur(20px)', 
        borderRadius: '16px', 
        padding: '2rem', 
        margin: '2rem 0',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', margin: '0 0 1.5rem 0', opacity: 0.95, fontWeight: 500 }}>
          Setkání ředitelů škol - Partnerství pro budoucnost
        </p>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', opacity: 0.8, fontWeight: 400, margin: 0 }}>
          Každý student se učí jinak. Pojďme být první, kdo to respektuje.
        </p>
      </div>
    </SlideLayout>
  );
};
