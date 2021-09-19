import styled from "@emotion/styled";
import { Button as Btn } from "antd";

export const Container = styled.div`
  & .button-group {
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled(Btn)`
  margin: 15px 0;
`;
