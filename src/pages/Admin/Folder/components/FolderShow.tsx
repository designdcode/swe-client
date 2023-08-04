import { Content } from "antd/lib/layout/layout";
import { FC, useCallback, useEffect, useState } from "react";
import { useFolderContext } from "../../../../contexts";
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Tabs,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import { FileAddOutlined, FileTextOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { useHistory, useParams } from "react-router";
import {
  FileType,
  FolderQuery,
  useCreateFolderMutation,
  useRemoveFileMutation,
  useRemoveFolderMutation,
  useUpdateFolderMutation,
} from "../../../../typings/api.d";
import { toast } from "react-toastify";

interface CardBoxProps {
  title: string;
  onClick?: () => void;
  icon?: "NEW" | "FILE";
  onDelete?: () => void;
}

interface FileResponseProp {
  destination: string;
  encoding: string;
  fieldname: string;
  filename: string;
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
}

const CardBox: FC<CardBoxProps> = ({
  title,
  onClick,
  icon = "FILE",
  onDelete,
}) => {
  const [openFileRemoveModal, setOpenFileRemoveModal] =
    useState<boolean>(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {onDelete && (
        <Modal
          title="파일 삭제하기"
          open={openFileRemoveModal}
          onCancel={() => setOpenFileRemoveModal(false)}
          onOk={() => {
            onDelete();
            setOpenFileRemoveModal(false);
          }}
        >
          <Typography.Text>
            정말로 <strong>{title}</strong> 삭제 하시겠습니까?.
          </Typography.Text>
        </Modal>
      )}
      <Card
        hoverable
        style={{
          margin: "10px",
          backgroundColor: "transparent",
          width: "120px",
          paddingTop: "15px",
          paddingBottom: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onClick={onClick}
        size="small"
        cover={
          icon === "FILE" ? (
            <FileTextOutlined
              style={{
                fontSize: "40px",
              }}
            />
          ) : (
            <FileAddOutlined
              style={{
                fontSize: "40px",
              }}
            />
          )
        }
      >
        <Meta description={title} />
      </Card>
      {onDelete && (
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => setOpenFileRemoveModal(true)}
        >
          <Button danger>파일삭제</Button>
        </div>
      )}
    </div>
  );
};

export const FolderShow: FC = () => {
  const { getFolder, refetch } = useFolderContext();
  const [form] = Form.useForm();
  const history = useHistory();
  const params: Record<string, any> = useParams();
  const [selectedTab, setSelectedTab] = useState<"FILE" | "FOLDER">("FILE");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [response, setResponse] = useState<FileResponseProp[]>([]);
  const [label, setLabel] = useState<string>();
  const [files, setFiles] = useState<FolderQuery["folder"]["files"]>();
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>(false);
  const { parentFolders } = useFolderContext();

  const [createFolder] = useCreateFolderMutation();
  const [updateFolder] = useUpdateFolderMutation();
  const [removeFolder] = useRemoveFolderMutation({
    variables: {
      _id: params.subparam,
    },
  });
  const [removeFile] = useRemoveFileMutation();

  useEffect(() => {
    if (params.subparam && params.subparam !== "layout") {
      getFolder({
        variables: {
          _id: params.subparam,
        },
        onCompleted: ({ folder }) => {
          setLabel(folder.label);
          setFiles(folder.files);
        },
      });
    }
  }, [params, getFolder]);

  const uploadProps: UploadProps = {
    name: "file",
    action: "http://localhost:4000/upload",
    headers: {
      authorization: "authorization-text",
    },
    listType: "picture",
    openFileDialogOnClick: true,
    onChange: (info) => {
      if (info) {
        if (info.file.status !== "uploading") {
          let reader = new FileReader();
          reader.onload = (e) => {
            console.log(e.target?.result || "failed");
          };
        }
      }
      if (info.file.status === "done" && info.file.response) {
        setResponse(() => [...response, info.file.response]);
        return info.file.response;
      } else if (info.file.status === "error") {
        console.log("failed");
      }
    },
  };

  const handleSubmit = useCallback(async () => {
    if (selectedTab === "FILE") {
      if (!response) {
        toast.error("파일을 업로드 해주세요");
        return;
      }
      const compiledFiles = (
        files?.map((v) => ({
          fileName: v.fileName,
          filePath: v.filePath,
        })) || []
      ).concat({
        fileName: response[0].filename,
        filePath: response[0].path,
      });

      await updateFolder({
        variables: {
          args: {
            _id: params.subparam,
            files: compiledFiles,
          },
        },
        onCompleted: () => {
          refetch();
          setOpenModal(false);
          toast.success("파일이 생성되었습니다.");
          setResponse([]);
        },
      });
    }
    if (selectedTab === "FOLDER") {
      const label = form.getFieldValue("label");
      if (label) {
        await createFolder({
          variables: {
            args: {
              label,
              value: label,
              parentId: params.subparam,
            },
          },
          onCompleted: () => {
            refetch();
            setOpenModal(false);
            toast.success("폴더가 생성되었습니다.");
            form.setFieldValue("label", undefined);
          },
        });
      }
    }
  }, [
    params,
    form,
    selectedTab,
    createFolder,
    refetch,
    response,
    files,
    updateFolder,
  ]);

  const handleDownload = useCallback(async (file: FileType) => {
    await fetch(`http://localhost:4000/download/${file.filePath}`, {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((blob) => {
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", file.fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        return Promise.reject({ Error: "Something Went Wrong", err });
      });
  }, []);

  const handleRemoveFolder = useCallback(async () => {
    await removeFolder({
      onCompleted: () => {
        toast.success("폴더를 삭제하였습니다.");
        if (parentFolders && parentFolders[0]) {
          history.push(
            `/admin/folder/${parentFolders[0]._id}/${parentFolders[0].label}`
          );
          // setTimeout(() => window.location.reload(), 500);
        }
        refetch();
      },
    });
  }, [removeFolder, parentFolders, history, refetch]);

  const handleRemoveFile = useCallback(
    async (filePath) => {
      await removeFile({
        variables: {
          filePath,
          folderId: params.subparam,
        },
        onCompleted: () => {
          toast.success("파일을 삭제 하였습니다.");
          refetch();
          // setTimeout(() => window.location.reload(), 500);
        },
      });
    },
    [removeFile, params, refetch]
  );

  return (
    <Content>
      <Modal
        title="폴더 삭제하기"
        open={openRemoveModal}
        onOk={() => {
          handleRemoveFolder();
          setOpenRemoveModal(false);
        }}
        onCancel={() => setOpenRemoveModal(false)}
      >
        <Typography.Text>
          정말로 <strong>{label || ""}</strong> 폴더를 삭제하시겠습니까?
        </Typography.Text>
      </Modal>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography.Title level={4}>{label}</Typography.Title>
        <Button danger onClick={() => setOpenRemoveModal(true)}>
          삭제하기
        </Button>
      </div>
      <Modal
        title="파일올리기"
        open={openModal}
        onOk={handleSubmit}
        onCancel={() => setOpenModal(false)}
      >
        <Tabs
          defaultActiveKey="FILE"
          onChange={(v) => setSelectedTab(v as "FILE" | "FOLDER")}
          items={[
            {
              key: "FILE",
              label: "파일 올리기",
              children: (
                <Upload {...uploadProps}>
                  <Button>파일 올리기</Button>
                </Upload>
              ),
            },
            {
              key: "FOLDER",
              label: "폴더 생성",
              children: (
                <Form form={form}>
                  <Form.Item name="label" required label="폴더명">
                    <Input />
                  </Form.Item>
                </Form>
              ),
            },
          ]}
        />
      </Modal>
      <div
        style={{
          display: "flex",
        }}
      >
        {files?.map((f) => {
          const trimmedfileName = f.fileName.split("-")[0];
          const extention = f.fileName.split(".");
          const fileName = `${trimmedfileName}.${
            extention[extention.length - 1]
          }`;
          return (
            <CardBox
              key={f.fileName}
              title={fileName}
              onDelete={() => handleRemoveFile(f.filePath)}
              onClick={() => handleDownload(f)}
            />
          );
        })}
        <CardBox
          title="새로만들기"
          icon="NEW"
          onClick={() => setOpenModal(true)}
        />
      </div>
    </Content>
  );
};
