import http from "./http-common";
import { IProduct } from "../types";

class ProductsDataService {
  getAll() {
    return http.get("/products");
  }

  create(data: IProduct) {
    return http.post("/products", data);
  }

  get(id: number) {
    return http.get(`/products/${id}`);
  }

  update(id: number, data: IProduct) {
    return http.put(`/products/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/products/${id}`);
  }
}

export default new ProductsDataService();
