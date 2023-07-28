import styled from "@emotion/styled";

export const Container = styled.div``;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .list-description {
    margin: 8px 0;
    width: 800px;
  }

  & .list-title {
    display: inline-block;
    min-width: 100px;
  }

  & .list-href {
    margin-left: 30px;
  }

  & .button-group {
    display: inline-block;
    margin-left: 15px;
  }

  & .button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: red;
      transition: 0.2s linear;
    }
  }

  & .edit-input {
    display: block;
    width: 400px;
    margin: 8px 0;
  }

  & .delete-button {
    margin-left: 5px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .input-row {
    margin: 5px 0;
    max-width: 800px;
  }
`;
