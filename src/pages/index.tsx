/*
 * @Author: Y
 * @Date: 2022-03-30 09:11:10
 * @LastEditTime: 2022-03-31 17:44:09
 * @LastEditors: Y
 * @Description:
 */
import "@/assets/iconfont";
import React, { useState } from "react";
import styles from "./index.less";
import {
  LeftOutline,
  DownOutline,
  EyeOutline,
  RightOutline,
  EditSFill,
  CloseOutline,
  CameraOutline,
  FilterOutline,
} from "antd-mobile-icons";
import {
  Button,
  Card,
  Divider,
  InfiniteScroll,
  Input,
  NumberKeyboard,
  Popup,
  Swiper,
} from "antd-mobile";
import { useNavigate } from "alita";
const Page = () => {
  const history = useNavigate();
  const [icons] = useState([
    "canyin",
    "kalaok",
    "gouwu",
    "tubiao",
    "pingguo",
    "gongjiao",
    "shenghuoriyong",
    "renqing",
    "chongwu",
    "naiping",
    "lanqiu",
    "shenghuojiaofei",
  ]);
  const [iconsName] = useState([
    "餐饮",
    "休闲玩乐",
    "购物",
    "穿搭美容",
    "水果零食",
    "交通",
    "生活日用",
    "人情社交",
    "宠物",
    "养娃",
    "运动",
    "生活服务",
  ]);
  const [categorys] = useState([
    "餐饮",
    "休闲玩乐",
    "购物",
    "穿搭美容",
    "水果零食",
    "交通",
    "生活日用",
    "人情设交",
    "宠物",
    "养娃",
    "运动",
    "生活服务",
    "买菜",
    "住房",
    "爱车",
    "学习",
    "网络虚拟",
    "烟酒",
    "医疗保健",
    "金融保险",
    "家具家电",
    "酒店旅行",
    "转账",
    "公益",
    "互助保障",
    "其他",
  ]);
  const [inputValue, setInputValue] = useState("");
  //添加弹窗
  const [editVisitable, setEditVisitable] = useState(false);
  //选择弹窗
  const [selectVisitable, setSelectVisitable] = useState(false);
  //筛选弹窗
  const [filterVisitable, setFilterVisitable] = useState(false);
  //设置预算弹窗
  const [presetValue, setPresetValue] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const [clickIndex, setClickIndex] = useState(-1);
  const [flag, setFlag] = useState(false);
  //鼠标在元素中的相对位置
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  //元素最大可移动位置
  const [max, setMax] = useState({
    w: 0,
    h: 0,
  });
  //拖拽鼠标位置
  const [now, setNow] = useState({
    x: 0,
    y: 0,
  });
  const down = (e: any) => {
    const edit: HTMLDivElement | null = document.querySelector("#edit");
    setFlag(true);
    let touch = null;
    if (e.touches) {
      touch = e.touches[0];
    } else {
      touch = e;
    }
    const maxW = edit ? document.body.clientWidth - edit?.offsetWidth : 0;
    const maxH = edit ? document.body.clientHeight - edit?.offsetHeight : 0;
    setMax({ w: maxW, h: maxH });
    const x = edit ? touch.clientX - edit?.offsetLeft : 0;
    const y = edit ? touch.clientY - edit?.offsetTop : 0;
    setPosition({ x, y });
  };
  const move = (e: any) => {
    const edit: any = document.querySelector("#edit");
    if (flag) {
      let touch = null;
      if (e.touches) {
        touch = e.touches[0];
      } else {
        touch = e;
      }
      const nx = touch.clientX - position.x;
      const ny = touch.clientY - position.y;
      setNow({
        x: nx,
        y: ny,
      });
      if (now.x < 0) {
        setNow({
          x: 0,
          y: ny,
        });
        return;
      }
      if (now.x > max.w) {
        setNow({
          x: max.w,
          y: ny,
        });
        return;
      }
      if (now.y < 0) {
        setNow({
          x: nx,
          y: 0,
        });
        return;
      }
      if (now.y > max.h) {
        setNow({
          x: nx,
          y: max.h,
        });
        return;
      }
      if (now.y > edit.offsetHeight) {
        setNow({
          x: nx,
          y: max.h,
        });
      }
      if (now.y <= edit.offsetHeight) {
        setNow({
          x: nx,
          y: 0,
        });
      }
      if (now.x > edit.offsetWidth) {
        setNow({
          x: max.w,
          y: ny,
        });
      }
      if (now.x <= edit.offsetWidth) {
        setNow({
          x: 0,
          y: ny,
        });
      }
      edit.style.left = now.x / 50 + "rem";
      edit.style.top = now.y / 50 + "rem";
      document.addEventListener("touchmove", () => {
        // e.preventDefault();
      });
    }
  };
  const end = () => {
    if (now.y !== 0) {
      const edit: any = document.querySelector("#edit");
      if (now.x > document.body.clientWidth / 2) {
        edit.style.left = "86vw";
      }
      if (now.x <= document.body.clientWidth / 2) {
        edit.style.left = "5vw";
      }
      if (now.y < document.body.clientHeight / 2) {
        console.log(now.y);
        edit.style.top = "5vh";
      }
      if (now.y > document.body.clientHeight / 2) {
        edit.style.top = "86vh";
      }
    }
    setFlag(false);
  };

  return (
    <div className={styles.index}>
      <header className={styles.header}>
        <section className={styles.section}>
          <LeftOutline className={styles.leftOutline} />
          <span>记账本</span>
          <div className={styles.dashedSquare}></div>
        </section>
        <div className={styles.month}>
          <span
            onClick={() => {
              setSelectVisitable(true);
            }}
          >
            2022年3月
            <DownOutline />
          </span>
          <span
            onClick={() => {
              setFilterVisitable(true);
            }}
          >
            <FilterOutline />
            筛选
          </span>
        </div>
      </header>
      <div className={styles.content}>
        <Card className={styles.payCard}>
          <div className={styles.payInfo}>
            <div className={styles.pay}>
              <span className={styles.name}>
                总支出 <EyeOutline />
              </span>
              <span className={styles.money}>
                ￥<span className={styles.count}>3,772.72</span>
              </span>
              <span
                className={styles.preset}
                onClick={() => {
                  setPresetValue(true);
                  setKeyboard(true);
                }}
              >
                ￥5000
                <RightOutline />
              </span>
            </div>
            <div className={styles.inCome}>
              <span className={styles.name}>
                总收入
                <EyeOutline />
              </span>
              <span className={styles.money}>
                ￥<span className={styles.count}>5,772.72</span>
              </span>
            </div>
          </div>
          <Divider className={styles.divider} />
          <div
            className={styles.cardFooter}
            onClick={() => history("/account")}
          >
            <span>全部账本</span>
            <RightOutline style={{ float: "right" }} />
          </div>
        </Card>
        <Card className={styles.infoCard}>
          <div className={styles.infoCardHeader}>
            <span className={styles.day}>3月27日 星期日</span>
            <span className={styles.inCome}>收 0.39 </span>
            <span className={styles.pay}>支 1.00 </span>
          </div>
          <div className={styles.payAndInComeInfo}>
            <div className={styles.square}></div>
            <div className={styles.payInfo}>
              <div
                className={styles.title}
                onClick={() => {
                  history({
                    pathname: "bill",
                    search: "?id=456",
                  });
                }}
              >
                <span>App Store & Apple Music:于03.2...</span>
                <span className={styles.money}>-1.00</span>
              </div>
              <span className={styles.category}>休闲娱乐</span>
            </div>
          </div>
          <div className={styles.payAndInComeInfo}>
            <div
              className={styles.square}
              style={{ backgroundColor: "#f59f9c" }}
            ></div>
            <div className={styles.payInfo}>
              <div className={styles.title}>
                <span>余额宝-2022.03.26-收益发放...</span>
                <span className={styles.money} style={{ color: "#ff7573" }}>
                  +0.39
                </span>
              </div>
              <span className={styles.category}>投资理财</span>
            </div>
          </div>
        </Card>
        <Card className={styles.infoCard} style={{ height: "3.8rem" }}>
          <div className={styles.infoCardHeader}>
            <span className={styles.day}>3月26日 星期六</span>
            <span className={styles.inCome}>收 0.39 </span>
            <span className={styles.pay}>支 2.00 </span>
          </div>
          <div className={styles.payAndInComeInfo}>
            <div className={styles.square}></div>
            <div className={styles.payInfo}>
              <div className={styles.title}>
                <span>App Store & Apple Music:于03.2...</span>
                <span className={styles.money}>-1.00</span>
              </div>
              <span className={styles.category}>休闲娱乐</span>
            </div>
          </div>
          <div className={styles.payAndInComeInfo}>
            <div className={styles.square}></div>
            <div className={styles.payInfo}>
              <div className={styles.title}>
                <span>App Store & Apple Music:于03.2...</span>
                <span className={styles.money}>-1.00</span>
              </div>
              <span className={styles.category}>休闲娱乐</span>
            </div>
          </div>
          <div className={styles.payAndInComeInfo}>
            <div
              className={styles.square}
              style={{ backgroundColor: "#f59f9c" }}
            ></div>
            <div className={styles.payInfo}>
              <div className={styles.title}>
                <span>余额宝-2022.03.26-收益发放...</span>
                <span className={styles.money} style={{ color: "#ff7573" }}>
                  +0.39
                </span>
              </div>
              <span className={styles.category}>投资理财</span>
            </div>
          </div>
        </Card>
      </div>
      <div
        id="edit"
        onTouchStart={down}
        onTouchMove={move}
        onTouchEnd={end}
        className={styles.edit}
        onClick={() => {
          setEditVisitable(true);
          setKeyboard(true);
          setInputValue("");
        }}
      >
        <EditSFill className={styles.editIcon} />
      </div>
      {/* //添加账单 */}
      <Popup
        bodyClassName={styles.popup}
        visible={editVisitable}
        onMaskClick={() => {
          setEditVisitable(false);
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
                setEditVisitable(false);
                setKeyboard(false);
              }}
            />
          </div>
          <div className={styles.pay}>
            <div className={styles.info}>支出</div>
            <div className={styles.info + " " + styles.inCome}>收入</div>
            <div className={styles.account}>
              不选择账户
              <div className={styles.triangle}></div>
            </div>
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
            <Swiper.Item>
              <div></div>
              <div></div>
            </Swiper.Item>
            <Swiper.Item>
              <div></div>
            </Swiper.Item>
          </Swiper>
          <div className={styles.tool}>
            <div className={styles.note}>添加备注...</div>
            <div className={styles.day}>今天</div>
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
            setEditVisitable(false);
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
      {/* 选择月份 */}
      <Popup
        bodyClassName={styles.selectPopup}
        visible={selectVisitable}
        onMaskClick={() => {
          setSelectVisitable(false);
        }}
        bodyStyle={{ height: "35vh" }}
      >
        <div className={styles.header}>
          <LeftOutline color="#333333" />
          <span>选择月份</span>
        </div>
        <div className={styles.year}>
          <LeftOutline color="#333333" />
          <span>2022</span>
          <RightOutline />
        </div>
        <div className={styles.month + " " + "month"}>
          <Button color="primary">1月</Button>
          <Button>2月</Button>
          <Button>3月</Button>
          <Button>4月</Button>
        </div>
      </Popup>
      {/* 筛选 */}
      <Popup
        bodyClassName={styles.filterPopup}
        visible={filterVisitable}
        onMaskClick={() => {
          setFilterVisitable(false);
        }}
        bodyStyle={{ height: "80vh" }}
      >
        <div className={styles.header}>
          <LeftOutline color="#333333" />
          <span>筛选</span>
        </div>
        <div className={styles.categoryWrapper}>
          <div className={styles.quickCategory}>
            <span className={styles.category}>快捷分类</span>
            <div className={styles.name}>
              <span>全部支出</span>
              <span>全部收入</span>
            </div>
          </div>
          <div className={styles.costCategory}>
            <span className={styles.category}>支出分类</span>
            <div className={styles.name}>
              {categorys.map((category) => {
                return <span key={category}>{category}</span>;
              })}
            </div>
          </div>
        </div>
        <div className="btnGroup">
          <Button
            style={{
              "--text-color": "#4d93f7",
              "--background-color": "#e1ebf7",
              "--border-radius": "0",
            }}
          >
            重置
          </Button>
          <Button
            color="primary"
            style={{
              "--border-radius": "0",
            }}
          >
            确认
          </Button>
        </div>
      </Popup>
      {/* 设置预算 */}
      <Popup
        bodyClassName={styles.presetPopup}
        visible={presetValue}
        onMaskClick={() => {
          setPresetValue(false);
          setKeyboard(false);
        }}
        bodyStyle={{ height: "48vh" }}
      >
        <div className={styles.popupWrapper}>
          <div className={styles.header}>
            <LeftOutline color="#333333" />
            <span>设置总预算</span>
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
          <div className={styles.costMoney}>3月已使用金额 ￥3372.72</div>
          <NumberKeyboard
            className={styles.keyboard + " " + "keyboard"}
            visible={keyboard}
            showCloseButton={false}
            confirmText="完成"
            onConfirm={() => {
              setEditVisitable(false);
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
        </div>
      </Popup>
    </div>
  );
};
export default Page;
