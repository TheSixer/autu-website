import Layout from "@/components/PersonalCenterLayout";
import AccountList from "@/components/AccountList";
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  return (
    <Layout>
  
      <div className="container p-8">
        <div className="mb-10">
          <h4 className="text-black font-semibold">账户管理</h4>
        </div>

        <AccountList />

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Button
            sx={{ width: 288, py: 1.5, borderRadius: 6 }}
            variant="outlined"
            size="large"
            startIcon={<Add />}
            onClick={() => router.push('/personal-center/create')}
          >
            创建账户
          </Button>
        </Stack>
      </div>
  
    </Layout>
  );
};

export default HomePage;
