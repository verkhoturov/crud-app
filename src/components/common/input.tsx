import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  margin-bottom: 20px;
  > p {
    margin-bottom: 7px;
  }
`;

const InputWrapper = styled.input`
  padding: 10px;
  height: 48px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #7d7e80;
  border-radius: 4px;
`;

const Input: React.FC<{
  type: string;
  title: string;
  onChange: (e: any) => void;
  value: string | undefined;
}> = ({ type, title, onChange, value }) => {
  return (
    <Wrapper>
      <p>{title}</p>
      <InputWrapper type={type} onChange={onChange} value={value} />
    </Wrapper>
  );
};

export default Input;
