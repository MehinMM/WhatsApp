import styled from "styled-components";
import style from "./style.module.scss";
import { Button } from "antd";

const Index = styled(Button).attrs({
  type: "text",
  shape: "circle",
})`
  font-size: 20px;
  color: gray;
  margin-left: 10px;
`;

Index.Btn1 = styled(Button).attrs({
  block: "true",
})`
  border: 0;
  padding: 5px;
  background-color: #f0f2f5;
  color: gray;
  margin-top: 4px;
`;

export default Index;
