import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';
import type { EventsState } from './state';

export const name = 'events';

const slice = createSlice<EventsState, typeof reducers>({
  name: name,
  initialState: {
    addEventState: { loading: false },
  } as EventsState,
  reducers: { ...reducers },
});

export const { actions, reducer } = slice;

export const selectState = (state: any) => state[name];
