import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { mockData } from "../mock-data";

const mock = new MockAdapter(axios);

mock.onGet("/products").reply(200, mockData);

for (let i = 0; i < mockData.length; i++) {
  mock.onGet(`/products/${i+1}`).reply(200, mockData[i]);
}

// mock.onPost("/products").reply(200, { title: "title", description: "description", price: 123 });

export default axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
