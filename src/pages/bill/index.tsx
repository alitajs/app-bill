import React, { useState, useEffect } from "react";
import type { FC } from "react";
import styles from "./index.less";
import "@/assets/iconfont";
import dayjs from "dayjs";

import {
  Button,
  Calendar,
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
  CheckCircleOutline,
  CloseOutline,
  DownOutline,
  EditSFill,
  FileOutline,
  FireFill,
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
  //键盘输入值
  const [inputValue, setInputValue] = useState("-4.5");
  //日期弹窗
  const [dayPopup, setDayPopup] = useState(false);
  const [day, setDay] = useState("2020年4月6日");
  const defaultSingle = new Date();
  //账本弹窗
  const [accountPopup, setAccountPopup] = useState(false);
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
  //金额
  const [money, setMoney] = useState("-4.5");
  //备注修改态
  const [editNoteState, setEditNoteState] = useState(false);
  const [note, setNote] = useState("代付");
  //全部账本
  const [accountList, setAccountList] = useState(["总帐本", "吃吃吃"]);
  //已收录账本
  const [includeList, setIncludeList] = useState(["总帐本"]);
  //选中的账本序号
  const [cListIndex, setCListIndex] = useState(-1);
  useEffect(() => {
    setInputValue(money.slice(1));
  }, []);
  useEffect(() => {
    console.log("111", cListIndex);
    console.log(includeList);
  });
  useEffect(() => {
    setMoney(money.slice(0, 1) + inputValue);
  }, [inputValue]);
  return (
    <div
      className={styles.billInfoWrapper + " " + "billInfoWrapper"}
      onClick={() => {
        if (editMoneyState || editNoteState) {
          setEditMoneyState(false);
          setEditNoteState(false);
        }
      }}
    >
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
                  <span className={styles.moneyText}>{money}</span>
                  <EditSFill color="#d7d7d7" />
                </>
              )}
            </span>
          </div>
          <div className={styles.notes}>
            <span className={styles.note}>备注</span>
            <span
              className={styles.noteEdit}
              onClick={() => {
                setEditNoteState(true);
              }}
            >
              {editNoteState ? (
                <Input
                  value={note}
                  className="noteInput"
                  autoFocus={true}
                ></Input>
              ) : (
                <>
                  <span className={styles.pay}>
                    {note}
                    <EditSFill color="#d7d7d7" className={styles.icon} />
                  </span>
                </>
              )}
            </span>
          </div>
        </Card>
        <Card className={styles.cardTwo}>
          <div className={styles.info}>
            <span>星期</span>
            <span
              onClick={() => {
                setDayPopup(true);
              }}
            >
              {day}
              <RightOutline color="#d7d7d7"></RightOutline>
            </span>
          </div>
          <div className={styles.info}>
            <span>账本</span>
            <span
              onClick={() => {
                setAccountPopup(true);
              }}
            >
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
          confirmText="保存"
          onConfirm={() => {
            setEditPopup(false);
            setKeyboard(false);
            setMoney(money.slice(0, 1) + inputValue);
          }}
          onClose={() => {}}
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
      <Popup
        bodyClassName={styles.editPopup}
        visible={editMoneyState}
        mask={false}
        bodyStyle={{ height: "30vh" }}
      >
        <NumberKeyboard
          className={styles.inputKeyboard + " " + "keyboard"}
          visible={editMoneyState}
          showCloseButton={false}
          confirmText="保存"
          onConfirm={() => {
            setEditMoneyState(false);
            if (inputValue.at(-1) === ".") {
              setInputValue((v) => v + "00");
            }
          }}
          onClose={() => {}}
          onInput={(value) => {
            setInputValue((v) => v + value);
          }}
          onDelete={() => {
            setInputValue(inputValue.slice(0, inputValue.length - 1));
          }}
          customKey="."
        />
      </Popup>
      <Popup
        visible={dayPopup}
        bodyStyle={{ height: "65vh" }}
        bodyClassName={styles.dayPopup}
        onMaskClick={() => {
          setDayPopup(false);
        }}
      >
        <div className={styles.select}>
          <LeftOutline></LeftOutline>
          <span>选择日期</span>
        </div>
        <Calendar
          selectionMode="single"
          defaultValue={defaultSingle}
          onChange={(val) => {
            setDay(dayjs(val).format("YYYY年MM月DD日"));
            setDayPopup(false);
          }}
        />
      </Popup>
      <Popup
        visible={accountPopup}
        bodyStyle={{ height: "35vh" }}
        bodyClassName={styles.accountPopup}
        onMaskClick={() => {
          setAccountPopup(false);
        }}
      >
        <div className={styles.content}>
          <div className={styles.select}>
            <div>
              <LeftOutline></LeftOutline>
              <span>收录账本</span>
            </div>
            <div style={{ color: "#028afb" }}>
              <span>完成</span>
              <span> ({includeList.length})</span>
            </div>
          </div>
          <div className={styles.accountList}>
            {accountList.map((account, index) => {
              if (!includeList.includes(account) || index === cListIndex) {
                return (
                  <div key={account}>
                    <span
                      className={styles.list}
                      onClick={() => {
                        console.log(index, cListIndex);
                        if (index === cListIndex) {
                          setCListIndex(-1);
                          setIncludeList(
                            [...includeList].filter((item) => {
                              return account !== item;
                            })
                          );
                          return;
                        }
                        setCListIndex(index);
                        setIncludeList([...includeList, account]);
                      }}
                    >
                      <span>
                        <FireFill color="#0387f5" />
                        <span>{account}</span>
                      </span>
                      <svg
                        className={styles.icon + " " + "icon"}
                        aria-hidden="true"
                      >
                        {index === cListIndex ? (
                          <use xlinkHref={`#icon-xuanzhong`}></use>
                        ) : (
                          <use xlinkHref={`#icon-weixuanzhong`}></use>
                        )}
                      </svg>
                    </span>
                    <Divider></Divider>
                  </div>
                );
              }
              return (
                <div key={account}>
                  <span className={styles.list}>
                    <span>
                      <FileOutline color="#0387f5" />
                      <span>{account}</span>
                    </span>
                    <CheckCircleOutline color="#d7d7d7" />
                  </span>
                  <Divider></Divider>
                </div>
              );
            })}
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default BillPage;
