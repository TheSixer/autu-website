import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function CustomizedSteppers() {

  return (
    <>
      <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
        <CardContent>
          <Stack direction="column" spacing={2} className="p-4">
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="*街道、建筑、公寓等" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="*邮编" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="*城市" variant="outlined" />
            </FormControl>

            <Button className='mt-4 bg-blue-900' sx={{ py: 1.5 }} variant="contained">下一步</Button>

          </Stack>
        </CardContent>
      </Card>
    </>
  );
}