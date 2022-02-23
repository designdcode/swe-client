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
      <div className="image-link">
        <a
          href="https://www.instagram.com/sw_sunmoonuniv/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"/img/insta.png"} alt="insta" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC6CYp3QV8cL-D4-hBXb_Nbw"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"/img/youtube.png"} alt="youtube" />
        </a>
      </div>
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
    & .image-link {
      a {
        img {
          width: 20px;
          margin: 0 10px;
        }
      }
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
    -webkit-box-shadow: inset 0px 12px 30px 0px rgba(0, 0, 0, 0.28);
    box-shadow: inset 0px 10px 15px -10px rgba(0, 0, 0, 0.28);
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
    & .image-link {
      a {
        img {
          width: 40px;
          margin: 0 10px;
        }
      }
    }
  }
`;
