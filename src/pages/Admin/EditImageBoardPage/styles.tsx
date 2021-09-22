import styled from "@emotion/styled";

export const Container = styled.div`
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
  & .button-group {
    display: flex;
    justify-content: space-between;
  }

  img {
    object-fit: contain;
    width: 300px;
    height: 400px;
  }
`;
