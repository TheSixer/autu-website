import React, { useEffect, useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from "next/link";
import { useThrottleFn } from 'ahooks';

const LoginForm = ({ token }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassward] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const {
    run: handleSubmit,
  } = useThrottleFn(() => {
    fetch('/api/auth/callback/credentials', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName,
        password,
        csrfToken: token
      })
    }).then(res => {
      window.location.href=res.url;
    });
  });

  return (
    <section className="login-form w-screen h-screen bg-scroll bg-center bg-cover">
      <div className="container flex items-center justify-center h-full">
        <Card className="mx-auto w-96">
          <CardContent>
            <div className="login-form-header px-10">
              <div className="login-form-header-title mb-9">
                <h4 className="text-lg font-bold">登录</h4>
              </div>
              <img className="login-form-logo mx-auto" src="/assets/images/Autu-Securities@2x.png" />
            </div>
            <form className="bg-white p-6 sm:p-10 pb-0 rounded-md" noValidate autoComplete="off">
              <input name="csrfToken" type="hidden" defaultValue={token} />
              <TextField
                name="email"
                id="outlined-name"
                value={userName}
                label="*输入您的电子邮箱"
                margin="normal"
                variant="outlined"
                onChange={e => setUserName(e.target.value)}
                autoFocus
                fullWidth
              />

              <TextField
                name="passward"
                className="mb-0"
                value={password}
                type={showPassword ? 'text' : 'password'}
                id="outlined-error"
                label="*输入您的密码"
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
                onChange={e => setPassward(e.target.value)}
                fullWidth
              />
              <div className="text-right">
                <Link className="text-sm text-blue-600" href="/forget">忘记密码？</Link>
              </div>
              <Button disabled={!userName || !password} onClick={handleSubmit} className="w-full mt-4 py-2 bg-blue-900 rounded-3xl" variant="contained">登录</Button>
              <p className="text-sm text-blue-600 m-6 text-center"><Link href="/register">注册一个新账户</Link></p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoginForm;
