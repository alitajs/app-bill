import React from "react";
import type { FC } from "react";
import styles from "./index.less";
import { Button, Card, Divider } from "antd-mobile";
import {
  AddOutline,
  CameraOutline,
  EditSFill,
  FileOutline,
  FireFill,
  LeftOutline,
  ReceivePaymentOutline,
  RightOutline,
} from "antd-mobile-icons";
import { useNavigate } from "alita";

interface HomePageProps {}

const AccountPage: FC<HomePageProps> = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.accountInfoWrapper}>
      <div
        className={styles.header}
        onClick={() => {
          navigation("/");
        }}
      >
        <LeftOutline></LeftOutline>
        <span>全部账本</span>
      </div>
      <div className={styles.add}>
        添加账本
        <AddOutline />
      </div>
      <div className={styles.content}>
        <Card className={styles.card + " " + "accountCard"}>
          <span className={styles.cardTop}>
            <FileOutline color="#0387f5" />
            <span>总帐本</span>
          </span>
          <Divider></Divider>
          <div className={styles.costAndRec}>
            <div className={styles.monthWrapper}>
              <div>4月支出</div>
              <div>4月收入</div>
            </div>
            <div className={styles.moneyWrapper}>
              <div>
                <span className={styles.RMBIcon}>￥</span>
                <span>0.00</span>
              </div>
              <div>
                <span className={styles.RMBIcon}>￥</span>
                <span>0.00</span>
              </div>
            </div>
          </div>
          <div className={styles.preset}>未设置预算</div>
        </Card>
        <Card className={styles.card + " " + "accountCard"}>
          <span className={styles.cardTop}>
            <FireFill color="#f35639" />
            <span>吃吃吃</span>
            <RightOutline color="#d4d4d4" />
            <span className={styles.setIcon}>...</span>
          </span>
          <Divider></Divider>
          <div className={styles.costAndRec}>
            <div className={styles.monthWrapper}>
              <div>4月支出</div>
              <div>4月收入</div>
            </div>
            <div className={styles.moneyWrapper}>
              <div>
                <span className={styles.RMBIcon}>￥</span>
                <span>0.00</span>
              </div>
              <div>
                <span className={styles.RMBIcon}>￥</span>
                <span>0.00</span>
              </div>
            </div>
          </div>
          <div className={styles.preset}>未设置预算</div>
        </Card>
        <div className={styles.noMore}>没有更多</div>
      </div>
    </div>
  );
};

export default AccountPage;
