
import React from 'react';

interface SlideLayoutProps {
  slideNumber: number;
  totalSlides: number;
  children: React.ReactNode;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  slideNumber,
  totalSlides,
  children,
  className = '',
}) => {
  return (
    <>
      <div className="praut-logo" />
      <div className="slide-counter">{slideNumber}/{totalSlides}</div>
      <div className={className}>
        {children}
      </div>
      {slideNumber === 1 || slideNumber === totalSlides ? (
        <div className="ceo-info">
          <strong>Martin Švanda</strong><br>
          CEO & Co-founder, Praut s.r.o.
        </div>
      ) : null}
    </>
  );
};
