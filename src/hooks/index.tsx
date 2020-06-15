import { useMemo, useState } from "react";
import ProductsDataService from "../services/products";

export const useGetProductData = (id: number) => {
  const [product, setProduct] = useState<{
    title: string;
    description?: string;
    price: string;
  }>({
    title: "",
    price: "",
  });

  useMemo(() => {
    ProductsDataService.get(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return product;
};
