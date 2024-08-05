import React from 'react'
import styled from "styled-components";
import style from './style.module.scss';
import {SearchOutlined} from '@ant-design/icons';
import {Input} from 'antd';


// const Index = () => {
//   return (
//     <Input placeholder="Search" prefix={< SearchOutlined/>} addonAfter={< SearchOutlined/>} className={style.Input}/>
//   )
// }

// export default Index

const Index = styled(Input).attrs({
    placeholder:"Axtar",
    prefix:< SearchOutlined/>,
    addonAfter:< SearchOutlined/>

     
})`

font-size:20px;
color:gray;
margin-top:10px;
background-color:red;
`

export default Index