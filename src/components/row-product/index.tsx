import React from "react";
import { useAction } from "@reatom/react";
import { Wrapper } from "./styled";
import { LinkButton, Button } from "../common/buttons";
import { deleteProduct } from "../../atoms";

const Product: React.FC<{
  id: number;
  title: string;
  price: string;
}> = ({ id, title, price }) => {
  //@ts-ignore
  const remove = useAction((val) => deleteProduct(val));

  return (
    <Wrapper>
      <div>
        <p>
          <strong>Название:</strong> {title}
        </p>
        <p>
          <strong>Стоимость:</strong> {price}
        </p>
      </div>
      <div className="product__buttons">
        <LinkButton to={`/products/${id}`}>Редактировать</LinkButton>
        <Button onClick={() => remove(id)} alert>
          Удалить
        </Button>
      </div>
    </Wrapper>
  );
};

export default Product;
