import axios from "axios";

/**
 * Axios instance configured with the base URL for the API.
 * Use this instance to make HTTP requests to the backend server.
 *
 * @type {import('axios').AxiosInstance}
 * @constant
 */
const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

export default api;
