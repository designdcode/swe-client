import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { NavigationData } from "../../assets/NavigationData";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";
import { Button, Input, Radio, Upload } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import useInput from "../../hooks/useInput";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../queries/adminQuery";
import { createBoard, createBoardVariables } from "../../typings/api";
import { storage } from "../../utils/firebase";
import { UploadOutlined } from "@ant-design/icons";

interface paramProps {
  param: string;
  subparam: string;
}

interface fileProps {
  url: string;
  fileName: string;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
  ],
};

const formats = ["header", "bold", "italic", "underline", "list"];

const Write: React.VFC = () => {
  const screen = useWindowSize();
  const { param, subparam } = useParams<paramProps>();
  const stno = localStorage.getItem("stno");
  const history = useHistory();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, setContent] = useState<string>("");
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [file, setFile] = useState<fileProps[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  const [createBoardMutation] = useMutation<createBoard, createBoardVariables>(
    CREATE_BOARD,
    {
      onCompleted: ({ createBoard }) => {
        const { ok, err } = createBoard;
        if (ok) {
          toast.success("게시물이 등록 되었습니다");
          history.push(`/main/board/${param}/${subparam}`, { refetch: true });
        } else {
          toast.error("게시물 등록에 실패 하였습니다");
          console.log(err);
        }
      },
    }
  );

  const handleChange = (value: any) => {
    setContent(value);
  };

  const handleFileUpload = useCallback(
    (file: any) => {
      const upload = storage
        .ref(`/files/request/${stno ? stno : "empty"}/${file.name}`)
        .put(file);
      upload.on(
        "state_changed",
        (snapshot) => {},
        (err) => console.log(err),
        () => {
          storage
            .ref(`/files/request/${stno ? stno : "empty"}/${file.name}`)
            .getDownloadURL()
            .then((url) => {
              setFile((prev) => [...prev, { url: url, fileName: file.name }]);
              toast.success("파일 / 이미지가 업로드 되었습니다");
            });
        }
      );
      setUploading(false);
    },
    [stno]
  );

  const handleSubmit = useCallback(async () => {
    await createBoardMutation({
      variables: {
        title,
        content,
        category: subparam,
        private: isPrivate,
        writer: stno,
        files: file.length !== 0 ? file : null,
      },
    });
    setTitle("");
  }, [
    createBoardMutation,
    title,
    content,
    subparam,
    isPrivate,
    stno,
    file,
    setTitle,
  ]);

  useEffect(() => {
    if (!stno) {
      toast.error("로그인 후 이용 가능 합니다");
      history.push(`/main/board/${param}/${subparam}`);
    }
  }, [stno, param, subparam, history]);

  const handleFileRemover = useCallback(
    (propFile: any) => {
      storage
        .ref(`/files/request/${stno ? stno : "empty"}/${propFile.name}`)
        .delete()
        .then(() => {
          toast.success("업로드 된 파일/이미지가 삭제 되었습니다");
          setFile(
            file.filter((elem: fileProps) => elem.fileName !== propFile.name)
          );
        })
        .catch((err) => toast.error(err));
    },
    [stno, file]
  );

  return (
    <Wrapper>
      <Cover>
        <CoverTitle margin={screen.width > 1500 ? "25%" : "15%"}>
          {NavigationData.map((item, idx) => {
            if (item.title === param.split("-")[0]) {
              return (
                <div key={item.key}>
                  <span className="cover-main-title">{item.ko_title}</span>
                  <span className="cover-description">{item.description}</span>
                </div>
              );
            } else {
              return null;
            }
          })}
        </CoverTitle>
        <SubMenu
          isBigger={param === "major" || param === "basic" ? true : false}
          margin={"5%"}
        >
          <div className="submenu-content">
            {NavigationData.map((item, idx) => {
              if (item.title === param) {
                return item.subMenu.map((elem, i) => {
                  const colored = elem.key === subparam ? 0 : 1;
                  return (
                    <ContentCell
                      className="submenu-col"
                      first={colored}
                      key={`${i}key`}
                    >
                      <FakeLine first={colored} />
                      <StyleLink
                        to={`/main/board/${param}/${elem.key}`}
                        first={colored}
                      >
                        <span style={{ fontWeight: 600 }}>{elem.ko_title}</span>
                      </StyleLink>
                    </ContentCell>
                  );
                });
              } else {
                return null;
              }
            })}
          </div>
        </SubMenu>
        <img src="/img/detailBG.jpeg" alt="cover" />
      </Cover>
      <Body>
        <div className="head">
          <div className="head-title">
            {subparam.split("-")[1] === "request" ? "건의사항" : "헬프데스크"}
          </div>
        </div>
        <Content>
          <div className="content-head">
            <div className="content-head-title">문의하기</div>
          </div>
          <ContentBody>
            <div className="input-box">
              <Input
                className="title-input"
                placeholder="제목을 입력해 주세요"
                value={title}
                onChange={onChangeTitle}
              />
              <Radio
                className="title-radio"
                checked={isPrivate}
                onClick={() => setIsPrivate(!isPrivate)}
              >
                비밀글 설정
              </Radio>
            </div>
            <Editor
              modules={modules}
              formats={formats}
              value={content || ""}
              onChange={handleChange}
              theme="snow"
            />
            <div className="content-upload">
              <Upload
                multiple={true}
                customRequest={({ file }) => {
                  setUploading(true);
                  handleFileUpload(file);
                }}
                maxCount={4}
                onChange={({ file: callbackFile }) => {
                  if (file.length !== 0) {
                    callbackFile.status = "done";
                  } else {
                    callbackFile.status = "removed";
                  }
                }}
                onRemove={(file) => handleFileRemover(file)}
              >
                <Button
                  disabled={uploading ? true : false}
                  style={{ marginBottom: 20 }}
                  icon={<UploadOutlined />}
                >
                  첨부파일 업로드
                </Button>
              </Upload>
            </div>
          </ContentBody>
          <ContentBottom>
            <Button
              className="button-cancel"
              onClick={() => history.push(`/main/board/${param}/${subparam}`)}
            >
              취소
            </Button>
            <Button className="button-submit" onClick={handleSubmit}>
              {uploading ? "업로드 중입니다..." : "등록"}
            </Button>
          </ContentBottom>
        </Content>
      </Body>
    </Wrapper>
  );
};

