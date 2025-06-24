
import React from 'react';

interface PresentationIndicatorProps {
  currentSlide: number;
  totalSlides: number;
  onSlideClick: (slideNumber: number) => void;
}

export const PresentationIndicator: React.FC<PresentationIndicatorProps> = ({
  currentSlide,
  totalSlides,
  onSlideClick,
}) => {
  return (
    <div className="slide-indicator">
      {Array.from({ length: totalSlides }, (_, index) => (
        <div
          key={index + 1}
          className={`indicator-dot ${currentSlide === index + 1 ? 'active' : ''}`}
          onClick={() => onSlideClick(index + 1)}
        />
      ))}
    </div>
  );
};
