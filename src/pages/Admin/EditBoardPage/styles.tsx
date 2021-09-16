import styled from "@emotion/styled";
import { Button as Btn } from "antd";

export const Container = styled.div`
  & .button-group {
    display: flex;
    align-items: center;
  }

  & .attach-group {
    display: flex;
    margin: 5px 0;
  }

  & .attach-button {
    margin-left: 15px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      color: #e74c3c;
      transition: linear 0.2s;
    }
  }
`;

export const Button = styled(Btn)`
  margin: 15px 0;
  margin-right: 15px;
`;
