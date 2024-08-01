import React from 'react';
import styles from './style.module.scss';
import whatsapp from '../../img/whatsapp.jpg'
import { Flex, Typography } from 'antd';
import {LockOutlined} from '@ant-design/icons';
const {Text} = Typography;


const imgStyle = {
  display: 'block',
  width: 450,
  height:250
};

const Index = () => (
  <Flex vertical justify='center' align='center' className={styles.Flex1} >

    <Flex justify="center" align='center' vertical className={styles.Flex2}>
      <img
        alt="avatar"
        src={whatsapp}
        style={imgStyle}
      />
        <Typography.Title type="secondary">
           WhatsApp Web
        </Typography.Title>

        <Text type="secondary">Telefonunuz onlayn olmadan mesaj göndərin və qəbul edin. <br/> Whatsapp-ı eyni zamanda 4-ə qədər əlaqələndirilmiş cihazda və 1 telefonda istifade edin </Text>
       
    </Flex>

     
      <Flex justify='center' align='flex-end' className={styles.Flex3}>
        <Text strong type='secondary'>
        <LockOutlined/> 
        Şəxsi mesajlarınız tam şifrələnib
        </Text>
      </Flex>

  </Flex>
  
);

export default Index