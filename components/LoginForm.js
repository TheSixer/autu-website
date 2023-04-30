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

const LoginForm = () => {
  const labelRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

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
          <form className="bg-white p-10 rounded-md" noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="*输入您的电子邮箱"
              margin="normal"
              variant="outlined"
              fullWidth
            />

            <TextField
              error="error"
              className="mb-0"
              type={showPassword ? 'text' : 'password'}
              id="outlined-error"
              label="*输入您的密码"
              helperText="error"
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
              fullWidth
            />
            <div className="text-right">
              <Link className="text-sm text-blue-600" href="/tools">忘记密码？</Link>
            </div>
            <Button className="w-full mt-2 py-2 bg-blue-900 rounded-3xl" variant="contained">登 录</Button>
          </form>
        </CardContent>
      </Card>
      </div>
    </section>
  );
};

export default LoginForm;
