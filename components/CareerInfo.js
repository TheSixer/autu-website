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
import { useThrottleFn } from 'ahooks';
import { saveWorkInfo } from '@/services';

export default function CustomizedSteppers({ next }) {
  const [loading, setLoading] = useState(false);
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [industry, setIndustry] = useState('');
  const [otherIndustry, setOtherIndustry] = useState('');
  
  const {
    run: handleNext,
  } = useThrottleFn(async () => {
    setLoading(true);
    const res = await saveWorkInfo({
      employmentStatus,
      industry,
      otherIndustry,
    });
    setLoading(false);

    next();
  });

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
                value={employmentStatus}
                label="*职业情况"
                onChange={e => setEmploymentStatus(e.target.value)}
              >
                <MenuItem value={'employ'}>在职</MenuItem>
                <MenuItem value={'self-employed'}>自由职业</MenuItem>
                <MenuItem value={'retired'}>退休</MenuItem>
                <MenuItem value={'student'}>学生</MenuItem>
                <MenuItem value={'unemploy'}>无职业</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">*行业</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={industry}
                label="*行业"
                onChange={e => setIndustry(e.target.value)}
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
                <MenuItem value="0">其他</MenuItem>
              </Select>
            </FormControl>
            {
              industry == '0' ? (
                <FormControl fullWidth>
                  <TextField id="outlined-basic" label="*其他" variant="outlined" onChange={e => setOtherIndustry(e.target.value)} />
                </FormControl>
              ) : null
            }

            <Button
              className='mt-4 bg-blue-900'
              sx={{ py: 1.5 }}
              variant="contained"
              disabled={!employmentStatus || (industry == '0' && !otherIndustry) || (industry != '0' && !industry)}
              onClick={handleNext}
            >
              下一步
            </Button>


          </Stack>
        </CardContent>
      </Card>
    </>
  );
}