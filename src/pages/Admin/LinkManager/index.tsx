import { Container, List, Row } from "./styles";
import { Input, Button, Divider } from "antd";
import useInput from "../../../hooks/useInput";
import {
  useCreateLinkMutation,
  useLinksQuery,
  useRemoveLinkMutation,
  useUpdateLinkMutation,
} from "../../../typings/api.d";
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

const LinkManager: React.VFC = () => {
  const [url, onChangeUrl, setUrl] = useInput("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [onAdd, setOnAdd] = useState<boolean>(false);
  const [onEdit, setOnEdit] = useState<number>(0);

  const { data, loading, refetch } = useLinksQuery();

  const [createLink] = useCreateLinkMutation();
  const [editLink] = useUpdateLinkMutation();
  const [deleteLink] = useRemoveLinkMutation();

  const handleAdd = useCallback(async () => {
    if (!url.trim() || !url) {
      toast.error("링크를 입력해 주세요");
    } else if (!title.trim() || !title) {
      toast.error("사이트 이름을 입력해 주세요");
    }
    await createLink({
      variables: {
        args: {
          url: url.includes("http") ? url : `http://${url}`,
          title,
        },
      },
    }).then(({ data }) => {
      setUrl("");
      setTitle("");
      toast.success("링크가 생성되었습니다");
    });
    refetch();
    setOnAdd(false);
  }, [url, title, createLink, refetch, setUrl, setTitle]);

  const handleDelete = useCallback(
    async (id: string) => {
      await deleteLink({
        variables: {
          _id: id,
        },
      }).then(({ data }) => {
        toast.success("링크가 삭제 되었습니다");
      });
      refetch();
    },
    [refetch, deleteLink]
  );

  const handleEdit = useCallback(
    async (id: string) => {
      await editLink({
        variables: {
          args: {
            _id: id,
            title,
            url: url.includes("http") ? url : `http://${url}`,
          },
        },
      }).then(({ data }) => {
        toast.success("링크가 수정 되었습니다");
      });
      setOnEdit(0);
      setTitle("");
      setUrl("");
      refetch();
    },
    [title, url, editLink, refetch, setOnEdit, setTitle, setUrl]
  );

  if (loading) {
    return <>loading...</>;
  }

  return (
    <Container>
      <List style={{ backgroundColor: "white" }}>
        {data?.links.data.map((elem, idx) => {
          return (
            <div key={idx}>
              <Divider style={{ marginTop: 5 }} />
              <div className="list-description">
                {onEdit === idx ? (
                  <Input
                    placeholder={"사이트 명"}
                    className="edit-input"
                    value={title}
                    onChange={onChangeTitle}
                  />
                ) : (
                  <span className="list-title">{elem?.title}</span>
                )}
                {onEdit === idx ? (
                  <Input
                    placeholder={"링크 URL"}
                    className="edit-input"
                    value={url}
                    onChange={onChangeUrl}
                  />
                ) : (
                  <a
                    href={elem?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="list-href"
                  >
                    {elem?.url}
                  </a>
                )}
                <div className="button-group">
                  <button
                    className="button edit-button"
                    onClick={() => {
                      if (onEdit === 0) {
                        setUrl(elem!.url);
                        setTitle(elem!.title);
                        setOnEdit(idx);
                      } else {
                        handleEdit(elem!._id);
                      }
                    }}
                  >
                    {onEdit === 0 ? <EditOutlined /> : <CheckOutlined />}
                  </button>
                  <button
                    className="button delete-button"
                    onClick={() => handleDelete(elem!._id)}
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              </div>
              <Divider style={{ marginBottom: 5 }} />
            </div>
          );
        })}
      </List>
      {onAdd && (
        <Row>
          <Input
            placeholder={"사이트 명"}
            className="input-row"
            value={title}
            onChange={onChangeTitle}
          />
          <Input
            placeholder={"링크 URL"}
            className="input-row"
            value={url}
            onChange={onChangeUrl}
          />
        </Row>
      )}
      <Row style={{ marginTop: 20 }}>
        {!onAdd ? (
          <Button type="dashed" onClick={() => setOnAdd(!onAdd)}>
            <PlusOutlined style={{ fontSize: 14 }} /> Add Link
          </Button>
        ) : (
          <Button
            type="primary"
            onClick={() =>
              url.trim() || title.trim() ? handleAdd() : setOnAdd(false)
            }
          >
            생성
          </Button>
        )}
      </Row>
    </Container>
  );
};

export default LinkManager;
