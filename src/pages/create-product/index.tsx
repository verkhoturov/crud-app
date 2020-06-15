import React from "react";
import { useAction, useAtom } from "@reatom/react";

import { Section, Row } from "../../components/common/grid";
import { LinkButton, Button } from "../../components/common/buttons";
import Form from "../../components/form";

const CreateProduct: React.FC = () => {
  return (
    <Section>
      <Row>
        <LinkButton to="/" textview>
          Назад
        </LinkButton>
      </Row>
      <Row>
        <Form />
      </Row>
    </Section>
  );
};

export default CreateProduct;
