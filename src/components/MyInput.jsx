import React from "react";
import styled from "styled-components";
import style from "./style.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { IoFilter } from "react-icons/io5";
import { Input } from "antd";

const Index = styled(Input).attrs({
  placeholder: "Axtar",
  prefix: <SearchOutlined />,
  addonAfter: <IoFilter  />,
})`
  font-size: 20px;
  color: gray;
  margin-top: 10px;

`;

export default Index;


// const Index = styled(Input).attrs({
    
//     const [icon,setIcon]=useState(true);

//   placeholder: "Axtar",
//   prefix= {icon ? <SearchOutlined /> : <ArrowLeftOutlined />},
//   addonAfter: <IoFilter/>,
//   onfocus={()=>setIcon(!true)},
//   onblur{()=>setIcon(true)}
// })`
//   font-size: 20px;
//   color: gray;
//   margin-top: 10px;
// `;

// export default Index;
