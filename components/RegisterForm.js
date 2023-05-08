import React, { useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from "next/link";
import { register } from '@/services';
import { useThrottleFn } from 'ahooks';
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassward] = useState('');
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const {
    run: handleSubmit,
  } = useThrottleFn(() => {
    register({
      email,
      password
    }).then(({code}) => {
      !code && setStatus(1);
    });
  });

  return (
    <section className="login-form w-screen h-screen bg-scroll bg-center bg-cover">
      <div className="container flex items-center justify-center h-full">
      <Card className="mx-auto w-96">
        <CardContent>
          <div className="login-form-header px-10">
            <div className="login-form-header-title mb-9">
              <h4 className="text-lg font-bold">注册</h4>
            </div>
            <img className="login-form-logo mx-auto" src="/assets/images/Autu-Securities@2x.png" />
          </div>

          {
            !status ? (
              <form className="bg-white p-6 sm:p-10 pb-0 rounded-md" noValidate autoComplete="off">
                <TextField
                  id="outlined-name"
                  value={email}
                  label="*输入您的电子邮箱"
                  margin="normal"
                  variant="outlined"
                  onChange={e => setEmail(e.target.value)}
                  fullWidth
                />

                <TextField
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
                <Button disabled={!email || !password} className="w-full mt-8 py-2 bg-blue-900 rounded-3xl" variant="contained" onClick={handleSubmit}>注 册</Button>
                <p className="text-sm text-gray-400 m-6 text-center">已经有账户了？<Link className="text-blue-600" href="/login">登录</Link></p>
              </form>
            ) : (
              <>
                <img className="mx-auto my-4" src="/assets/images/finish@2x.png" width={128} />
                <p className="text-base text-black text-center">注册成功，赶快去登录吧！</p>
                <Button className="w-full my-8 py-2 rounded-3xl" variant="outlined" onClick={() => router.push('/login')}>前往登录</Button>
              </>
            )
          }
        </CardContent>
      </Card>
      </div>
    </section>
  );
};

export default LoginForm;
