import axios, { AxiosResponse } from "axios";
import IActivity from "../data/activity/IActivity";
import { history } from "../index";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(undefined, error => {
  history.push("/404");
});

const response_body = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(response_body),
  post: (url: string, body: {}) => axios.post(url, body).then(response_body),
  put: (url: string, body: {}) => axios.put(url, body).then(response_body),
  del: (url: string) => axios.delete(url).then(response_body)
};

const Activities = {
  list: () => requests.get("/activities"),
  details: (id: string) => requests.get(`/activities/${id}`),
  create: (activity: IActivity) => requests.post(`/activities`, activity),
  update: (activity: IActivity) =>
    requests.put(`/activities/${activity.id}`, activity),
  delete: (id: string) => requests.del(`/activities/${id}`)
};

export default Activities;
