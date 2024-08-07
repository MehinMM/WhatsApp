import React from 'react';
import { Layout} from 'antd';
import styles from './style.module.scss'
import { Myprofile,MyInput,Archiv,User } from '../components';

const Index = () => {
  return (
    <Layout.Sider theme='light' width={400}>
      <Myprofile/>
      <MyInput/>
      <Archiv/>
      <User/>
    </Layout.Sider>
  )
}

export default Index
