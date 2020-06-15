import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #002882;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;

  min-height: 70px;

  .product__buttons {
    display: none;
    justify-content: space-between;
    min-width: 400px;
  }

  :hover .product__buttons {
    display: flex;
  }
`;
