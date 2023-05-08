import Layout from "@/components/PersonalCenterLayout";
import ApprovalRecords from "@/components/ApprovalRecords";

const HomePage = () => {

  return (
    <Layout>
  
      <div className="container p-8">
        <div className="mb-10">
          <h4 className="text-black font-semibold">审批记录</h4>
        </div>

        <ApprovalRecords />
      </div>
  
    </Layout>
  );
};

export default HomePage;
