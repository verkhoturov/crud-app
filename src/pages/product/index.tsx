import React from "react";
import { Section, Row } from "../../components/common/grid";
import { LinkButton, Button } from "../../components/common/buttons";
import { Title } from "../../components/common/texts";
import Form from "../../components/form";

import { useGetProductData } from "../../hooks";

const ProductPage: React.FC = () => {
  const path = document.location.pathname.split("/");
  const id = path[path.length - 1];
  const product = useGetProductData(+id);

  const [isUpdateMod, setUpdateMod] = React.useState<boolean>(false);

  return (
    <Section>
      <Row>
        <LinkButton to="/products" textview>
          Назад
        </LinkButton>
      </Row>
      {isUpdateMod ? (
        <>
          <Form
            titleUpdate={product.title}
            descriptionUpdate={product.description}
            priceUpdate={product.price}
          />
          <Row>
            <Button onClick={() => setUpdateMod(false)} alert>
              Отмена
            </Button>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Title>{product.title}</Title>
          </Row>
          <Row>
            <p>
              <strong>Описание:</strong>
            </p>
            <p>{product.description}</p>
          </Row>
          <Row>
            <p>
              <strong>Стоимость:</strong> {product.price}
            </p>
          </Row>

          <Row>
            <Button onClick={() => setUpdateMod(true)}>Редактировать</Button>
          </Row>
          <Row>
            <Button alert>Удалить</Button>
          </Row>
        </>
      )}
    </Section>
  );
};

export default ProductPage;
