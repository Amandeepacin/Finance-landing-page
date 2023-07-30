// src/components/HeroBanner.tsx

import React, { useEffect } from 'react';
import { useDispatch, Dispatch } from 'react-redux'; // Import Dispatch type
import { fetchHeroBannerContent } from '../actions/heroBannerActions';

const HeroBanner: React.FC = () => {
  const dispatch: Dispatch = useDispatch(); // Define the type of dispatch

  useEffect(() => {
    dispatch(fetchHeroBannerContent());
  }, [dispatch]);

  return (
    <div className="hero-banner">
      {/* Content from Redux state will be displayed here */}
    </div>
  );
};

export default HeroBanner;
