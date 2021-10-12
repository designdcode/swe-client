import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;

  & .top {
    @media (max-width: 480px) {
      /*갤탭크기..*/
      /*최대 480인데 meta 설정때문에 360이나 등등 맞게 줄어든다*/
    }
    /*좁을 때는 너네 전부 100% */
    /*이 안에는 px 단위로 폭을 잡지 않는다. % 로 세팅*/
    @media (min-width: 600px) {
      /*아이패드 크기*/
    }
    @media (min-width: 1000px) {
      /*데스크탑 */
    }
  }

  & .main {
  }
`;
