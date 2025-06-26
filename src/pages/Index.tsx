
import React from 'react';
import { Presentation } from '../components/Presentation';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* MVP Access Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => navigate('/mvp')}
          className="bg-green-600 hover:bg-green-700 shadow-lg"
        >
          🚀 Vyzkoušet MVP
        </Button>
      </div>
      
      <Presentation />
    </div>
  );
};

export default Index;
