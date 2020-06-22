import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defaultData } from "./mock-data";

// create default mock data
export const mock = new MockAdapter(axios);
mock.onGet("/products").reply(200, defaultData);
for (let i = 0; i < defaultData.length; i++) {
  mock.onGet(`/products/${i + 1}`).reply(200, defaultData[i]);
}

export default axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
