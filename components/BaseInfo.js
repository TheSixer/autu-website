import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import countryTelData  from 'country-telephone-data';
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

  console.log(countryTelData);

  return (
    <>
      <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
        <CardContent>
          <Stack direction="column" spacing={2} className="p-4">
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="*名字" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="*名字" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="出生年月" disableFuture />
              </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">*国籍</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="*国籍"
                onChange={handleChange}
              >
                {
                  countryTelData.allCountries.map(({name, iso2}) => <MenuItem value={iso2} key={iso2}>{name}</MenuItem>)
                }
              </Select>
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <Paper
                component="form"
                variant="outlined"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  className='border-none'
                  sx={{ width: 92, borderColor: 'rgba(0,0,0,0)' }}
                  labelId="tel"
                  id="tel"
                  // value={age}
                  defaultValue={'cn'}
                  onChange={handleChange}
                >
                  {
                    countryTelData.allCountries.map(({dialCode, iso2}) => <MenuItem value={iso2} key={iso2}>+{dialCode}</MenuItem>)
                  }
                </Select>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Google Maps"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
              </Paper>
            </FormControl>

            <Button className='mt-4 bg-blue-900' sx={{ py: 1.5 }} variant="contained">下一步</Button>

          </Stack>
        </CardContent>
      </Card>
    </>
  );
}