export default Write;

interface CoverTitleMarginProps {
  margin: string;
}

interface middleMenuProps {
  isBigger: boolean;
  margin?: string;
}

interface MenuCellProps {
  first: number;
}

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    max-width: 375px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin: 0 auto;
    padding-top: 15px;
    min-height: 100vh;
    min-width: 800px;
    max-width: 1920px;
  }
`;

const Cover = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    height: 120px;
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    min-width: 1280px;
    height: 350px;
    margin: 0 auto;
    position: relative;
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const CoverTitle = styled.div<CoverTitleMarginProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    position: absolute;
    top: 10%;
    left: 5%;
    & .cover-main-title {
      font-size: 20px;
      font-weight: 500px;
      color: white;
      display: block;
    }
    & .cover-description {
      display: block;
      font-size: 10px;
      letter-spacing: 0.43px;
      color: #ffffff;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    position: absolute;
    font-size: 20px;
    margin-left: ${(props) => props.margin};
    margin-top: 50px;
    & .cover-main-title {
      font-size: 40px;
      font-weight: 500;
      letter-spacing: 0.43px;
      color: #ffffff;
      text-shadow: 3px 3px 3px #000000e3;
      display: block;
    }

    & .cover-description {
      display: block;
      font-size: 20px;
      letter-spacing: 0.43px;
      color: #ffffff;
      text-shadow: 3px 3px 3px #000000e3;
    }
  }
`;

const SubMenu = styled.div<middleMenuProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    background-color: #e5e2e2b8;
    position: absolute;
    bottom: 0;
    font-size: 15px;
    & .submenu-content {
      max-width: 1200px;
      min-width: 800px;
      min-height: 50px;
      height: ${(props) => (props.isBigger ? "100px" : "50px")};
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding-left: ${(props) => props.margin};
    }
    & .submenu-col {
      width: 16%;
      height: 50px;
      display: flex;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const StyleLink = styled(Link)<MenuCellProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 5px;
    font-size: 13px;
    color: ${(props) => (props.first === 0 ? "white" : "black")};
    &:hover {
      color: white;
    }
  }
