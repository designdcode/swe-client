import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import queryString from "query-string";
import { toast } from "react-toastify";
import { Container, Button } from "./styles";
import {
  DatePicker,
  Descriptions,
  Dropdown,
  Form,
  Input,
  Menu,
  Switch,
  Upload,
} from "antd";
import useInput from "../../../hooks/useInput";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import { linkSwitcher, typeSwitcher } from "../../../utils/switcher";
import Editor from "../../../components/Editor";
import moment from "moment";
import {
  AttachmentType,
  BoardQuery,
  useRemoveBoardMutation,
  useUpdateBoardMutation,
} from "../../../typings/api.d";
import { useBoardContext } from "../../../contexts";
import { attachmentUploader } from "../../../utils/attachmentUploader";

interface locationProps {
  search: string;
}

interface paramProps {
  param: string;
  subparam: string;
}

const EditBoardPage: React.VFC = () => {
  const { search } = useLocation<locationProps>();
  const { param, subparam } = useParams<paramProps>();
  const { boards, loading } = useBoardContext();
  const queryObj = queryString.parse(search);
  const history = useHistory();
  const { id, category } = queryObj;
  const [board, setBoard] = useState<BoardQuery["board"]>();
  const [files, setFiles] = useState<AttachmentType[]>([]);
  const [images, setImages] = useState<BoardQuery["board"]["images"]>();
  const [imageName, setImageName] = useState<string>("");

  const [title, onChangeTitle, setTitle] = useInput("");
  const [createDate, setCreateDate] = useState<string>(new Date().toString());
  const [content, setContent] = useState<string>("");
  const [link, onChangeLink, setLink] = useInput("");
  const [writerName, onChangeWriterName, setWriterName] = useInput("");
  const [progress, setProgress] = useState<number>(0);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [checkPrivate, setCheckPrivate] = useState<boolean>();
  const [attach, setAttach] = useState<boolean>();

  const [type, setType] = useState<{ type: string; title: string }>();
  const [linkNeeded, setLinkNeeded] = useState<boolean>(false);
  const [isTypeNeeded, setIsTypeNeeded] = useState<boolean>(false);
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  const [deleteBoard] = useRemoveBoardMutation({
    onCompleted: () => {
      toast.success("게시물이 삭제 되었습니다");
      history.push({
        pathname: `/admin/${param}/${category}`,
        state: { refresh: true },
      });
    },
  });
  const [editBoard] = useUpdateBoardMutation({
    onCompleted: () => {
      toast.success("게시물이 수정 되었습니다");
      history.push({
        pathname: `/admin/${param}/${category}`,
        state: { refresh: true },
      });
    },
  });

  useEffect(() => {
    if (boards) {
      const foundBoard = boards.find((v) => String(v._id) === String(id));
      setBoard(foundBoard);
      const content = foundBoard?.content || "";
      setContent(content);
    }
  }, [boards, id]);

  const handleChange = (value: any) => {
    setContent(value);
  };

  const onChangeCreatedAt = useCallback((date) => {
    setCreateDate(new Date(date).toString());
  }, []);

  useEffect(() => {
    setLinkNeeded(linkSwitcher(subparam as string));
    setIsTypeNeeded(typeSwitcher(subparam as string));
  }, [subparam]);

  const handleDeleteBoard = useCallback(() => {
    deleteBoard({
      variables: {
        _id: String(id),
      },
    });
  }, [id, deleteBoard]);

  const handleEditBoard = useCallback(async () => {
    let trimmedFiles:
      | {
          url: string;
          fileName: string;
        }[]
      | undefined = undefined;
    if (files) {
      trimmedFiles = files.map((v) => ({
        url: v.url,
        fileName: v.fileName,
      }));
    }

    await editBoard({
      variables: {
        args: {
          _id: String(id),
          title,
          content: content,
          link,
          private: checkPrivate,
          showAttach: attach,
          inputCreatedAt: createDate,
          writer: writerName,
          type: type?.type,
          files: trimmedFiles,
          images: [
            {
              url: imgUrl || "",
              fileName: imageName,
            },
          ],
        },
      },
    });
  }, [
    id,
    title,
    content,
    link,
    editBoard,
    checkPrivate,
    attach,
    createDate,
    writerName,
    type,
    files,
    imgUrl,
    imageName,
  ]);

  const handleImageUpload = useCallback(
    (file: any) => {
      setProgress(progress + 1);
      setUploadLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "images",
          file,
          category: String(category),
        })
      )
        .then((url) => {
          setImgUrl(url);
          setImageName(file.name);
          setUploadLoading(false);
          setProgress(0);
        })
        .catch((err) => {
          console.error(err);
          toast.error("업로드에 실패하였습니다. 잠시후 다시 시도해 주세요");
          setUploadLoading(false);
        });
    },
    [category, progress]
  );

  const handleFileUpload = useCallback(
    (file: any) => {
      setUploadLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "files",
          file,
          category: String(category),
        })
      )
        .then((url) => {
          setFiles((prev) => [...prev, { url: url, fileName: file.name }]);
          setUploadLoading(false);
          toast.success("파일이 업로드 되었습니다");
        })
        .catch((err) => {
          console.error(err);
          toast.error("업로드에 실패하였습니다. 잠시후 다시 시도해 주세요");
          setUploadLoading(false);
        });
    },
    [category]
  );

  useEffect(() => {
    if (board) {
      setCheckPrivate(board.private ? true : false);
      setAttach(board.showAttach ? true : false);
      setBoard(board);
      setTitle(board.title || "");
      setContent(board.content || "");
      setLink(board.link || "");
      setWriterName(board.writer || "관리자");
      if (board.files) {
        setFiles(board.files);
      }
      if (board.images) {
        setImages(board.images);
      }
    }
  }, [board, setTitle, setContent, setLink, setWriterName]);

  useEffect(() => {
    if (progress < 0) {
      setProgress(0);
    }
  }, [progress]);

  const testMenu = useMemo(() => {
    return (
      <Menu style={{ width: 150 }}>
        <Menu.Item key="0">
          <div
            onClick={() =>
              setType({
                type: "basic",
                title: "SW기초교육",
              })
            }
          >
            SW기초교육
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div
            onClick={() =>
              setType({
                type: "major",
                title: "SW전공교육",
              })
            }
          >
            SW전공교육
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div
            onClick={() =>
              setType({
                type: "convergence",
                title: "SW융합교육",
              })
            }
          >
            SW융합교육
          </div>
        </Menu.Item>
      </Menu>
    );
  }, []);

  const valueMenu = useMemo(() => {
    return (
      <Menu style={{ width: 150 }}>
        <Menu.Item key="0">
          <div
            onClick={() =>
              setType({
                type: "edu",
                title: "수요중심",
              })
            }
          >
            수요중심
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div
            onClick={() =>
              setType({
                type: "training",
                title: "선도자양성",
              })
            }
          >
            선도자양성
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div
            onClick={() =>
              setType({
                type: "share",
                title: "가치공유",
              })
            }
          >
            가치공유
          </div>
        </Menu.Item>
      </Menu>
    );
  }, []);

  const coopMenu = useMemo(() => {
    return (
      <Menu style={{ width: 150 }}>
        <Menu.Item key="0">
          <div
            onClick={() =>
              setType({
                type: "network",
                title: "기관 네트워크",
              })
            }
          >
            기관 네트워크
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div
            onClick={() =>
              setType({
                type: "project",
                title: "기관 프로젝트",
              })
            }
          >
            기관 프로젝트
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div
            onClick={() =>
              setType({
                type: "internship",
                title: "기관 인턴쉽",
              })
            }
          >
            기관 인턴쉽
          </div>
        </Menu.Item>
      </Menu>
    );
  }, []);

  const handleMenu = useCallback(
    (prop?: string) => {
      switch (prop) {
        case "coopnews":
          return coopMenu;
        case "valuenews":
          return valueMenu;
        default:
          return testMenu;
      }
    },
    [coopMenu, valueMenu, testMenu]
  );

  if (loading || !board) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      <Button type="ghost" onClick={() => history.goBack()}>
        뒤로
      </Button>
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        layout="horizontal"
      >
        <Descriptions.Item label="제목" span={4} labelStyle={{ width: 100 }}>
          <Input
            placeholder={board?.title || undefined}
            value={title}
            onChange={onChangeTitle}
          />
        </Descriptions.Item>
        <Descriptions.Item label="작성자" span={4} labelStyle={{ width: 100 }}>
          <Input
            placeholder={board?.writer || "관리자"}
            value={writerName}
            onChange={onChangeWriterName}
            style={{
              width: "150px",
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item
          label="생성날짜"
          span={4}
          labelStyle={{ width: 100 }}
        >
          <DatePicker
            placeholder={moment(new Date(board.inputCreatedAt || ""), true)
              .format("YYYY/MM/DD")
              .toString()}
            onChange={onChangeCreatedAt}
          />
        </Descriptions.Item>
        {isTypeNeeded && (
          <Descriptions.Item label="타입" span={4} labelStyle={{ width: 100 }}>
            <Form.Item name={["type"]}>
              <Dropdown
                overlay={() => handleMenu(subparam?.toString().split("-")[1])}
                trigger={["click"]}
              >
                <Button>
                  {!type ? "선택하기" : type.title}&ensp;&ensp;&or;
                </Button>
              </Dropdown>
            </Form.Item>
          </Descriptions.Item>
        )}
        <Descriptions.Item label="파일" span={4} labelStyle={{ width: 100 }}>
          {uploadLoading && <LoadingOutlined />}
          {files && files.length !== 0 ? (
            <>
              {files.map((elem, idx) => {
                return (
                  <div key={idx} className="attach-group">
                    <a
                      href={elem?.url}
                      download
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {elem?.fileName}
                    </a>
                  </div>
                );
              })}
            </>
          ) : files?.length === 0 ? (
            uploadLoading ? (
              <div>업로드 중입니다...</div>
            ) : (
              <div>첨부파일 없음</div>
            )
          ) : (
            <></>
          )}
          <Upload
            multiple={true}
            maxCount={4}
            className="upload-list-inline"
            showUploadList={false}
            customRequest={({ file }) => handleFileUpload(file)}
            onChange={({ file: callbackFile }) => {
              if (files?.length !== 0) {
                callbackFile.status = "done";
              } else {
                callbackFile.status = "removed";
              }
            }}
            disabled={uploadLoading}
          >
            <Button disabled={uploadLoading} icon={<UploadOutlined />}>
              파일 업로드
            </Button>
          </Upload>
        </Descriptions.Item>

        <Descriptions.Item
          label="파일공개"
          span={4}
          labelStyle={{ width: 120 }}
        >
          <div>
            <div>
              {attach ? (
                <span style={{ color: "#0081fa" }}>공개</span>
              ) : (
                <span style={{ color: "#ff4447" }}>비공개</span>
              )}
            </div>
            <div>
              <Switch checked={attach} onChange={() => setAttach(!attach)} />
            </div>
          </div>
        </Descriptions.Item>
        {param === "achievement" && (
          <Descriptions.Item label="공개" span={4}>
            <Switch
              defaultChecked={board?.private ? false : true}
              onChange={() => setCheckPrivate(!checkPrivate)}
            />
          </Descriptions.Item>
        )}
        {linkNeeded && (
          <Descriptions.Item label="링크" span={4}>
            <Input
              placeholder={board?.link || undefined}
              value={link}
              onChange={onChangeLink}
            />
          </Descriptions.Item>
        )}
        {param === "achievement" && (
          <>
            <Descriptions.Item label="현재 업로드된 이미지">
              {images && images.length !== 0 ? (
                <div>
                  <img src={images[0]!.url} alt="ima" width={300} />
                </div>
              ) : (
                <div>업로드된 이미지가 없습니다.</div>
              )}
            </Descriptions.Item>
            <Descriptions.Item
              label="새로 업로드 할 이미지"
              span={4}
              labelStyle={{ width: 100 }}
            >
              {uploadLoading && <LoadingOutlined />}
              {imgUrl ? (
                <div>
                  <img src={imgUrl} width={300} alt="upimage" />
                </div>
              ) : (
                <div>이미지 없음</div>
              )}
              <Upload
                multiple={true}
                maxCount={1}
                listType="picture"
                className="upload-list-inline"
                showUploadList={false}
                progress={{ showInfo: true }}
                disabled={uploadLoading}
                customRequest={({ file }) => handleImageUpload(file)}
                onChange={({ file: callbackFile }) => {
                  if (files?.length !== 0) {
                    callbackFile.status = "done";
                  } else {
                    callbackFile.status = "removed";
                  }
                }}
              >
                <Button icon={<UploadOutlined />}>이미지 업로드</Button>
              </Upload>
            </Descriptions.Item>
          </>
        )}

        <Descriptions.Item label="내용" span={4}>
          <Editor onChange={handleChange} content={content} />
        </Descriptions.Item>
      </Descriptions>
      <div className="button-group">
        <Button
          type="primary"
          onClick={() => handleEditBoard()}
          disabled={uploadLoading}
        >
          {!loading ? (
            "업로드"
          ) : (
            <>
              <LoadingOutlined />
              Uploading...
            </>
          )}
        </Button>
        <Button type="primary" danger onClick={handleDeleteBoard}>
          삭제하기
        </Button>
      </div>
    </Container>
  );
};

export default EditBoardPage;
