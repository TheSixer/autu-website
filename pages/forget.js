import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// export const getStaticProps = async () => {
  
//   const res = await queryUserInfo();
//   // 也可以直接返回 404 页面
//   if (!res) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     // 在组件 props 中 可以拿到 data
//     props: res,
//   }
// }

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Autu | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />


      <div className="container px-32 pt-72 pb-60">
        <Paper elevation={3}>
          <Typography sx={{ p: 8 }} variant="subtitle1" align="center" gutterBottom>
            我们已经向您的邮箱发送了一封邮件，请点击邮箱中的链接地址前往重置您的密码...
          </Typography>
        </Paper>
      </div>

      <Footer />
    </Layout>
  </div>
);

export default HomePage;
