import React from "react";
import { useAction } from "@reatom/react";

import { Section, Row } from "../../components/common/grid";
import { LinkButton } from "../../components/common/buttons";
import Form from "../../components/form";
import { createProduct } from "../../atoms";

const CreateProduct: React.FC = () => {
  //@ts-ignore
  const add = useAction((val) => createProduct(val));

  return (
    <Section>
      <Row>
        <LinkButton to="/" textview>
          Назад
        </LinkButton>
      </Row>
      <Row>
        <Form save={add} />
      </Row>
    </Section>
  );
};

export default CreateProduct;
