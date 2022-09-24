import { createSelector } from '@reduxjs/toolkit';
import { selectState } from '../slice';
import { EventsState } from '../state';

const selectAddEventState = createSelector(
  selectState,
  (state: EventsState) => state.addEventState,
);

export { selectAddEventState };
