import React from "react";
import { useHistory } from "react-router-dom";
import { useAction } from "@reatom/react";
import { Section, Row } from "../../components/common/grid";
import { LinkButton, Button } from "../../components/common/buttons";
import { Title } from "../../components/common/texts";
import Form from "../../components/form";
import { deleteProduct, updateProducts } from "../../atoms";
import { IProduct } from "../../types";
import ProductsDataService from "../../services/products";

const ProductPage: React.FC = () => {
  const path = document.location.pathname.split("/");
  const id = +path[path.length - 1];

  const [isUpdateMod, setUpdateMod] = React.useState<boolean>(false);

  const [product, setProduct] = React.useState<IProduct | null>(null);
  const history = useHistory();
  //@ts-ignore
  const remove = useAction((val) => deleteProduct(val));
  //@ts-ignore
  const save = useAction((val) => updateProducts(val));

  React.useEffect(() => {
    ProductsDataService.get(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        alert("К сожалению, внезапно вылез Гейзенбаг :( К счастью, статистика благоволит вам, попробуйте повторить")
      });
  }, [isUpdateMod]);

  return (
    <Section>
      <Row>
        <LinkButton to="/products" textview>
          Назад
        </LinkButton>
      </Row>
      {product ? (
        isUpdateMod ? (
          <>
            <Form
              productData={{
                id: id,
                title: product.title,
                description: product.description,
                price: product.price,
              }}
              closeForm={() => setUpdateMod(false)}
              save={save}
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
              <Button
                onClick={() => {
                  remove(id);
                  history.push(`/products`);
                }}
                alert
              >
                Удалить
              </Button>
            </Row>
          </>
        )
      ) : (
        <p>продукт не найден</p>
      )}
    </Section>
  );
};

export default ProductPage;
