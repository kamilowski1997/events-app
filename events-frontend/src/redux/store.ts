import { useDispatch as useDispatchRedux } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as events from './slices/events';

const combinedReducers = combineReducers({
  [events.name]: events.reducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

type AppDispatch = typeof store.dispatch;

type RootState = ReturnType<typeof store.getState>;

const useDispatch = () => useDispatchRedux<AppDispatch>();

export { store, useDispatch };
export type { RootState };
