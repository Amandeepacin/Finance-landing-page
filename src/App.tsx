// src/App.tsx

import React from 'react';
import HeroBanner from './components/HeroBanner';
import ContentSection from './components/ContentSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeroBanner />
      <ContentSection />
    </div>
  );
};

export default App;
