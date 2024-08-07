import React from 'react'
import styled from "styled-components";
import style from "./style.module.scss";
import {Row,Col,Image,Typography,TimePicker } from 'antd';
import dayjs from 'dayjs';
import {  DownOutlined} from '@ant-design/icons';
const format = 'HH:mm';

const Index = () => {
  return (
    <Row className={style.Row1}>

        <Col span={4} className={style.center} >
          <Image className={style.Image} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </Col>

        <Col span={17} className={style.center1}>
            <Row className={style.Row2}>
                <Col span={24} style={{backgroundColor:'red'}}>
                    <Typography.Text>
                        Narmin Mammadova
                    </Typography.Text>
                </Col>
                <Col span={24} style={{backgroundColor:'blue'}}>
                  <Typography.Text>
                        Salam, Bugun  necesen? Yaxwi ola bilmisenmi?
                    </Typography.Text>
                </Col>
            </Row> 
        </Col>
        <Col span={3} className={style.center}>
        <Row className={style.Row2}>
                <Col span={24} style={{backgroundColor:'green'}}>
                  <TimePicker className={style.Time} defaultValue={dayjs('12:08', format)} size='small'></TimePicker>
                </Col>
                <Col span={24} style={{backgroundColor:'pink'}}>
                  <DownOutlined />
                </Col>
            </Row> 
        </Col>
    </Row>
  )
}

export default Index
