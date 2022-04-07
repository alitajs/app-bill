import React, { useState } from "react";
import type { FC } from "react";
import styles from "./index.less";
import "@/assets/iconfont";

import {
  Button,
  Card,
  Dialog,
  Divider,
  Input,
  NumberKeyboard,
  Popup,
  Swiper,
} from "antd-mobile";
import {
  CameraOutline,
  CloseOutline,
  DownOutline,
  EditSFill,
  LeftOutline,
  RightOutline,
} from "antd-mobile-icons";
import { useNavigate } from "alita";
import PageHeader from "@/components/header";

interface HomePageProps {}

const BillPage: FC<HomePageProps> = () => {
  const navigation = useNavigate();
  //编辑弹窗
  const [editPopup, setEditPopup] = useState(false);
  //键盘弹窗
  const [keyboard, setKeyboard] = useState(false);
  //修改键盘弹窗
  const [inputKeyboard, setinputKeyboard] = useState(false);
  //输入框
  const [inputValue, setInputValue] = useState("");
  //点击标签序号
  const [clickIndex, setClickIndex] = useState(-1);
  //字体图标名称
  const [icons] = useState([
    "tuikuan",
    "qinyoudaifu",
    "jiehuankuanguanli",
    "zhuanzhang",
    "touzi",
    "jinqian",
    "tianjia",
  ]);
  //类别名
  const [iconsName] = useState([
    "退款",
    "亲友代付",
    "借还款",
    "转账",
    "投资理财",
    "其他",
    "添加",
  ]);
  //金额修改状态
  const [editMoneyState, setEditMoneyState] = useState(false);
  //备注修改态
  const [editNoteState, setEditNoteState] = useState(false);
  return (
    <div className={styles.billInfoWrapper + " " + "billInfoWrapper"}>
      <PageHeader title="账单详情"></PageHeader>
      <div className={styles.content}>
        <Card className={styles.cardOne}>
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
            <span
              className={styles.moneyEdit}
              onClick={() => {
                setEditMoneyState(true);
                setinputKeyboard(true);
              }}
            >
              {editMoneyState ? (
                <Input
                  value={inputValue}
                  className="moneyInput"
                  autoFocus={true}
                ></Input>
              ) : (
                <>
                  <span className={styles.moneyText}>-4.50</span>
                  <EditSFill color="#d7d7d7" />
                </>
              )}
            </span>
          </div>
          <div className={styles.notes}>
            <span>备注</span>
            <span className={styles.pay} onClick={() => {}}>
              代付
              <EditSFill color="#d7d7d7" className={styles.icon} />
            </span>
          </div>
        </Card>
        <Card className={styles.cardTwo}>
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
        <Button
          onClick={() => {
            Dialog.show({
              content: (
                <div className="billDeleteDialog">
                  <div className="delete">确认删除?</div>
                  <div style={{ textAlign: "center" }}>
                    删除后将无法继续查看该笔账单信息
                  </div>
                </div>
              ),
              closeOnAction: true,
              actions: [
                [
                  {
                    key: "cancel",
                    text: "取消",
                  },
                  {
                    key: "delete",
                    text: "删除",
                  },
                ],
              ],
            });
          }}
        >
          删除
        </Button>
        <Button
          color="primary"
          onClick={() => {
            setEditPopup(true);
            setKeyboard(true);
          }}
        >
          编辑
        </Button>
      </div>
      <Popup
        bodyClassName={styles.editPopup}
        visible={editPopup}
        onMaskClick={() => {
          setEditPopup(false);
          setKeyboard(false);
          setInputValue("");
        }}
        bodyStyle={{ height: "80vh" }}
      >
        <div className={styles.content}>
          <div className={styles.head}>
            <span>
              总帐本
              <div className={styles.triangle}></div>
            </span>
            <CloseOutline
              color="#c8c8c8"
              onClick={() => {
                setEditPopup(false);
                setKeyboard(false);
              }}
            />
          </div>

          <div className={styles.cost}>
            <i className={styles.RMBIcon}>￥</i>
            <Input
              autoFocus={true}
              className={styles.costInput}
              value={inputValue}
            />
          </div>
          <Divider className={styles.divider} />
          <Swiper className={styles.swiper}>
            <Swiper.Item className={styles.item}>
              {icons.map((icon, index) => {
                return (
                  <div className={styles.icon} key={icon}>
                    <div
                      onClick={() => {
                        setClickIndex(index);
                      }}
                      className={
                        index === clickIndex
                          ? styles.clickBackground
                          : styles.iconBackground
                      }
                    >
                      <svg className="icon" aria-hidden="true">
                        {index === clickIndex ? (
                          <use xlinkHref={`#icon-${icon}C`}></use>
                        ) : (
                          <use xlinkHref={`#icon-${icon}`}></use>
                        )}
                      </svg>
                    </div>
                    {iconsName[index]}
                  </div>
                );
              })}
            </Swiper.Item>
          </Swiper>
          <div className={styles.tool}>
            <div className={styles.note}>购物</div>
            <div className={styles.day}>3月29日</div>
            <div className={styles.notes}>#</div>
            <div className={styles.camera}>
              <CameraOutline color="#c9c9c9" />
            </div>
          </div>
        </div>
        <NumberKeyboard
          className={styles.keyboard + " " + "keyboard"}
          visible={keyboard}
          showCloseButton={false}
          confirmText="完成"
          onConfirm={() => {
            setEditPopup(false);
            setKeyboard(false);
          }}
          onClose={() => {
            setInputValue("");
          }}
          onInput={(value) => {
            setInputValue((v) => {
              return v + value;
            });
          }}
          onDelete={() => {
            setInputValue(inputValue.slice(0, inputValue.length - 1));
          }}
          customKey="."
        />
      </Popup>

      <NumberKeyboard
        showCloseButton={true}
        className={styles.inputKeyboard + " " + "keyboard"}
        visible={inputKeyboard}
        confirmText="保存"
        onConfirm={() => {
          setinputKeyboard(false);
        }}
        onClose={() => {
          setInputValue("");
        }}
        onInput={(value) => {
          setInputValue((v) => {
            return v + value;
          });
        }}
        onDelete={() => {
          setInputValue(inputValue.slice(0, inputValue.length - 1));
        }}
        customKey="."
      />
    </div>
  );
};

export default BillPage;
