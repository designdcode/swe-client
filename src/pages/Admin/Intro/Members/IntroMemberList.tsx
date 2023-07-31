import React, { FC, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Descriptions, Image, Spin, Table, Typography } from "antd";
import Column from "antd/lib/table/Column";
import { BoardQuery, useMembersQuery } from "../../../../typings/api.d";
import { departments } from "./department";
import { useBoardContext } from "../../../../contexts";

interface MemberTableProps {
  id: string;
  index: number | null;
  memberName: string;
  email: string;
  phoneNumber: string;
  job: string;
  department: string;
  createdAt: string;
}

export const IntroMemberList: FC = () => {
  const history = useHistory();
  const [members, setMembers] = useState<MemberTableProps[]>();
  const { boards } = useBoardContext();
  const [board, setBoard] = useState<BoardQuery["board"]>();

  const { loading } = useMembersQuery({
    fetchPolicy: "network-only",
    onCompleted: ({ members }) => {
      if (members) {
        const dataSource: Array<MemberTableProps> = members.data.map(
          (v, i) => ({
            id: v._id,
            createdAt: (v.createdAt || "").slice(0, 10),
            email: v.email,
            index: members.data.length - i,
            job: v.job || "",
            memberName: v.memberName,
            department:
              departments.find((d) => d.value === v.department)?.label || "",
            phoneNumber: v.phoneNumber,
          })
        );
        setMembers(dataSource);
      }
    },
  });

  useEffect(() => {
    if (boards) {
      const foundBoards = boards.filter((b) => b.category === "intro-task");
      if (foundBoards) {
        setBoard(foundBoards[foundBoards.length - 1]);
      }
    }
  }, [boards]);

  if (loading) {
    return <>loading</>;
  }

  return (
    <div>
      <div>
        <Link to="/admin/intro/member-create">
          <Button type="primary">인원 추가</Button>
        </Link>
        {board ? (
          <Link
            to={`/admin/intro/edit/intro-task/${board._id}`}
            style={{
              marginLeft: "10px",
            }}
          >
            <Button type="primary">조직도 이미지 수정하기</Button>
          </Link>
        ) : (
          <Link
            to="/admin/intro/create/intro-task"
            style={{
              marginLeft: "10px",
            }}
          >
            <Button type="primary">조직도 이미지 올리기</Button>
          </Link>
        )}
      </div>
      <Descriptions
        size="middle"
        bordered
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "white",
          padding: "15px",
        }}
      >
        <Descriptions.Item label="업로드된 이미지">
          {loading && (
            <Spin tip="업로드된 이미지를 불러오고 있습니다">
              <div className="content" />
            </Spin>
          )}
          {!board || !board.images ? (
            <Typography>업로드된 이미지가 없습니다</Typography>
          ) : (
            <Image width={300} src={board.images[0].url} />
          )}
        </Descriptions.Item>
      </Descriptions>
      <Table
        dataSource={members}
        style={{
          cursor: "pointer",
          marginTop: "20px",
        }}
        rowKey={"id"}
        onRow={(record) => {
          return {
            onClick: () => {
              history.push(`/admin/intro/member-show/${record.id}`);
            },
          };
        }}
      >
        <Column title="번호" dataIndex={"index"} key={"index"} />
        <Column title="이름" dataIndex={"memberName"} key={"memberName"} />
        <Column title="이메일" dataIndex={"email"} key={"email"} />
        <Column title="연락처" dataIndex={"phoneNumber"} key={"phoneNumber"} />
        <Column title="담당부서" dataIndex={"department"} key={"department"} />
        <Column title="담당업무" dataIndex={"job"} key={"job"} />
        <Column title="생성일" dataIndex={"createdAt"} key={"createdAt"} />
      </Table>
    </div>
  );
};
