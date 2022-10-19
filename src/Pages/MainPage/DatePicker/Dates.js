


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
    value: '07',
    label: '07',
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
  {
    value: '13',
    label: '13',
  },
  {
    value: '14',
    label: '14',
  },
  {
    value: '15',
    label: '15',
  },
  {
    value: '16',
    label: '16',
  },
  {
    value: '17',
    label: '17',
  },
  {
    value: '18',
    label: '18',
  },
  {
    value: '19',
    label: '19',
  },
  {
    value: '20',
    label: '20',
  },
  {
    value: '21',
    label: '21',
  },
  {
    value: '22',
    label: '22',
  },
  {
    value: '23',
    label: '23',
  },
  {
    value: '24',
    label: '24',
  },
  {
    value: '25',
    label: '25',
  },
  {
    value: '26',
    label: '27',
  },
  {
    value: '28',
    label: '28',
  },
  {
    value: '29',
    label: '29',
  },
  {
    value: '30',
    label: '30',
  },
  {
    value: '31',
    label: '31',
  },

];

export default function SelectTextFieldsDate({Todate}) {
  const [currency, setCurrency] = React.useState('01');

  const handleChange = (event) => {
    setCurrency(event.target.value);
    Todate(event.target.value)
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
          label="Date"
          value={currency}
          onChange={handleChange}
          helperText="select Date"
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
