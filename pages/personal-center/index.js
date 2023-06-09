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
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import { useRouter } from 'next/router';
import Link from "next/link";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TransferIcon = ({disabled}) => <img style={{filter: disabled ? 'grayscale(100%)' : ''}} src="/assets/images/personal/transfer.png" />;
const RechargeIcon = ({disabled}) => <img style={{filter: disabled ? 'grayscale(100%)' : ''}} src="/assets/images/personal/recharge.png" />;
const WithdrawalIcon = ({disabled}) => <img style={{filter: disabled ? 'grayscale(100%)' : ''}} src="/assets/images/personal/withdrawal.png" />;

export const getServerSideProps = async (context) => {
  
  const session = await getServerSession(context.req, context.res, authOptions)
  const res = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/user/info', {
    headers: { token: session.user.accessToken }
  });
  const { code, data } = await res.json();
  const response = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/wallet/info', {
    headers: { token: session.user.accessToken }
  });
  const { data: wallet } = await response.json();

  if (code || !data.completeBaseInfo) {
    return {
      redirect: {
        permanent: false,
        destination: code ? '/personal-center' : '/personal-center/improve',
      }
    }
  }

  return {
    // 在组件 props 中 可以拿到 data
    props: {...data, ...wallet},
  }
}

const HomePage = ({ balance, userName, ctid, completeVerify }) => {
  const router = useRouter();
  const [open, setOpen] = useState(!completeVerify);

  return (
    <Layout>
  
      <div className="container py-4">
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
            您还未完成身份认证，账户信息暂不可用，<a className='text-blue-600 underline' href='/personal-center/verify'>立即前往</a> 完成认证！
          </Alert>
        </Collapse>
        <Card className="mt-4" variant="outlined">
          <CardContent>
            <div className="flex flex-col md:flex-row">
              <div className="flex-none relative">
                <img src="/assets/images/personal/card@2x.png" width={342} />
                <p className="absolute left-4 bottom-4 text-lg font-semibold">{ userName }</p>
              </div>
              <div className="flex flex-col justify-between flex-1 p-4 md:px-10 md:py-3.5">
                <div className="mb-6 md:mb-0">
                  <p className="text-base text-gray-600">你的钱包</p>
                  <p className="text-2xl font-semibold">{ balance } USD</p>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <p className="text-base text-gray-600 font-normal">昵称: <span className="ml-4 text-gray-900">{ userName }</span></p>
                  <p className="text-base text-gray-600 font-normal">cTID账号: <span className="ml-4 text-gray-900">{ ctid || '-' }</span></p>
                </div>
              </div>
            </div>
            <Stack className="flex-col gap-4 sm:flex-row mt-6" spacing={2} direction="row">
              <Button className="sm:w-2/6 py-2 rounded-3xl" disabled={!completeVerify} variant="outlined" size="large" startIcon={<TransferIcon disabled={!completeVerify} />} onClick={() => router.push('/personal-center/transfer')}>
                充值
              </Button>
              <Button className="ml-0 sm:w-2/6 py-2 rounded-3xl" disabled={!completeVerify} variant="outlined" size="large" startIcon={<RechargeIcon disabled={!completeVerify} />} onClick={() => router.push('/personal-center/transfer')}>
                转账
              </Button>
              <Button className="ml-0 sm:w-2/6 py-2 rounded-3xl" disabled={!completeVerify} variant="outlined" size="large" startIcon={<WithdrawalIcon disabled={!completeVerify} />} onClick={() => router.push('/personal-center/transfer')}>
                提现
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Accordion sx={{ mt: 4 }}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Stack sx={{ mx: 'auto' }} direction="row" alignItems="center" justifyContent="center" spacing={2}>
              <span className='text-base'>交易记录</span>
              <img className="w-4 h-4" src="/assets/images/arrow.png" />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <TradingRecords />
          </AccordionDetails>
        </Accordion>
      </div>
  
    </Layout>
  );
};

export default HomePage;
