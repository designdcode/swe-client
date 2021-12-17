import React, { SetStateAction } from "react";
import styled from "@emotion/styled";

interface IPopUpProps {
  showPopup: boolean;
  setShowPopUp: React.Dispatch<SetStateAction<boolean>>;
}

const PopUp: React.FC<IPopUpProps> = ({ showPopup, setShowPopUp }) => {
  const onPopUpNotShot = () => {
    const fuzePopUpNotShow = localStorage.getItem("fuzePopUpNotShow");
    const fuzePopUpNotShowUNIX = Date.parse(fuzePopUpNotShow || "");
    const whenWillBeExpired = fuzePopUpNotShowUNIX + 100 * 60;

    const currentUNIX = Math.floor(new Date().getTime());

    if (Number.isNaN(fuzePopUpNotShowUNIX)) {
      setShowPopUp(true);
    }

    if (whenWillBeExpired < currentUNIX) {
      setShowPopUp(true);
    }
    setShowPopUp(false);
  };
  return (
    <>
      {showPopup && (
        <Wrapper>
          <ImageWrapper>img</ImageWrapper>
          <TodayWrapper>
            <button onClick={onPopUpNotShot}>오늘 하루 보지 않기</button>
            <button onClick={() => setShowPopUp(false)}>닫기</button>
          </TodayWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default PopUp;

const Wrapper = styled.div`
  width: 500px;
  height: 600px;
  position: absolute;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  top: 20%;
  left: 0;
  right: 35%;
  z-index: 9999;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 90%;
`;

const TodayWrapper = styled.div`
  width: 100%;
`;
