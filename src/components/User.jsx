import React from "react";
import styled from "styled-components";
import style from "./style.module.scss";
import { Row, Col, Image, Typography, TimePicker, Space } from "antd";
import dayjs from "dayjs";
import { DownOutlined } from "@ant-design/icons";
const format = "HH:mm";

const Index = ({ sekil, mesaj, ad }) => {
  return (
    <Row justify="center" className={style.Row1}>
      <Col span={4} className={style.center}>
        <Image preview="false" className={style.Image} src={sekil} width={60} height={60} />
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
          <Col span={24}>
            <TimePicker
              className={style.Time}
              defaultValue={dayjs("12:08", format)}
              size="small"
            ></TimePicker>
          </Col>
          <Col span={24}>
            <DownOutlined />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Index;
