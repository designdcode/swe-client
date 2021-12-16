import styled from "@emotion/styled";
import {
  breakpoints,
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";

const Footer = () => {
  return (
    <FooterContaier>
      <span>
        TEL . 041-530-8311 FAX. 041-530-8315 <br />
        우) 31460 충남 아산시 탕정면 선문로 221번길 70 선문대학교
        SW융합관(원화관) 506호 70,
        <br />
        Sunmoon-ro 221 beon-gil, Tangjeong-myeon, Asan-si, Chungcheongnam-do,
        korea , 31460
      </span>
      <img src={"/img/mobileLogo.png"} alt="logoimg" />
    </FooterContaier>
  );
};

export default Footer;
export const FooterContaier = styled.div`
  width: 100%;
  height: 230px;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ededed;
    font-size: 8px;
    span {
      display: block;
      max-width: ${breakpoints.phoneMedium}px;
      color: #747474;
      text-align: center;
      line-height: 10px;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ededed;
    min-width: 1280px;
    span {
      font-size: 14px;
      display: block;
      color: #aaaaaa;
      text-align: center;
      line-height: 20px;
    }
  }
`;
