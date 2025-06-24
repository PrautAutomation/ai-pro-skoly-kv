
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
      
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3>Co můžete čekat po roce spolupráce:</h3>
      </div>

      <div>
        <h3>🎓 Měřitelné benefity pro studenty</h3>
        <ul>
          <li><strong>25-40% zlepšení výsledků</strong> v testech</li>
          <li><strong>50% vyšší míra dokončení</strong> úkolů</li>
          <li><strong>60% studentů hlásí vyšší zájem</strong> o učení</li>
          <li><strong>30% snížení neprospívajících</strong> studentů</li>
        </ul>
        
        <h3 style={{ marginTop: '2rem' }}>👨‍🏫 Benefity pro učitele</h3>
        <ul>
          <li><strong>3-5 hodin týdně úspory času</strong> při přípravě</li>
          <li><strong>Lepší vztahy se studenty</strong> díky individuálnímu přístupu</li>
          <li><strong>Nové dovednosti</strong> v oblasti digitálního vzdělávání</li>
          <li><strong>Vyšší pracovní spokojenost</strong> a motivace</li>
        </ul>
        
        <h3 style={{ marginTop: '2rem' }}>🏫 Benefity pro školu</h3>
        <ul>
          <li><strong>Pozitivní publicita</strong> jako inovativní instituce</li>
          <li><strong>Lepší výsledky</strong> v krajských/národních srovnáních</li>
          <li><strong>Vyšší zájem rodičů</strong> o přihlášení dětí</li>
          <li><strong>Možnost získání grantů</strong> na inovace ve vzdělávání</li>
        </ul>
      </div>
    </SlideLayout>
  );
};
