import React from "react";
import type { FC } from "react";
import styles from "./index.less";
import { useNavigate } from "alita";
import { LeftOutline } from "antd-mobile-icons";

interface HeaderProps {
  title: string;
  pathname?: string;
}

const PageHeader: FC<HeaderProps> = ({ title, pathname = "/" }) => {
  const navigation = useNavigate();
  return (
    <div className={styles.header}>
      <LeftOutline
        onClick={() => {
          navigation(pathname);
        }}
      ></LeftOutline>
      <span
        onClick={() => {
          navigation(pathname);
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default PageHeader;
