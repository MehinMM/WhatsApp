import React from 'react'
import styled from "styled-components";
import style from './style.module.scss';
import {Row,Col,Image} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import { Button } from "../components";
import {Button as Btn} from 'antd';
import { TfiAnnouncement } from "react-icons/tfi";
import { IoMdPersonAdd } from "react-icons/io";
import { SiAirplayaudio } from "react-icons/si";
import { AiOutlineMessage } from "react-icons/ai";
import { MdAddComment, MdOutlineMoreVert } from "react-icons/md";



const Index = () => {
  return (
    <Row width={60}  className={style.Row}>
      <Col span={4}>
        <Image className={style.Img} width={50} height={50}
          src='https://picsum.photos/seed/picsum/50/50'
        />
      
      </Col>
      <Col span={20} align='end'>
     
        <Button icon={<TfiAnnouncement />}  />
        <Button icon={<IoMdPersonAdd />}  />
        <Button icon={< SiAirplayaudio  />}  />
        <Button icon={<  AiOutlineMessage  />}  />
        <Button icon={<  MdAddComment   />}  />
        <Button icon={<  MdOutlineMoreVert  />}  />

    
      </Col>
    </Row>
  )
}

export default Index



