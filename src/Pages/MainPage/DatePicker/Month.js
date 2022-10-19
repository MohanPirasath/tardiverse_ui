


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: '01',
    label: '01',
  },
  {
    value: '02',
    label: '02',
  },
  {
    value: '03',
    label: '03',
  },
  {
    value: '04',
    label: '04',
  },
  {
    value: '05',
    label: '05',
  },
  {
    value: '06',
    label: '06',
  },
  {
      label: '07',
      value: '07',
  },
  {
    value: '08',
    label: '08',
  },
  {
    value: '09',
    label: '09',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '12',
    label: '12',
  },
];

export default function SelectTextFieldsMonth({Tomon}) {
  const [currency, setCurrency] = React.useState('01');

  const handleChange = (event) => {
    setCurrency(event.target.value);
    Tomon(event.target.value)
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: .3, width: '17ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Month"
          value={currency}
          onChange={handleChange}
          helperText="select month"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
     
      </div>
    </Box>
  );
}
