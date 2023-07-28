import React, { FC, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Table } from "antd";
import Column from "antd/lib/table/Column";
import { useMembersQuery } from "../../../../typings/api.d";

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
            department: v.department,
            phoneNumber: v.phoneNumber,
          })
        );
        setMembers(dataSource);
      }
    },
  });

  if (loading) {
    return <>loading</>;
  }

  return (
    <div>
      <Link to="/admin/intro/member-create">
        <Button type="primary">멤버 추가</Button>
      </Link>
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
