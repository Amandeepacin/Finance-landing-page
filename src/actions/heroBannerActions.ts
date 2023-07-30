// src/actions/heroBannerActions.ts

import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers';

// Define your action types
const UPDATE_HERO_BANNER_CONTENT = 'UPDATE_HERO_BANNER_CONTENT';

// Define your action creators
export const updateHeroBanner = (content: any): AnyAction => ({
  type: UPDATE_HERO_BANNER_CONTENT,
  payload: content,
});

// Define your async action (if you need to fetch data from the backend)
export const fetchHeroBannerContent = (): ThunkAction<void, RootState, unknown, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>
) => {
  try {
    // You can implement API calls here to fetch dynamic content from the backend
    const content = {
      title: 'Dynamic Title',
      description: 'Dynamic description fetched from the backend.',
    };
    dispatch(updateHeroBanner(content));
  } catch (error) {
    // Handle error here
  }
};
