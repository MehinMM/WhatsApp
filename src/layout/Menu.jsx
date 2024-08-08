import React from "react";
import { Layout } from "antd";
import styles from "./style.module.scss";
import { Myprofile, MyInput, Archiv, User } from "../components";
import { doctor, xanim1, xanim2, usaq, oglan, aile } from "../assets";
import users from "../@json/users.json";
const sekiller = [
  { doctor },
  { xanim1 },
  { xanim2 },
  { usaq },
  { oglan },
  { aile },
];
const Index = () => {
  return (
    <Layout.Sider theme="light" width={400} className={styles.Sider}>
     
      <Myprofile />
      <MyInput />
      <Archiv />
      {users.map((value, index) => (
        // <User key={index} sekil={sekiller.map((value,index)=>(value))} mesaj={value.mesaj} ad={value.ad} time={value.time}/>
        <User
          key={index}
          sekil={value.sekil}
          mesaj={value.mesaj}
          ad={value.ad}
          time={value.time}
        />
      ))}
      {/* <User sekil={doctor} mesaj='Sizi 1ci gun novbeye yazdim' ad='Ata Ozkaya'/>
      <User  sekil={xanim1} mesaj='Bazar gunu goruserik' ad='Sevil'/>
      <User sekil={oglan} mesaj='Ingilis dili dersimiz basladi' ad='English Teacher'/>
      <User sekil={xanim2} mesaj='Paltarin rengi cox xowuma geldi' ad='Esma Huseynova'/>
      <User sekil={usaq} mesaj='muellime, ne vaxt geleceksiz?' ad='Tural Baxiwov'/>
      <User sekil={aile} mesaj='Men catmiram?' ad='Bacim'/> */}
    </Layout.Sider>
  );
};

export default Index;
