import React from "react";
import styled from "styled-components";
import style from "./style.module.scss";
import { Row, Col, Image, Popover } from "antd";
import { MyButton } from "./index";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoMdPersonAdd } from "react-icons/io";
import { SiAirplayaudio } from "react-icons/si";
import { AiOutlineMessage } from "react-icons/ai";
import { MdAddComment, MdOutlineMoreVert } from "react-icons/md";

const content = (
  <div className={style.center2}>
    <p>salam</p>
    {/* <MyButton.Btn1>Biznes Aletleri</MyButton.Btn1>
    <MyButton.Btn1>Yeni Qrup</MyButton.Btn1>
    <MyButton.Btn1>Facebookda Reklam edin</MyButton.Btn1> */}
  </div>
);
const Index = () => {
  return (
    <Row width={60} className={style.Row}>
      <Col span={4}>
        <Image
          className={style.Img}
          width={50}
          height={50}
          preview={false}
          src="https://picsum.photos/seed/picsum/50/50"
        />
      </Col>
      <Col span={20} align="end" className={style.MyBut}>
        <MyButton icon={<TfiAnnouncement />} />
        <MyButton icon={<IoMdPersonAdd />} />
        <MyButton icon={<SiAirplayaudio />} />
        <MyButton icon={<AiOutlineMessage />} />
        <MyButton icon={<MdAddComment />} />
        <Popover
          content={content}
          placement="leftTop"
          trigger="click"
        >
          <MyButton icon={<MdOutlineMoreVert />} />
        </Popover>
      </Col>
    </Row>
  );
};

export default Index;
