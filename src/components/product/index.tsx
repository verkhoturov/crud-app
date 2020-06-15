import React from "react";
import { Wrapper } from "./styled";
import { LinkButton, Button } from "../../components/common/buttons";

const Product: React.FC<{
  id: number;
  title: string;
  price: string;
}> = ({ id, title, price }) => {
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
        <Button alert>Удалить</Button>
      </div>
    </Wrapper>
  );
};

export default Product;
