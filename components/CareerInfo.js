import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

export default function CustomizedSteppers() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
        <CardContent>
          <Stack direction="column" spacing={2} className="p-4">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">*职业情况</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="*职业情况"
                onChange={handleChange}
              >
                <MenuItem value={1}>在职</MenuItem>
                <MenuItem value={1}>自由职业</MenuItem>
                <MenuItem value={1}>退休</MenuItem>
                <MenuItem value={1}>学生</MenuItem>
                <MenuItem value={1}>无职业</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">*行业</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="*行业"
                onChange={handleChange}
              >
                <MenuItem value="会计">会计</MenuItem>
                <MenuItem value="行政/秘书">行政/秘书</MenuItem>
                <MenuItem value="农业">农业</MenuItem>
                <MenuItem value="公司服务">公司服务</MenuItem>
                <MenuItem value="创意/媒体">创意/媒体</MenuItem>
                <MenuItem value="国防/军事">国防/军事</MenuItem>
                <MenuItem value="教育">教育</MenuItem>
                <MenuItem value="紧急服务">紧急服务</MenuItem>
                <MenuItem value="工程">工程</MenuItem>
                <MenuItem value="金融服务">金融服务</MenuItem>
                <MenuItem value="政府/公务员">政府/公务员</MenuItem>
                <MenuItem value="法律">法律</MenuItem>
                <MenuItem value="出口/进口">出口/进口</MenuItem>
                <MenuItem value="餐饮/款待">餐饮/款待</MenuItem>
                <MenuItem value="制造">制造</MenuItem>
                <MenuItem value="市场营销/公关/广告">市场营销/公关/广告</MenuItem>
                <MenuItem value="非政府组织">非政府组织</MenuItem>
                <MenuItem value="非营利/慈善">非营利/慈善</MenuItem>
                <MenuItem value="制药">制药</MenuItem>
                <MenuItem value="贵金属/宝石">贵金属/宝石</MenuItem>
                <MenuItem value="物业/建筑/贸易">物业/建筑/贸易</MenuItem>
                <MenuItem value="零售">零售</MenuItem>
                <MenuItem value="社会关怀/服务/健康/医疗">社会关怀/服务/健康/医疗</MenuItem>
                <MenuItem value="技术">技术</MenuItem>
                <MenuItem value="电信">电信</MenuItem>
                <MenuItem value="运输">运输</MenuItem>
              </Select>
            </FormControl>

            <Button className='mt-4 bg-blue-900' sx={{ py: 1.5 }} variant="contained">下一步</Button>

          </Stack>
        </CardContent>
      </Card>
    </>
  );
}