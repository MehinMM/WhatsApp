// import Footer from './Footer';
// import Header from './Header';
import Container from './Container';
import Menu from './Menu';
import { Layout } from 'antd';
import styles from './style.module.scss';



const Index = () => {
  return (
    <>
     
        <Layout className={styles.Layout}>

          <Menu/>
          <Container/>

        </Layout>
    
    </>
  )
}

export default Index
