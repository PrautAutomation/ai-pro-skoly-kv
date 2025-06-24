
import React, { useEffect, useState } from 'react';

interface PresentationNavigationProps {
  onNext: () => void;
  onPrev: () => void;
}

export const PresentationNavigation: React.FC<PresentationNavigationProps> = ({
  onNext,
  onPrev,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout;
    
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      setIsVisible(true);
      
      inactivityTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    const handleMouseMove = () => resetInactivityTimer();
    const handleKeyDown = () => resetInactivityTimer();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keydown', handleKeyDown);
    
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(inactivityTimer);
    };
  }, []);

  return (
    <div className={`navigation ${isVisible ? 'visible' : 'hidden'}`}>
      <button 
        className="nav-button" 
        onClick={onPrev} 
        title="Předchozí slide" 
        aria-label="Předchozí slide"
      >
        ‹
      </button>
      <button 
        className="nav-button" 
        onClick={onNext} 
        title="Další slide" 
        aria-label="Další slide"
      >
        ›
      </button>
    </div>
  );
};
