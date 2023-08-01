import { FC } from "react";

interface RedirectButtonProp {
  subparam: string;
}

export const RedirectButton: FC<RedirectButtonProp> = ({ subparam }) => {
  switch (subparam.split("-")[1]) {
    case "cs":
      return (
        <a
          className="link-button"
          href="https://cs.sunmoon.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"/img/cs_button.jpeg"} alt="buttonimg" />
        </a>
      );
    case "ai":
      return (
        <a
          className="link-button"
          href="https://ais.sunmoon.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"/img/ai_button.jpg"} alt="buttonimg" />
        </a>
      );
    case "convergence":
      return (
        <a
          className="link-button"
          href="https://swc.sunmoon.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"/img/swc_button.jpeg"} alt="buttonimg" />
        </a>
      );
    case "it":
      return (
        <a
          className="link-button"
          href="https://itedu.sunmoon.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"/img/itedu_button.jpg"} alt="buttonimg" />
        </a>
      );
    case "smartcar":
      return (
        <a
          className="link-button"
          href="https://smartcar.sunmoon.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"/img/smartcar_button.jpeg"} alt="buttonimg" />
        </a>
      );
    case "sw":
      return (
        <a
          className="link-button"
          href="https://sw.sunmoon.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"/img/sw_button.jpeg"} alt="buttonimg" />
        </a>
      );
    default:
      return null;
  }
};
