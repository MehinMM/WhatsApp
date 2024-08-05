import React from 'react';
import { Layout,Row,Col } from 'antd';
import styles from './style.module.scss'
import { Myprofile,MyInput,Archiv } from '../components';

const Index = () => {
  return (
    <Layout.Sider className={styles.menu} theme='light' width={400}>
      <Myprofile/>
      <MyInput/>
      <Archiv/>
    
    </Layout.Sider>
  )
}

export default Index
