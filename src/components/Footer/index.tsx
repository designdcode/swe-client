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
      <img src={"/img/footerLogo.jpg"} alt="logoimg" className="mobile" />
      <span>
        TEL . 041-530-8311 FAX. 041-530-8315 <br />
        우) 31460 충남 아산시 탕정면 선문로 221번길 70 선문대학교
        SW융합관(원화관) 506호 70,
        <br />
        Sunmoon-ro 221 beon-gil, Tangjeong-myeon, Asan-si, Chungcheongnam-do,
        korea , 31460
      </span>
      <img src={"/img/footerLogo.jpg"} alt="logoimg" className="web" />
    </FooterContaier>
  );
};

export default Footer;
export const FooterContaier = styled.div`
  width: 100%;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    background-color: #ededed;
    font-size: 8px;
    span {
      display: block;
      max-width: ${breakpoints.phoneMedium}px;
      color: #747474;
      line-height: 1.7;
    }

    & .mobile {
      width: 150px;
      object-fit: contain;
      margin-bottom: 20px;
    }

    & .web {
      display: none;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ededed;
    min-width: 1280px;
    span {
      font-size: 14px;
      display: block;
      color: #aaaaaa;
      text-align: center;
      line-height: 1.7;
    }
    & .mobile {
      display: none;
    }
    & .web {
      width: 250px;
      object-fit: contain;
      margin-top: 20px;
    }
  }
`;
