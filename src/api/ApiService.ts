import { AxiosInstance } from "axios";
import initAxios from "./initAxios";

const API_URL = "https://where-is-my-money-backend.onrender.com";

export class ApiService {
  protected fetch: AxiosInstance;

  constructor() {
    this.fetch = initAxios(API_URL);
  }
}
