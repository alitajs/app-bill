import React from "react";
import type { FC } from "react";
import styles from "./index.less";
import { Button, Card, Dialog, Divider } from "antd-mobile";
import {
  AddOutline,
  FileOutline,
  FireFill,
  RightOutline,
} from "antd-mobile-icons";
import { useNavigate } from "alita";
import PageHeader from "@/components/header";

interface HomePageProps {}

const AccountPage: FC<HomePageProps> = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.accountInfoWrapper}>
      <PageHeader title="全部账本"></PageHeader>
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
            <span
              className={styles.setIcon}
              onClick={() => {
                Dialog.show({
                  content: (
                    <div className="Dialog">
                      <div>设置</div>
                      <Divider></Divider>
                      <div>预算管理</div>
                      <Divider></Divider>
                      <div>删除帐本</div>
                    </div>
                  ),
                  closeOnAction: true,
                  closeOnMaskClick: true,
                });
              }}
            >
              ...
            </span>
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
