// src/reducers/heroBannerReducer.ts

import { AnyAction } from 'redux';

// Define your initial state
const initialState = {
  dynamicContent: {
    title: 'Welcome to Finance Landing Page',
    description: 'This is a placeholder description.',
  },
};

// Define your action types
const UPDATE_HERO_BANNER_CONTENT = 'UPDATE_HERO_BANNER_CONTENT';

// Create your reducer function
const heroBannerReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_HERO_BANNER_CONTENT:
      return {
        ...state,
        dynamicContent: action.payload,
      };
    default:
      return state;
  }
};

export default heroBannerReducer;
