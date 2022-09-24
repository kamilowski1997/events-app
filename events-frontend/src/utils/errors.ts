import { AxiosError } from 'axios';

export const logAxiosError = (error: AxiosError | any) =>
  console.error(error?.response?.data || error?.response || error?.toJSON() || error);
