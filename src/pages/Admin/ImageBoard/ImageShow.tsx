import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useBoardContext } from "../../../contexts";
import { BoardQuery } from "../../../typings/api.d";
import { Link } from "react-router-dom";
import { Button, Descriptions, Image, Spin, Typography } from "antd";

export const ImageShow: FC = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/")[4];
  const param = pathname.split("/")[2];
  const { boards } = useBoardContext();

  const [data, setData] = useState<BoardQuery["board"]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, []);

  useEffect(() => {
    if (boards) {
      setData(boards.find((v) => v.category === category));
    }
  }, [category, boards]);

  return (
    <div>
      {data?.images && data.images[0].url ? (
        <Link to={`/admin/${param}/edit/${category}/${data._id}`}>
          <Button type="primary">수정하기</Button>
        </Link>
      ) : (
        <Link to={`/admin/${param}/create/${category}`}>
          <Button type="primary">글쓰기</Button>
        </Link>
      )}
      <Descriptions
        size="middle"
        bordered
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "white",
          padding: "15px",
        }}
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="업로드된 이미지">
          {loading && (
            <Spin tip="업로드된 이미지를 불러오고 있습니다">
              <div className="content" />
            </Spin>
          )}
          {!data?.images ? (
            <Typography>업로드된 이미지가 없습니다</Typography>
          ) : (
            <Image width={300} src={data?.images[0].url} />
          )}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};
