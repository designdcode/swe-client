import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "@emotion/styled";
import { Button, Dropdown, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";

interface ListHeadProps {
  param: string;
  subparam: string;
  title: string;
  term: string;
  searchCategory: string;
  writeAble: boolean;
  setSearchCategory: Dispatch<SetStateAction<string>>;
  onChangeTerm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSearchBoard: () => void;
}

export const ListHead: FC<ListHeadProps> = ({
  param,
  subparam,
  title,
  term,
  searchCategory,
  writeAble,
  setSearchCategory,
  onChangeTerm,
  onSearchBoard,
}) => {
  const menu = (
    <Menu
      items={[
        {
          key: "all",
          label: "전체보기",
          onClick: () => setSearchCategory("전체보기"),
        },
        {
          key: "title",
          label: "제목",
          onClick: () => setSearchCategory("제목"),
        },
      ]}
    />
  );

  return (
    <BoardTitle>
      <div className={"board-page"}>
        <Typography.Title
          level={1}
          style={{
            color: "#04083e",
          }}
        >
          {title}
        </Typography.Title>
      </div>
      <div className={"board-search"}>
        <Dropdown overlay={menu} className="dropdown">
          <Button>{searchCategory}&ensp;&ensp;&or;</Button>
        </Dropdown>
        <input
          placeholder="검색어를 입력해 주세요"
          value={term}
          onChange={onChangeTerm}
        />
        <button className="board-search-button" onClick={onSearchBoard}>
          검색
        </button>
        {writeAble && (
          <Link
            className="board-button"
            to={`/main/write/${param}/${subparam}`}
          >
            글쓰기
          </Link>
        )}
      </div>
    </BoardTitle>
  );
};

const BoardTitle = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    height: 80px;
    font-size: 20px;
    color: #0c1b58;
    display: flex;
    align-items: center;
    padding: 0 20px;
    & .board-search {
      display: none;
    }
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    & .board-page {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80%;
      & .board-page-title {
        text-align: center;
        min-width: 350px;
        margin: 0 auto;
        font-size: 40px;
        color: #0c1b58;
        display: block;
      }
    }

    & .board-search {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      & .board-button {
        cursor: pointer;
        width: 80px;
        height: 50px;
        padding: 8px;
        border: none;
        background-color: #04083e;
        color: white;
        font-size: 14px;
        margin-left: 15px;
      }

      & .board-search-button {
        cursor: pointer;
        width: 80px;
        height: 50px;
        padding: 8px;
        border: none;
        background-color: #e5e2e2b8;
        color: black;
        font-size: 14px;
        margin-left: 15px;
      }

      & input {
        width: 300px;
        height: 50px;
        background-color: #f8f8f8;
        border: none;
        margin-left: 15px;
      }

      & .dropdown {
        background-color: #f8f8f8;
        border: none;
        color: black;
        width: 150px;
        height: 50px;
      }
    }

    & a {
      background-color: #0c1b58;
      font-size: 18px;
      padding: 8px 12px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      &:hover {
        color: #f03fa8;
        transition: 0.2s linear;
      }
    }
  }
`;
