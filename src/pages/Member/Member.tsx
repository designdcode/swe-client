import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useBoardContext } from "../../contexts";
import {
  BoardQuery,
  MemberQuery,
  MembersQuery,
  useMembersQuery,
} from "../../typings/api.d";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { Image, Table, Typography } from "antd";
import Column from "antd/lib/table/Column";
import { List } from "antd-mobile";

interface TableDataSourceProps {
  key: number;
  jobTitle: string;
  memberName: string;
  phoneNumber: string;
  email: string;
  job?: string;
}

interface MemberGroupProps {
  eduCenter: MembersQuery["members"]["data"];
  helpCenter: MembersQuery["members"]["data"];
  valueCenter: MembersQuery["members"]["data"];
  jobCenter: MembersQuery["members"]["data"];
}

export const Member: FC = () => {
  const { boards } = useBoardContext();
  const [images, setImages] = useState<BoardQuery["board"]["images"]>();
  const [memberGroup, setMemberGroup] = useState<MemberGroupProps>();
  const [president, setPresident] = useState<MemberQuery["member"]>();
  const [vicePresident, setVicePresident] = useState<MemberQuery["member"]>();

  const { loading } = useMembersQuery({
    onCompleted: ({ members: { data: memberData } }) => {
      setMemberGroup({
        eduCenter: memberData.filter((m) => m.department === "edu-center"),
        helpCenter: memberData.filter((m) => m.department === "help-center"),
        valueCenter: memberData.filter((m) => m.department === "value-center"),
        jobCenter: memberData.filter((m) => m.department === "job-center"),
      });
      const presidents = memberData.filter((m) => m.department === "president");
      const vicePresidents = memberData.filter(
        (m) => m.department === "vice-president"
      );

      if (presidents) {
        setPresident(presidents[presidents.length - 1]);
      }
      if (vicePresidents) {
        setVicePresident(vicePresidents[vicePresidents.length - 1]);
      }
    },
  });

  const handleDataSource = useCallback(
    (data: MembersQuery["members"]["data"]): Array<TableDataSourceProps> => {
      return data.map((d, i) => ({
        key: data.length - i,
        memberName: d?.memberName || "",
        email: d?.email || "",
        jobTitle: d?.jobTitle || "",
        phoneNumber: d?.phoneNumber || "",
        job: d?.job || undefined,
      }));
    },
    []
  );

  const handleTableTitle = useCallback((key: string) => {
    switch (key) {
      case "eduCenter":
        return "SW융합교육원운영실";
      case "helpCenter":
        return "SW교육지원센터";
      case "valueCenter":
        return "SW가치확산센터";
      case "jobCenter":
        return "SW직무교육센터";
      default:
        return;
    }
  }, []);

  useEffect(() => {
    if (boards) {
      const foundboards = boards.filter((b) => b.category === "intro-task");
      if (foundboards) {
        const foundImages = foundboards[foundboards.length - 1].images;
        setImages(foundImages);
      }
    }
  }, [boards]);

  if (loading) {
    return <div>loading...</div>;
  }

  // TODO: Table breaks the mobile view

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title
          level={3}
          style={{
            color: "#0c1b58",
          }}
        >
          SW중심대학 조직 및 인력
        </Typography.Title>
      </div>
      <ContentImage>
        {images && images.length > 0 && (
          <Image
            style={{
              minWidth: "250px",
              maxWidth: "800px",
            }}
            src={images[0]?.url}
            alt="uploadedImage"
          />
        )}
      </ContentImage>
      <Title
        level={4}
        style={{
          color: "#0c1b58",
        }}
      >
        구성원 및 담당업무
      </Title>
      <Div>
        <Table
          dataSource={handleDataSource([
            president,
            vicePresident,
          ] as MembersQuery["members"]["data"])}
          pagination={false}
        >
          <Column title="직책 / 구분" dataIndex={"jobTitle"} key={"jobTitle"} />
          <Column title="이름" dataIndex={"memberName"} key={"memberName"} />
          <Column title="이메일" dataIndex={"email"} key={"email"} />
          <Column
            title="연락처"
            dataIndex={"phoneNumber"}
            key={"phoneNumber"}
          />
          <Column title="담당업무" dataIndex={"job"} key={"job"} />
        </Table>
        {memberGroup &&
          Object.entries(memberGroup).map(([k, m], i) => {
            return (
              <div
                key={i}
                style={{
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                <Typography.Title
                  level={4}
                  style={{
                    color: "#0c1b58",
                  }}
                >
                  {handleTableTitle(k)}
                </Typography.Title>
                <Table dataSource={handleDataSource(m)} pagination={false}>
                  <Column
                    title="직책 / 구분"
                    dataIndex={"jobTitle"}
                    key={"jobTitle"}
                  />
                  <Column
                    title="이름"
                    dataIndex={"memberName"}
                    key={"memberName"}
                  />
                  <Column title="이메일" dataIndex={"email"} key={"email"} />
                  <Column
                    title="연락처"
                    dataIndex={"phoneNumber"}
                    key={"phoneNumber"}
                  />
                  <Column title="담당업무" dataIndex={"job"} key={"job"} />
                </Table>
              </div>
            );
          })}
      </Div>
      <MobileDiv>
        <List
          style={{
            paddingTop: "20px",
          }}
        >
          {handleDataSource([
            president,
            vicePresident,
          ] as MembersQuery["members"]["data"]).map((v, i) => {
            return (
              <List.Item
                key={i}
                prefix={
                  <Typography.Title level={5}>{v.jobTitle}</Typography.Title>
                }
                description={`${v.email} | ${v.phoneNumber}`}
              >
                {v.memberName} | {v.job}
              </List.Item>
            );
          })}
        </List>
        <List>
          {memberGroup &&
            Object.entries(memberGroup).map(([k, m], i) => {
              return (
                <div
                  key={i}
                  style={{
                    paddingTop: "30px",
                  }}
                >
                  <Typography.Title level={5}>
                    {handleTableTitle(k)}
                  </Typography.Title>
                  {handleDataSource(m).map((v, idx) => {
                    return (
                      <List.Item
                        key={idx}
                        prefix={
                          <Typography.Title level={5}>
                            {v.jobTitle}
                          </Typography.Title>
                        }
                        description={`${v.email} | ${v.phoneNumber}`}
                      >
                        {v.memberName} | {v.job}
                      </List.Item>
                    );
                  })}
                </div>
              );
            })}
        </List>
      </MobileDiv>
    </div>
  );
};

const Title = styled(Typography.Title)`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    margin-left: 10px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;

const ContentImage = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    & img {
      width: 80%;
      object-fit: contain;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    padding: 60px 0;
    padding-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    & img {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

const Div = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;

const MobileDiv = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    padding: 10px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
`;
