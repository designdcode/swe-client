import React, { useCallback, useEffect, useState } from "react";
import { Container, Col, TableRowSpan, ExtendedRow } from "./styles";
import { Row, Typography, Table, Divider, Button } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BOARD, GET_LINK } from "../../../queries/sharedQuery";
import {
  getBoard,
  getBoard_getBoard_data,
  getLinks,
  getLinks_getLinks_data,
} from "../../../typings/api";
import Column from "antd/lib/table/Column";
import { Link, useLocation } from "react-router-dom";
import { DELETE_LINK } from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { getDate } from "../../../utils/convertDate";

interface LocationProps {
  refresh?: boolean;
}

const Dashboard: React.VFC = () => {
  const { data, loading, refetch, error } = useQuery<getBoard>(GET_BOARD);
  const {
    data: linkData,
    loading: linkLoading,
    refetch: linkRefetch,
    error: linkError,
  } = useQuery<getLinks>(GET_LINK);
  const { state } = useLocation<LocationProps>();
  const [notice, setNotice] = useState<
    Array<getBoard_getBoard_data> | undefined
  >();
  const [admission, setAdmission] = useState<
    Array<getBoard_getBoard_data> | undefined
  >();
  const [links, setLinks] = useState<
    Array<getLinks_getLinks_data> | undefined
  >();

  const [deleteLink] = useMutation(DELETE_LINK);

  useEffect(() => {
    if (data?.getBoard.data) {
      setNotice(
        data.getBoard.data
          .filter((item) => item.category.includes("community-notice"))
          .slice(0, 5)
      );
      setAdmission(
        data.getBoard.data
          .filter((item) => item.category.includes("community-administration"))
          .slice(0, 5)
      );
    }
  }, [data]);

  useEffect(() => {
    if (linkData?.getLinks.data) {
      setLinks(linkData.getLinks.data as getLinks_getLinks_data[]);
    }
  }, [linkData]);

  useEffect(() => {
    const excuteRefetch = () => {
      if (refetch) refetch();
      if (linkRefetch) linkRefetch();
    };
    if (state && state.refresh) excuteRefetch();
    return () => excuteRefetch();
  }, [refetch, state, linkRefetch]);

  const handleLinkDelete = useCallback(
    async (id: number) => {
      await deleteLink({
        variables: { id },
      }).then(({ data }) => {
        if (data?.deleteLink.ok) {
          toast.success("링크가 삭제 되엇습니다");
        }
      });
      refetch();
      linkRefetch();
    },
    [refetch, deleteLink, linkRefetch]
  );

  if (error) console.error(error);
  if (linkError) console.error(linkError);

  return (
    <Container>
      {loading ? (
        <>loading...</>
      ) : (
        <Row gutter={[30, 40]} justify={"space-between"}>
          <Col span={11}>
            <Table
              title={() => (
                <Typography.Title level={4}>공지사항</Typography.Title>
              )}
              dataSource={notice}
              showHeader={false}
              rowKey={"noticeid"}
              pagination={false}
              size="middle"
            >
              <Column
                dataIndex="title"
                align="left"
                ellipsis={true}
                key={"noticesubid"}
                render={(value, record: getBoard_getBoard_data, i) => {
                  return (
                    <TableRowSpan key={i}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                      >
                        {value}
                      </Link>
                    </TableRowSpan>
                  );
                }}
              />
              <Column
                dataIndex="createdAt"
                align="right"
                key={"noticetime"}
                render={(value, record: getBoard_getBoard_data, i) => {
                  return (
                    <span key={i}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                      >
                        {getDate(value)}
                      </Link>
                    </span>
                  );
                }}
              />
            </Table>
          </Col>
          <Col span={11}>
            <Table
              title={() => (
                <Typography.Title level={4}>학사공지</Typography.Title>
              )}
              dataSource={admission}
              showHeader={false}
              rowKey={"admissionkey"}
              pagination={false}
              size="middle"
            >
              <Column
                dataIndex="title"
                align="left"
                ellipsis={true}
                key={"subadmissionkey"}
                render={(value, record: getBoard_getBoard_data, id) => {
                  return (
                    <TableRowSpan key={id}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                      >
                        {value}
                      </Link>
                    </TableRowSpan>
                  );
                }}
              />
              <Column
                dataIndex="createdAt"
                align="right"
                key={"subadmissionkeydate"}
                render={(value, record: getBoard_getBoard_data, idx) => {
                  return (
                    <span key={idx}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                      >
                        {getDate(value)}
                      </Link>
                    </span>
                  );
                }}
              />
            </Table>
          </Col>
        </Row>
      )}
      <Divider />
      {/* <ExtendedRow>
        <Typography.Title level={4}>사이트 링크</Typography.Title>
        {linkLoading ? (
          <>loading...</>
        ) : (
          <Table
            showHeader={false}
            dataSource={links}
            pagination={false}
            rowKey="linkKey"
          >
            <Column
              dataIndex="title"
              align="left"
              key="linkKey0"
              render={(value) => {
                return <span key="first">{value}</span>;
              }}
            />
            <Column
              dataIndex="url"
              align="center"
              key="linkKey1"
              render={(value) => {
                return <span key="second">{value}</span>;
              }}
            />
            <Column
              dataIndex="url"
              align="right"
              key="linkKey2"
              render={(value, record: getLinks_getLinks_data) => {
                return (
                  <div key="third">
                    <a href={`${value}`}>
                      <Button>바로가기</Button>
                    </a>
                    <Button
                      danger
                      onClick={() => handleLinkDelete(record.id)}
                      style={{ marginLeft: 15 }}
                    >
                      링크삭제
                    </Button>
                  </div>
                );
              }}
            />
          </Table>
        )}
      </ExtendedRow> */}
    </Container>
  );
};

export default Dashboard;
