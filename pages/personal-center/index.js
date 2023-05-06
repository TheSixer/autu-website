import { useState } from 'react';
import Layout from "@/components/PersonalCenterLayout";
import TradingRecords from "@/components/TradingRecords";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Notifications from '@mui/icons-material/Notifications';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { queryUserInfo } from '@/services';
import Link from "next/link";

const TransferIcon = () => <img src="/assets/images/personal/transfer.png" />;
const RechargeIcon = () => <img src="/assets/images/personal/recharge.png" />;
const WithdrawalIcon = () => <img src="/assets/images/personal/withdrawal.png" />;

// export const getServerSideProps = async () => {
  
//   const res = await queryUserInfo();
//   console.log(res);
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

const HomePage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <Layout>
  
      <div className="container pb-4">
        <Collapse in={open}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
        <Collapse in={open}>
          <Alert
            iconMapping={{
              success: <Notifications fontSize="inherit" />,
            }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
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

            <TradingRecords />
          </CardContent>
        </Card>
      </div>
  
    </Layout>
  );
};

export default HomePage;
