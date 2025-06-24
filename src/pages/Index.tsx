
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the presentation
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-lg">Načítání prezentace...</p>
      </div>
    </div>
  );
};

export default Index;
