import Layout from "@/components/PersonalCenterLayout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Notifications from '@mui/icons-material/Notifications';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/router';
import Link from "next/link";

const TransferIcon = () => <img src="/assets/images/personal/transfer.png" />;
const RechargeIcon = () => <img src="/assets/images/personal/recharge.png" />;
const WithdrawalIcon = () => <img src="/assets/images/personal/withdrawal.png" />;

const HomePage = () => {
  const router = useRouter();

  return (
    <Layout>
  
      <div className="container">
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert
          iconMapping={{
            success: <Notifications fontSize="inherit" />,
          }}
        >
          This is a success alert — check it out!
        </Alert>
        <Card className="mt-4" variant="outlined">
          <CardContent>
            <div className="flex flex-col md:flex-row">
              <div className="flex-none relative">
                <img src="/assets/images/personal/card@2x.png" width={342} />
                <p className="absolute left-4 bottom-4 text-lg font-semibold">User Name</p>
              </div>
              <div className="flex flex-col justify-between flex-1 p-4 md:px-10 md:py-3.5">
                <div className="mb-6 md:mb-0">
                  <p className="text-base text-gray-600">你的钱包</p>
                  <p className="text-2xl font-semibold">196.00 USD</p>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <p className="text-base text-gray-600 font-normal">昵称: <span className="ml-4 text-gray-900">昵称</span></p>
                  <p className="text-base text-gray-600 font-normal">cTID账号: <span className="ml-4 text-gray-900">123412341234</span></p>
                </div>
              </div>
            </div>
            <Stack className="flex-col gap-4 sm:flex-row mt-6" spacing={2} direction="row">
              <Button className="sm:w-2/6 py-2 rounded-3xl" variant="outlined" size="large" startIcon={<TransferIcon />} onClick={() => router.push('/personal-center/transfer')}>
                充值
              </Button>
              <Button className="ml-0 sm:w-2/6 py-2 rounded-3xl" variant="outlined" size="large" startIcon={<RechargeIcon />} onClick={() => router.push('/personal-center/transfer')}>
                转账
              </Button>
              <Button className="ml-0 sm:w-2/6 py-2 rounded-3xl" variant="outlined" size="large" startIcon={<WithdrawalIcon />} onClick={() => router.push('/personal-center/transfer')}>
                提现
              </Button>
            </Stack>
          </CardContent>
        </Card>
        <Card className="mt-4" variant="outlined">
          <CardContent className="p-2 text-center">
            <Link href="/" className="inline-flex items-center mx-auto text-sm">
              <span>交易记录</span>
              <img className="w-4 h-4" src="/assets/images/arrow.png" />
            </Link>
          </CardContent>
        </Card>
      </div>
  
    </Layout>
  );
};

export default HomePage;
