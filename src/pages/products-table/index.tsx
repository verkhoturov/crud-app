import React from "react";
import { Section, Row } from "../../components/common/grid";
import { LinkButton } from "../../components/common/buttons";
import { Title } from "../../components/common/texts";
import RowProduct from "../../components/row-product";
import { useAtom, useAction } from "@reatom/react";
import { products, readProducts } from "../../atoms";
import { IProduct } from "../../types";
import ProductsDataService from "../../services/products";

const ProductsTable: React.FC = () => {
  const data = useAtom(products);
  //@ts-ignore
  const getData = useAction((val) => readProducts(val));

  React.useEffect(() => {
    ProductsDataService.getAll()
      .then((response) => {
        getData(response.data);
      })
      .catch((e) => {
        alert(
          "К сожалению, внезапно вылез Гейзенбаг :( К счастью, статистика благоволит вам, попробуйте повторить"
        );
      });
  }, []);

  return (
    <Section>
      <Row>
        <LinkButton to="/" textview>
          Назад
        </LinkButton>
      </Row>
      <Row>
        <Title>Продукты</Title>
      </Row>
      <Row>
        {data.length > 0 &&
          data.map((product: IProduct, i) => {
            return (
              <RowProduct
                key={i}
                id={product.id}
                title={product.title}
                price={product.price}
              />
            );
          })}
      </Row>
      <Row>
        {
          // data.page
          // 1
        }
      </Row>
    </Section>
  );
};

export default ProductsTable;
