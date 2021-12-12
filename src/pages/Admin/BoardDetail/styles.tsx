import styled from "@emotion/styled";
import { Button as Btn } from "antd";

interface UrlProps {
  url: string;
}

export const CarouselDiv = styled.div<UrlProps>`
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 300px;
  background-size: contain;
`;

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
