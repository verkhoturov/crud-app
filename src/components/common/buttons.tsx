import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)<{ textview?: boolean | undefined }>(
  ({ textview }) => `
  
  ${
    textview
      ? `color: #002882;
      border-bottom: 1px solid;
      display: inline-flex;
      padding-bottom: 3px;
      `
      : `
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 16px;

      background: #002882;
      border-radius: 4px;

      min-height: 48px;
      width: 192px;

      color: white;
      `
  }
  
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
`
);

export const Button = styled.button<{ alert?: boolean }>(
  ({ alert }) => `
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: ${alert ? "#CC003D" : "#002882"};
  border-radius: 4px;
  border: unset;

  min-height: 48px;
  width: 192px;

  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;

  cursor: pointer;
`
);

export const TextButton = styled.button``;
