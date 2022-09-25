import { AxiosError } from 'axios';
import { logAxiosError } from './errors';

describe('logAxiosError', () => {
  it('console.error should log response.data when available', () => {
    jest.spyOn(console, 'error').mockImplementation();
    //given
    const error: AxiosError | any = {
      response: {
        data: 'errorResponseData',
      },
    };

    //when
    logAxiosError(error);

    //then
    expect(console.error).toBeCalledWith(error.response.data);
  });

  it('console.error should log response when available', () => {
    jest.spyOn(console, 'error').mockImplementation();
    //given
    const error: AxiosError | any = {
      response: 'errorResponseData',
    };

    //when
    logAxiosError(error);

    //then
    expect(console.error).toBeCalledWith(error.response);
  });

  it('console.error should log toJSON() when available', () => {
    jest.spyOn(console, 'error').mockImplementation();
    //given
    const error: AxiosError | any = {
      toJSON: () => 'jsonData',
    };

    //when
    logAxiosError(error);

    //then
    expect(console.error).toBeCalledWith(error.toJSON());
  });

  it('console.error should log error when available', () => {
    jest.spyOn(console, 'error').mockImplementation();
    //given
    const error: AxiosError | any = 'error';

    //when
    logAxiosError(error);

    //then
    expect(console.error).toBeCalledWith(error);
  });
});
