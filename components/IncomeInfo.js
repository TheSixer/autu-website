import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useThrottleFn } from 'ahooks';
import { saveFinancialInfo } from '@/services';
import { useRouter } from "next/router";
import LoadingButton from '@mui/lab/LoadingButton';

export default function CustomizedSteppers() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [annualIncome, setAnnualIncome] = useState('');
  const [netWorth, setNetWorth] = useState('');
  const [sourceOfWealth, setSourceOfWealth] = useState('');
  const [expectNext12Month, setExpectNext12Month] = useState('');
  const router = useRouter();

  const {
    run: handleSubmit,
  } = useThrottleFn(async () => {
    setLoading(true);
    const { code } = await saveFinancialInfo({
      annualIncome,
      netWorth,
      sourceOfWealth,
      expectNext12Month,
    });
    setLoading(false);
    !code && setOpen(true);
  });

  return (
    <>
      <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
        <CardContent>
          <Stack direction="column" spacing={2} className="p-4">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">*全年收入</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={annualIncome}
                label="*全年收入"
                onChange={e => setAnnualIncome(e.target.value)}
              >
                <MenuItem value={0}>&gt; $1,000,000</MenuItem>
                <MenuItem value={1}>$500,000 - $1,000,000</MenuItem>
                <MenuItem value={2}>$250,000 - $500,000</MenuItem>
                <MenuItem value={3}>$100,000 - $250,000</MenuItem>
                <MenuItem value={4}>$50,000 - $100,000</MenuItem>
                <MenuItem value={5}>$0 - $50,000</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">*估计净资产（不包括您的主要住所）</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={netWorth}
                label="*估计净资产（不包括您的主要住所）"
                onChange={e => setNetWorth(e.target.value)}
              >
                <MenuItem value={0}>&gt; $1,000,000</MenuItem>
                <MenuItem value={1}>$500,000 - $1,000,000</MenuItem>
                <MenuItem value={2}>$250,000 - $500,000</MenuItem>
                <MenuItem value={3}>$100,000 - $250,000</MenuItem>
                <MenuItem value={4}>$50,000 - $100,000</MenuItem>
                <MenuItem value={5}>$0 - $50,000</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="*收入来源" onChange={e => setSourceOfWealth(e.target.value)} variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">*您预计在未来 12 个月内将获得多少资金</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={expectNext12Month}
                label="*您预计在未来 12 个月内将获得多少资金"
                onChange={e => setExpectNext12Month(e.target.value)}
              >
                <MenuItem value={0}>&lt; $10,000</MenuItem>
                <MenuItem value={1}>$10,000 - $50,000</MenuItem>
                <MenuItem value={2}>$50,000 - $100,000</MenuItem>
                <MenuItem value={3}>$100,000 - $300,000</MenuItem>
                <MenuItem value={4}>$300,000 - $1,000,000</MenuItem>
                <MenuItem value={5}>&gt; 1,000,000</MenuItem>
              </Select>
            </FormControl>

            <LoadingButton
              className='mt-4 bg-blue-900'
              sx={{ py: 1.5 }}
              variant="contained"
              loading={loading}
              disabled={!annualIncome || !netWorth || !sourceOfWealth || !expectNext12Month}
              onClick={handleSubmit}
            >
              完成
            </LoadingButton>

          </Stack>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableEscapeKeyDown
      >
        <DialogTitle id="alert-dialog-title">
          {"激活账户"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            恭喜您！已完成基本信息填写，需要上传本人手持身份证照并完成审核后才能激活账户，是否前往上传？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => router.push('/personal-center')}>暂不上传</Button>
          <Button onClick={() => router.push('/personal-center/verify')} autoFocus>
            立即前往
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}