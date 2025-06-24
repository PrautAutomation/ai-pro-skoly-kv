
import React from 'react';

interface ProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentSlide,
  totalSlides,
}) => {
  const progress = (currentSlide / totalSlides) * 100;

  return (
    <div 
      className="progress-bar" 
      style={{ width: `${progress}%` }}
    />
  );
};
