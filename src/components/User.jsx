import React, { useState } from "react";
import styled from "styled-components";
import style from "./style.module.scss";
import { Row, Col, Image, Typography, Space,Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { error } from "../assets";

const Index = ({ sekil, mesaj, ad, time }) => {

  const [status, setStatus] = useState(false);
  const [src, setSrc] = useState(sekil);

  const Show = () => setStatus(true);
  const Hidden = () => setStatus(false);

  const onError = () => {
    setSrc(error);
  };

  return (
    <Row
      justify="center"
      className={style.Row1}
      onMouseOver={Show}
      onMouseOut={Hidden}
    >
      <Col span={4} className={style.center}>
        <Image
          preview={false}
          className={style.Image}
          src={src}
          width={60}
          height={60}
          onError={onError}
        />
      </Col>

      <Col span={17} className={style.center1}>
        <Row className={style.Row2} style={{ marginLeft: "5px" }}>
          <Col span={24} align="start">
            <Typography.Text>{ad}</Typography.Text>
          </Col>
          <Col span={24} align="start">
            <Typography.Text>{mesaj}</Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={3} className={style.center}>
        <Row className={style.Row2}>
          <Col span={24}>{time}</Col>
          <Col span={24}>
            {status ? (
              <Button type="text" icon={<DownOutlined />} style={{border:'0px',backgroundColor:'transparent'}}/>
            ) : (
              <Button style={{ color: "transparent" }} type="link" />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Index;
