import React from "react";
import { Section, Row } from "../../components/common/grid";
import { LinkButton } from "../../components/common/buttons";
import { Title } from "../../components/common/texts";
import Product from "../../components/product";
import { useAtom, useAction } from "@reatom/react";
import { allProducts } from "../../atoms";
import { getAllProducts } from "../../actions";
import { IProduct } from "../../types";

import ProductsDataService from "../../services/products";

const ProductsTable: React.FC = () => {
  const data: IProduct[] = useAtom(allProducts);
  //@ts-ignore
  const getData = useAction((val) => getAllProducts(val));

  React.useEffect(() => {
    ProductsDataService.getAll()
      .then((response) => {
        //@ts-ignore
        getData(response.data);
      })
      .catch((e) => {
        console.log(e);
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
          data.map((product, i) => {
            return (
              <Product
                key={i}
                id={i + 1}
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
