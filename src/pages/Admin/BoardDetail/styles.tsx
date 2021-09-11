import styled from "@emotion/styled";
import { Button as Btn } from "antd";

export const Container = styled.div`
  & .button-group {
    display: flex;
    align-items: center;
  }
`;

export const Button = styled(Btn)`
  margin: 15px 0;
  margin-right: 15px;
`;
