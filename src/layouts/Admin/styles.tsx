import styled from "@emotion/styled";

export const Container = styled.div``;

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  & .login-form {
    height: 700px;
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .login-input {
    width: 300px;
  }
`;
