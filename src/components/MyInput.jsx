import React from 'react'
import styled from "styled-components";
import style from './style.module.scss';
import {SearchOutlined} from '@ant-design/icons';
import {Input} from 'antd'

const Index = styled(Input).attrs({
    placeholder:"Axtar",
    prefix:< SearchOutlined/>,
    addonAfter:< SearchOutlined/>,


     
})`

font-size:20px;
color:gray;
margin-top:10px;

`

export default Index