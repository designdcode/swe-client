import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { Divider, Image, Typography } from "antd";

const Footer = () => {
  return (
    <FooterContaier>
      <Div>
        <div className="banner-group">
          <Image src={"/img/footerBanner2.jpg"} />
          <Image src={"/img/footerBanner1.jpg"} />
        </div>
        <img src={"/img/footerLogo.jpg"} alt="logoimg" className="logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography.Text style={{ color: "#BFBFBF" }}>
            {" "}
            TEL . 041-530-8311 FAX. 041-530-8315
          </Typography.Text>
          <Typography.Text style={{ color: "#BFBFBF" }}>
            우) 31460 충남 아산시 탕정면 선문로 221번길 70 선문대학교
            SW융합관(원화관) 506호 70
          </Typography.Text>
          <Typography.Text style={{ color: "#BFBFBF" }}>
            Sunmoon-ro 221 beon-gil, Tangjeong-myeon, Asan-si,
            Chungcheongnam-do, korea , 31460
          </Typography.Text>
        </div>
        <Divider
          style={{
            backgroundColor: "#BFBFBF",
          }}
        />
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
      </Div>
      <MobileDiv>mobile</MobileDiv>
    </FooterContaier>
  );
};

export default Footer;
export const FooterContaier = styled.div`
  width: 100%;
  background-image: url("/img/footerBG.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
  }
`;

const Div = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    & .banner-group {
      display: flex;
      width: 60%;
      justify-content: space-around;
      img {
        width: 400px;
      }
    }
    & .logo {
      margin: 10px;
    }
  }
`;

const MobileDiv = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
`;
