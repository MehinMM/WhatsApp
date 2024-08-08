import React, { useState } from "react";
import styled from "styled-components";
import style from "./style.module.scss";
import { Row, Col, Image, Typography, Space, Button } from "antd";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import { error } from "../assets";

const Index = ({ sekil, statusUser, ad }) => {
  const [src, setSrc] = useState(sekil);

  const onError = () => {
    setSrc(error);
  };

  return (
    <Row className={style.Row3}>
      <Col
        span={20}
        className={style.center} style={{ lineHeight: '0',justifyContent:'flex-start'}}
        
      >
        <Image
          preview={false}
          className={style.Image}
          src={src}
          width={50}
          height={50}
          onError={onError}
          style={{marginLeft:'10px'}}
        />

      <Space direction="vertical">
        <Typography.Title level={3}>{ad}</Typography.Title>

        <Typography.Title level={5}>{statusUser}</Typography.Title>
        </Space>
      </Col>

      {/* <Col
        span={15}
        className={style.center1}
         <Typography.Title level={3}>{ad}</Typography.Title>

        <Typography.Title level={5}>{statusUser}</Typography.Title>
      >
      </Col> */}

      <Col
        span={4}
        className={style.center}
        style={{ paddingRight: "10px", justifyContent: "flex-end" }}
      >
        <Button
          className={style.bgColor}
          type="text"
          shape="circle"
          icon={<SearchOutlined />}
          size="large"
        />
        <Button
          className={style.bgColor}
          type="text"
          shape="circle"
          icon={<MoreOutlined />}
          size="large"
      
        />
      </Col>
    </Row>
  );
};

export default Index;
