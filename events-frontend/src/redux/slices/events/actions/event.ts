import { createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import HTTPService from '../../../../services/HTTPService/HTTPService';
import { logAxiosError } from '../../../../utils/errors';
import { Event } from '../../../../utils/interfaces/event';
import { actions } from '../index';

dayjs.extend(customParseFormat);

const addEvent = createAsyncThunk('events/add', async (payload: Event, thunkApi) => {
  try {
    thunkApi.dispatch(actions.initAddEvent());
    const addEventData = { ...payload, eventDate: payload.eventDate.toISOString() };
    // await HTTPService.addEvent(addEventData);
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    thunkApi.dispatch(actions.addEventSuccess());
  } catch (error: any) {
    logAxiosError(error);
    thunkApi.dispatch(actions.addEventError(error.response?.data));
    throw error;
  }
});

export { addEvent };
