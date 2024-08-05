import styled from "styled-components";
import style from './style.module.scss';
import { Button } from "antd";

const Index = styled(Button).attrs({
    type:"text",
     shape:"circle" 
})`

font-size:20px;
color:gray;
margin-left:10px

`

export default Index