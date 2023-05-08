import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useThrottleFn } from 'ahooks';
import { saveAddressInfo } from '@/services';

export default function CustomizedSteppers({ next }) {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const {
    run: handleNext,
  } = useThrottleFn(async () => {
    setLoading(true);
    const res = await saveAddressInfo({
      city,
      postcode,
      detailAddress,
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
              <TextField id="outlined-basic" label="*街道、建筑、公寓等" value={detailAddress} variant="outlined" onChange={e => setDetailAddress(e.target.value)} />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="*邮编" variant="outlined" value={postcode} onChange={e => setPostcode(e.target.value)} />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="*城市" variant="outlined" value={city} onChange={e => setCity(e.target.value)} />
            </FormControl>

            <Button
              className='mt-4 bg-blue-900'
              sx={{ py: 1.5 }}
              variant="contained"
              disabled={!detailAddress || !postcode || !city}
              onClick={handleNext}>
              下一步
            </Button>

          </Stack>
        </CardContent>
      </Card>
    </>
  );
}