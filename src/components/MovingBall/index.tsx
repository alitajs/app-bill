import React, { useState } from "react";
import type { FC } from "react";
import styles from "./index.less";
import dayjs from "dayjs";

interface MovingBallProps {
  touch: Function;
}

const MovingBall: FC<MovingBallProps> = ({ children, touch }) => {
  //拖拽锁
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
  //拖拽开始时间
  const [startTime, setStartTime] = useState(new Date());
  const touchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setStartTime(new Date());
    const move: HTMLDivElement | null = document.querySelector("#move");
    setFlag(true);
    const touch: React.Touch = e?.touches[0];
    const maxW = move ? document.body.clientWidth - move?.offsetWidth : 0;
    const maxH = move ? document.body.clientHeight - move?.offsetHeight : 0;
    setMax({ w: maxW, h: maxH });
    const x = move ? touch?.clientX - move?.offsetLeft : 0;
    const y = move ? touch?.clientY - move?.offsetTop : 0;
    setPosition({ x, y });
    move?.addEventListener("touchstart", (e) => {
      e.preventDefault();
    });
  };
  const touchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const move: HTMLDivElement | null = document.querySelector("#move");
    if (flag) {
      const touch: React.Touch = e?.touches[0];
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
      // if (now.y > move.offsetHeight) {
      //   setNow({
      //     x: nx,
      //     y: max.h,
      //   });
      // }
      // if (now.y <= move.offsetHeight) {
      //   setNow({
      //     x: nx,
      //     y: 0,
      //   });
      // }
      // if (now.x > move.offsetWidth) {
      //   setNow({
      //     x: max.w,
      //     y: ny,
      //   });
      // }
      // if (now.x <= move.offsetWidth) {
      //   setNow({
      //     x: 0,
      //     y: ny,
      //   });
      // }
      move ? (move.style.left = now.x / 50 + "rem") : null;
      move ? (move.style.top = now.y / 50 + "rem") : null;
    }
  };
  const touchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const move: any = document.querySelector("#move");
    const endTime = new Date();
    const time = dayjs(endTime).diff(dayjs(startTime), "millisecond");
    if (time && time <= 200) {
      touch();
    }
    if (now.y !== 0) {
      if (now.x > document.body.clientWidth / 2) {
        move.style.left = "86vw";
      }
      if (now.x <= document.body.clientWidth / 2) {
        move.style.left = "5vw";
      }
      if (now.y < document.body.clientHeight / 2) {
        console.log(now.y);
        move.style.top = "5vh";
      }
      if (now.y > document.body.clientHeight / 2) {
        move.style.top = "86vh";
      }
    }
    setStartTime(endTime);
    setFlag(false);
  };
  return (
    <div
      id="move"
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
      className={styles.moveBoll}
    >
      {children}
    </div>
  );
};

export default MovingBall;
