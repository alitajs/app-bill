/*
 * @Author: Y
 * @Date: 2022-03-30 09:11:10
 * @LastEditTime: 2022-03-31 17:44:09
 * @LastEditors: Y
 * @Description:
 */
import "@/assets/iconfont";
import React, { useEffect, useState } from "react";
import styles from "./index.less";
import {
  LeftOutline,
  DownOutline,
  EyeOutline,
  RightOutline,
  EditSOutline,
  EditSFill,
  CloseOutline,
  CameraOutline,
} from "antd-mobile-icons";
import {
  Button,
  Card,
  Divider,
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
  const [inputValue, setInputValue] = useState("");
  //添加弹窗
  const [editVisivale, seteditVisivale] = useState(false);
  //选择弹窗
  const [selectVisivale, seteSelectVisivale] = useState(false);
  //筛选弹窗
  const [filterVisivale, seteFilterVisivale] = useState(false);
  const [keyboard, setkeyboard] = useState(false);
  const [clickIndex, setclickIndex] = useState(-1);
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
        <span
          className={styles.month}
          onClick={() => {
            seteSelectVisivale(true);
          }}
        >
          2022年3月
          <DownOutline />
        </span>
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
              <span className={styles.preset}>
                ￥5000 <RightOutline />
              </span>
            </div>
            <div className={styles.inCome}>
              <span className={styles.name}>
                总收入 <EyeOutline />
              </span>
              <span className={styles.money}>
                ￥<span className={styles.count}>5,772.72</span>
              </span>
              <span className={styles.preset}>
                未设置预算 <RightOutline />
              </span>
            </div>
          </div>
          <Divider className={styles.divider} />
          <div className={styles.cardFooter}>
            <span>单类目账户</span>
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
          seteditVisivale(true);
          setkeyboard(true);
          setInputValue("");
        }}
      >
        <EditSFill className={styles.editIcon} />
      </div>
      <Popup
        bodyClassName={styles.popup}
        visible={editVisivale}
        onMaskClick={() => {
          seteditVisivale(false);
          setkeyboard(false);
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
                seteditVisivale(false);
                setkeyboard(false);
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
                        setclickIndex(index);
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
            seteditVisivale(false);
            setkeyboard(false);
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
      <Popup
        bodyClassName={styles.selectPopup}
        visible={selectVisivale}
        onMaskClick={() => {
          seteSelectVisivale(false);
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
      <Popup
        bodyClassName={styles.filterPopup}
        visible={filterVisivale}
        onMaskClick={() => {
          seteFilterVisivale(false);
        }}
        bodyStyle={{ height: "80vh" }}
      >
        <div className={styles.header}>
          <LeftOutline color="#333333" />
          <span>筛选</span>
        </div>
        <div className={styles.categoryWrapper}>
          <span className={styles.category}>快捷分类</span>
          <div className={styles.name}>
            <div>全部支出</div>
            <div>全部收入</div>
          </div>
        </div>
      </Popup>
    </div>
  );
};
export default Page;
