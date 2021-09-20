import styled from "@emotion/styled";
import { Button as Btn } from "antd";

export const Container = styled.div`
  & .button-group {
    display: flex;
    justify-content: space-between;
  }

  &.attach-group {
    display: flex;
    flex-direction: column;
  }

  img {
    object-fit: contain;
    width: 400px;
    height: 400px;
  }
`;

export const Button = styled(Btn)`
  margin: 15px 0;
`;
