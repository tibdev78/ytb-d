import axios, { AxiosRequestConfig } from "axios";

const getData = (url: string, config: AxiosRequestConfig) => {
  try {
    return axios.get(url, config);
  } catch (err) {
    throw new Error(err);
  }
};

export default getData;
