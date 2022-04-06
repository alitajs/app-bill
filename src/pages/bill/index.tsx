import React from "react";
import type { FC } from "react";
import styles from "./index.less";
import { Button, Card } from "antd-mobile";
import {
  CameraOutline,
  EditSFill,
  LeftOutline,
  RightOutline,
} from "antd-mobile-icons";
import { useNavigate } from "alita";

interface HomePageProps {}

const BillPage: FC<HomePageProps> = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.billInfoWrapper}>
      <div
        className={styles.header}
        onClick={() => {
          navigation("/");
        }}
      >
        <LeftOutline></LeftOutline>
        <span> 账单详情</span>
      </div>
      <div className={styles.content}>
        <Card className={styles.header}>
          <div className={styles.money}>
            <div className={styles.icon}>
              <div className={styles.clickBackground}>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={`#icon-renqingC`}></use>
                </svg>
              </div>
              <span>
                人情社交
                <RightOutline color="#d7d7d7"></RightOutline>
              </span>
            </div>
            <span className={styles.moneyEdit}>
              <span>-4.50</span>
              <EditSFill color="#d7d7d7" />
            </span>
          </div>
          <div className={styles.notes}>
            <span>备注</span>
            <span className={styles.pay}>
              代付
              <EditSFill color="#d7d7d7" className={styles.icon} />
            </span>
          </div>
        </Card>
        <Card className={styles.main + " " + "main"}>
          <div className={styles.info}>
            <span>星期</span>
            <span>
              2022年03月29日
              <RightOutline color="#d7d7d7"></RightOutline>
            </span>
          </div>
          <div className={styles.info}>
            <span>账本</span>
            <span>
              总帐本
              <RightOutline color="#d7d7d7"></RightOutline>
            </span>
          </div>
          <div className={styles.info}>
            <span>账户</span>
            <span>
              余额宝
              <RightOutline color="#d7d7d7"></RightOutline>
            </span>
          </div>
          <div className={styles.info}>
            <span>标签</span>
            <span style={{ color: "#d7d7d7" }}>
              暂无
              <RightOutline color="#d7d7d7"></RightOutline>
            </span>
          </div>
          <div className={styles.info}>
            <span>来源</span>
            <span>
              从账本同步
              <RightOutline color="#d7d7d7"></RightOutline>
            </span>
          </div>
          <div className={styles.cra}>
            <span>照片</span>
            <div>
              <CameraOutline color="#d7d7d7" className={styles.icon} />
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.footer + " " + "billFooter"}>
        <Button>删除</Button>
        <Button color="primary">编辑</Button>
      </div>
    </div>
  );
};

export default BillPage;
