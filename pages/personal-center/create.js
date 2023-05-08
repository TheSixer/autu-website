import { useState } from 'react';
import Link from "next/link";
import Layout from "@/components/PersonalCenterLayout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { useThrottleFn } from 'ahooks';
import { createAccount } from '@/services';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [leverageInCents, setLeverageInCents] = useState(100);
  const [depositCurrency, setDepositCurrency] = useState('USD');
  
  const {
    run: handleSubmit,
  } = useThrottleFn(() => {
    setLoading(true);
    createAccount({
      accountType: 'HEDGED',
      leverageInCents,
      depositCurrency
    }).then(({code}) => {
      setLoading(false);
    });
  });

  return (
    <Layout>
  
      <div className="container p-4">
        <div className="p-2 mb-8 sm:mb-20">
          <Link href="/personal-center" className="inline-flex items-center text-sm">
            <img className="w-4 h-4 rotate-180 mr-1" src="/assets/images/arrow.png" />
            <span>返回</span>
          </Link>
        </div>
        <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <h4 className='text-black font-semibold'>转账</h4>
              <p className='mt-2 mb-4 text-sm text-gray-500'>在您的钱包和交易账户之间转账</p>
              <FormControl fullWidth>
                <TextField
                  label="平台"
                  id="outlined-start-adornment"
                  defaultValue="cTrader"
                  InputProps={{
                    readOnly: true,
                    startAdornment: <InputAdornment sx={{ width: 150 }} position="start">平台</InputAdornment>,
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="账号类型"
                  id="outlined-start-adornment"
                  defaultValue="Hedging"
                  InputProps={{
                    readOnly: true,
                    startAdornment: <InputAdornment sx={{ width: 150 }} position="start">账号类型</InputAdornment>,
                  }}
                />
              </FormControl>
              <FormControl sx={{ mt: 2 }} fullWidth>
                <InputLabel id="demo-simple-select-label">杠杆</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={leverageInCents}
                  label="杠杆"
                  onChange={(e) => setLeverageInCents(e.target.value)}
                >
                  <MenuItem value={100}>1 : 1</MenuItem>
                  <MenuItem value={150}>1 : 1.5</MenuItem>
                  <MenuItem value={10000 }>1 : 100</MenuItem>
                  {/* <MenuItem value={1}>1:1</MenuItem>
                  <MenuItem value={2}>1:2</MenuItem>
                  <MenuItem value={3}>1:3</MenuItem>
                  <MenuItem value={5}>1:5</MenuItem>
                  <MenuItem value={10}>1:10</MenuItem>
                  <MenuItem value={15}>1:15</MenuItem>
                  <MenuItem value={20}>1:20</MenuItem>
                  <MenuItem value={30}>1:30</MenuItem>
                  <MenuItem value={33}>1:33</MenuItem>
                  <MenuItem value={50}>1:50</MenuItem>
                  <MenuItem value={66}>1:66</MenuItem>
                  <MenuItem value={75}>1:75</MenuItem>
                  <MenuItem value={100}>1:100</MenuItem>
                  <MenuItem value={125}>1:125</MenuItem>
                  <MenuItem value={150}>1:150</MenuItem>
                  <MenuItem value={175}>1:175</MenuItem>
                  <MenuItem value={200}>1:200</MenuItem>
                  <MenuItem value={300}>1:300</MenuItem>
                  <MenuItem value={400}>1:400</MenuItem>
                  <MenuItem value={500}>1:500</MenuItem> */}
                </Select>
              </FormControl>
              <FormControl sx={{ mt: 2 }} fullWidth>
                <InputLabel id="demo-simple-select-label">基础货币</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={depositCurrency}
                  label="基础货币"
                  onChange={(e) => setDepositCurrency(e.target.value)}
                >
                  <MenuItem value={'USD'}>USD</MenuItem>
                  <MenuItem value={'RMB'}>RMB</MenuItem>
                  {/* <MenuItem value={'AUD'}>AUD</MenuItem>
                  <MenuItem value={'CHF'}>CHF</MenuItem>
                  <MenuItem value={'EUR'}>EUR</MenuItem>
                  <MenuItem value={'GBP'}>GBP</MenuItem>
                  <MenuItem value={'JPY'}>JPY</MenuItem>
                  <MenuItem value={'PLN'}>PLN</MenuItem>
                  <MenuItem value={'ZAR'}>ZAR</MenuItem> */}
                </Select>
              </FormControl>

              <LoadingButton
                className={`mt-12 ${ !loading ? 'bg-blue-900' : ''}`}
                loading={loading}
                disabled={!leverageInCents || !leverageInCents}
                sx={{ py: 1.5, borderRadius: 6 }}
                variant="contained"
                onClick={handleSubmit}
                fullWidth>
                创建
              </LoadingButton>

            </Stack>
          </CardContent>
        </Card>
      </div>
  
    </Layout>
  );
}

export default HomePage;
