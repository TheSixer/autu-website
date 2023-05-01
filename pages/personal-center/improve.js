import Layout from "@/components/PersonalImproveLayout";
import ImproveSteps from "@/components/ImproveSteps";

const HomePage = () => (
  <Layout>
    <div className="container">
      
      <div className="py-4">
        <div className="login-form-header-title mb-9">
          <h4 className="text-lg text-black font-bold">完善个人信息</h4>
        </div>
      </div>

      <ImproveSteps />
    </div>
  </Layout>
);

export default HomePage;
