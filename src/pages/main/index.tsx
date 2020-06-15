import React from "react";
import { Section, Row } from "../../components/common/grid";
import { LinkButton } from "../../components/common/buttons";

const MainPage: React.FC = () => {
  return (
    <Section>
      <Row>
        <LinkButton to="/products">Все продукты</LinkButton>
      </Row>
      <Row>
        <LinkButton to="/create-product">Добавить продукт</LinkButton>
      </Row>
    </Section>
  );
};

export default MainPage;
