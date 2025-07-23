import axios from "axios";

/**
 * Axios instance configured with the base URL for the API.
 * Use this instance to make HTTP requests to the backend server.
 *
 * @type {import('axios').AxiosInstance}
 * @constant
 */

// in production, theres no localhost so we have to make this dynamic
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
