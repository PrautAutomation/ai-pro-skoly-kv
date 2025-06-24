
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
      <div className="praut-logo">
        <img src="/lovable-uploads/8b66dd82-101f-4836-8d7d-70ac1d4b9147.png" alt="Praut s.r.o." style={{ height: '40px', width: 'auto' }} />
      </div>
      <div className="slide-counter">{slideNumber}/{totalSlides}</div>
      <div className={className}>
        {children}
      </div>
      {slideNumber === 1 || slideNumber === totalSlides ? (
        <div className="ceo-info">
          <strong>Martin Švanda</strong><br />
          CEO & Co-founder, Praut s.r.o.
        </div>
      ) : null}
    </>
  );
};
