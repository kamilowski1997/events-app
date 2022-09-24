import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

//TODO change URL
export const baseURL = 'http://localhost:8080/';

class AxiosInstance {
  private axios = axios.create({ baseURL });

  public get = <T = any>(...params: [string, AxiosRequestConfig?]): Promise<AxiosResponse<T>> =>
    this.axios.get<T>(...params);

  public post = <T = any>(
    ...params: [string, any?, AxiosRequestConfig?]
  ): Promise<AxiosResponse<T>> => this.axios.post<T>(...params);

  public delete = <T = any>(...params: [string, AxiosRequestConfig?]): Promise<AxiosResponse<T>> =>
    this.axios.delete<T>(...params);

  public patch = <T = any>(
    ...params: [string, any?, AxiosRequestConfig?]
  ): Promise<AxiosResponse<T>> => this.axios.patch<T>(...params);
}

export default AxiosInstance;
