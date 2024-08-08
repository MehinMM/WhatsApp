import React from 'react';
import { Layout } from 'antd';
import style from './style.module.scss';
import { User,ChatUser } from '../../components';



const Index = () => {
  return (
   <Layout>
    <Layout.Header className={style.Header}>
      <ChatUser sekil='https://picsum.photos/seed/picsum/200/300' ad='Bacim' statusUser='Online'/>
    </Layout.Header>

    <Layout.Content className={style.Content}>

      <div className={style.Cover}>
        
      </div>

    </Layout.Content>
    <Layout.Footer className={style.Footer}>Footer</Layout.Footer>

   </Layout>
  )
}

export default Index
