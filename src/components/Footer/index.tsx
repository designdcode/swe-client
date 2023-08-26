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
          <a
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSdpCBD4dNPsNWguHfat1s620Fmxqpi-TBAK6ehdCoMeL23eQw/viewform"
            }
          >
            <Image preview={false} src={"/img/footerBanner2.jpg"} />
          </a>
          <a href={"https://www.swuniv.kr/45"}>
            <Image
              preview={false}
              src={"/img/footerBanner1.jpg"}
              style={{
                cursor: "pointer",
              }}
            />
          </a>
        </div>
        <img src={"/img/footerLogo.png"} alt="logoimg" className="logo" />
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
            <img src={"/img/insta.png"} alt="insta" width={"40"} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC6CYp3QV8cL-D4-hBXb_Nbw"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/img/youtube.png"} alt="youtube" width={"45"} />
          </a>
        </div>
      </Div>
      <MobileDiv>
        <img src={"/img/footerLogo.png"} alt="logoimg" className="logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography.Text style={{ color: "#707070", fontSize: "10px" }}>
            {" "}
            TEL . 041-530-8311 FAX. 041-530-8315
          </Typography.Text>
          <Typography.Text style={{ color: "#707070", fontSize: "10px" }}>
            우) 31460 충남 아산시 탕정면 선문로 221번길 70 선문대학교
            SW융합관(원화관) 506호
          </Typography.Text>
          <Typography.Text style={{ color: "#707070", fontSize: "10px" }}>
            Sunmoon-ro 221 beon-gil, Tangjeong-myeon, Asan-si,
            Chungcheongnam-do, korea , 31460
          </Typography.Text>
        </div>
      </MobileDiv>
    </FooterContaier>
  );
};

export default Footer;
export const FooterContaier = styled.div`
  width: 100%;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    background-color: #f7f7f7;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    background-image: url("/img/footerBG.jpg");
    background-size: cover;
    background-repeat: no-repeat;
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
    padding: 20px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
`;
