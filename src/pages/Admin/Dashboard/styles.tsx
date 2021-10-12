import styled from "@emotion/styled";
import { Col as antCol, Row } from "antd";

export const Container = styled.div``;

export const Col = styled(antCol)`
  height: 300px;
`;

export const TableRowSpan = styled.span`
  cursor: pointer;
  &:hover {
    transition: 0.2s linear;
    color: #438ef7;
  }
`;

export const ExtendedRow = styled(Row)`
  display: flex;
  flex-direction: column;
`;