`;

const ContentCell = styled.div<MenuCellProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    background-color: ${(props) => (props.first === 0 ? "#0c1b58" : "")};
    color: ${(props) => (props.first === 0 ? "white" : "black")};
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      background-color: #0c1b58;
      transition: 0.2s linear;
      color: white;
    }
  }
`;

const FakeLine = styled.div<MenuCellProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 50%;
    height: 2px;
    border-top: ${(props) => (props.first === 0 ? "2px solid white" : "")};
  }
`;

const Body = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    max-width: 375px;
    & .head {
      height: 80px;
      width: 100%;
      display: flex;
      align-items: center;
    }
    & .head-title {
      font-size: 20px;
      font-weight: 500;
      color: #0c1b58;
    }

    & .head-logo {
      display: none;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1280px;
    min-width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    & .head {
      min-height: 150px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .head-title {
      font-size: 35px;
      font-weight: 500;
      color: #0c1b58;
      text-align: center;
      width: 300px;
    }

    & .head-logo {
      img {
        height: 130px;
        width: 130px;
      }
    }
  }
`;
const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    & .content-head {
      width: 100%;
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & .content-head-title {
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
      }

      & .content-head-desc {
        display: flex;
        font-size: 10px;
        color: #868686;

        & .content-head-desc-date {
          margin-right: 15px;
        }
      }
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    min-width: 1000px;
    max-width: 1280px;
    min-height: 60vh;
    border-top: 3px solid #0c1b58;
    & .content-head {
      min-height: 60px;
      width: 100%;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & .content-head-title {
        font-size: 24px;
        font-weight: 600;
        min-height: 35px;
        display: flex;
        align-items: center;
        color: #0c1b58;
      }
      & .content-head-desc {
        display: flex;
        font-size: 20px;
        color: #868686;
        margin-top: 15px;
        & .content-head-desc-date {
          margin-right: 50px;
        }
      }
    }
  }
`;

const ContentBody = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    padding: 20px;
    width: 100%;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    & .input-box {
      display: flex;
      align-items: center;
      & .title-input {
        padding: 8px 12px;
        width: 220px;
        margin-bottom: 25px;
      }
      & .title-radio {
        font-size: 8px;
        height: 50px;
        margin-left: 30px;
        width: 100px;
      }
    }
    & .content-upload {
      display: none;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    padding: 30px;
    width: 100%;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    & .input-box {
      display: flex;
      align-items: center;
      & .title-input {
        padding: 8px 12px;
        width: 800px;
        margin-bottom: 25px;
      }
      & .title-radio {
        height: 50px;
        margin-left: 30px;
      }
    }
    & .content-upload {
      min-height: 50px;
      margin-top: 60px;
      width: 100%;
      border-bottom: 1px solid #c9c9c9;
    }
  }
`;

const Editor = styled(ReactQuill)`
  background-color: white;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    .ql-container {
      min-height: 200px;
      width: 100%;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 300px;
    width: 100%;
    .ql-container {
      min-height: 300px;
      width: 100%;
    }
  }
`;

const ContentBottom = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 20px;
    display: flex;
    width: 50%;
    margin: 10px auto;
    margin-bottom: 50px;
    justify-content: space-around;
    & button {
      width: 120px;
      height: 50px;
      color: white;
      cursor: pointer;
      margin: 0 10px;
    }
    & .button-cancel {
      background-color: #959595;
    }
    & .button-submit {
      background-color: #04083e;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 30px;
    display: flex;
    width: 30%;
    margin: 15px auto;
    margin-bottom: 100px;
    justify-content: space-around;
    & button {
      width: 150px;
      height: 50px;
      color: white;
      cursor: pointer;
    }
    & .button-cancel {
      background-color: #959595;
    }
    & .button-submit {
      background-color: #04083e;
    }
  }
`;
