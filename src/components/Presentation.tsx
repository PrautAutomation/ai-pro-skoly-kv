
import React, { useEffect, useState } from 'react';
import { PresentationNavigation } from './PresentationNavigation';
import { PresentationIndicator } from './PresentationIndicator';
import { ProgressBar } from './ProgressBar';
import { TitleSlide } from './slides/TitleSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { VarkSlide } from './slides/VarkSlide';
import { PersonalizationSlide } from './slides/PersonalizationSlide';
import { AiSolutionSlide } from './slides/AiSolutionSlide';
import { ExampleSlide } from './slides/ExampleSlide';
import { PartnershipSlide } from './slides/PartnershipSlide';
import { SecuritySlide } from './slides/SecuritySlide';
import { ImplementationSlide } from './slides/ImplementationSlide';
import { ResultsSlide } from './slides/ResultsSlide';
import { CallToActionSlide } from './slides/CallToActionSlide';
import './presentation.css';

const TOTAL_SLIDES = 11;

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    { id: 1, component: TitleSlide },
    { id: 2, component: ProblemSlide },
    { id: 3, component: VarkSlide },
    { id: 4, component: PersonalizationSlide },
    { id: 5, component: AiSolutionSlide },
    { id: 6, component: ExampleSlide },
    { id: 7, component: PartnershipSlide },
    { id: 8, component: SecuritySlide },
    { id: 9, component: ImplementationSlide },
    { id: 10, component: ResultsSlide },
    { id: 11, component: CallToActionSlide },
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => prev >= TOTAL_SLIDES ? 1 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev <= 1 ? TOTAL_SLIDES : prev - 1);
  };

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="presentation-wrapper">
      <ProgressBar currentSlide={currentSlide} totalSlides={TOTAL_SLIDES} />
      
      <div className="presentation-container">
        {slides.map(({ id, component: SlideComponent }) => (
          <div
            key={id}
            className={`slide ${currentSlide === id ? 'active' : ''}`}
            id={`slide-${id}`}
          >
            <SlideComponent slideNumber={id} totalSlides={TOTAL_SLIDES} />
          </div>
        ))}
      </div>

      <PresentationNavigation 
        onNext={nextSlide} 
        onPrev={prevSlide} 
      />
      
      <PresentationIndicator 
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onSlideClick={goToSlide}
      />
    </div>
  );
};
