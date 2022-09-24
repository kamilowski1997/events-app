import { PayloadAction } from '@reduxjs/toolkit';
import type { EventsState } from '../state';

export const initAddEvent = (state: EventsState) => {
  state.addEventState = { loading: true };
};

export const clearAddEvent = (state: EventsState) => {
  state.addEventState = { loading: false };
};

export const addEventSuccess = (state: EventsState) => {
  state.addEventState = { loading: false, success: true };
};

export const addEventError = (state: EventsState, action: PayloadAction<string>) => {
  state.addEventState = { loading: false, success: false, error: action.payload };
};
