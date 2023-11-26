import axios from 'axios';
import { customResponse } from 'service/interceptors';

const createAxiosClient = () => {
  const axiosClient = axios.create({
    baseURL: "https://linkedin-cv-crawler.beta-limited.workers.dev/interview",
    validateStatus: status => status >= 200 && status < 300,
  });
  axiosClient.interceptors.response.use(customResponse);
  return axiosClient;
};

const axiosClient = createAxiosClient();

export default axiosClient;
