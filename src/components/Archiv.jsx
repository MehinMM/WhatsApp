import React from "react";
import styled from "styled-components";
import style from "./style.module.scss";
import { MdOutlineArchive } from "react-icons/md";
import { Row, Col, Typography, Space } from "antd";
const Index = () => {
  return (
    <Row className={style.RowAr}>
      <Col span={2} className={style.center}>
        <MdOutlineArchive style={{ fontSize: "25px", color: "#08c" }} />
      </Col>

      <Col span={20} className={style.center}>
        <Typography.Title level={4} className={style.h4}>
          Archived
        </Typography.Title>
      </Col>

      <Col span={2} className={style.center}>
        <Typography.Title level={4} color="#08c">
       
          1
        </Typography.Title>
      </Col>
    </Row>
  );
};

export default Index;
