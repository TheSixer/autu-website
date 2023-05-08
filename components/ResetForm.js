import React, { useEffect, useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useThrottleFn } from 'ahooks';
import { reestPassword } from '@/services';
import { useSearchParams  } from 'next/navigation';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassward] = useState('');
  const [password1, setPassward1] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const {
    run: handleSubmit,
  } = useThrottleFn(async () => {
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    if (!email || !token) {
      toast.warn('请按照正确的方式重置您的密码！');
      return;
    }
    const { code } = await reestPassword({
      email,
      password,
      token
    });
    if (!code) {
      setPassward('');
      setPassward1('');
      toast.success('密码已重置，请重新登录！');
    }
  });

  return (
    <section className="login-form w-screen h-screen bg-scroll bg-center bg-cover">
      <div className="container flex items-center justify-center h-full">
        <Card className="mx-auto w-96">
          <CardContent>
            <div className="login-form-header px-10">
              <div className="login-form-header-title mb-9">
                <h4 className="text-lg font-bold">重置密码</h4>
              </div>
              <img className="login-form-logo mx-auto" src="/assets/images/Autu-Securities@2x.png" />
            </div>
            <form className="bg-white p-6 sm:p-10 pb-0 rounded-md" noValidate autoComplete="off">

              <TextField
                name="passward"
                className="mb-0"
                type={showPassword ? 'text' : 'password'}
                id="outlined-error"
                label="*输入您的密码"
                margin="normal"
                variant="outlined"
                value={password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={e => setPassward(e.target.value)}
                fullWidth
              />

              <TextField
                error={!!(password && password1 && password !== password1)}
                name="passward"
                className="mb-0"
                type={showPassword ? 'text' : 'password'}
                id="outlined-error"
                value={password1}
                label="*再次输入您的密码"
                helperText={ password && password1 && password !== password1 ? '两次输入的密码不一致' : ''}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={e => setPassward1(e.target.value)}
                fullWidth
              />

              <Button disabled={!password || !password1 || password !== password1} onClick={handleSubmit} className="w-full mt-4 py-2 bg-blue-900 rounded-3xl" variant="contained">确认</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoginForm;
