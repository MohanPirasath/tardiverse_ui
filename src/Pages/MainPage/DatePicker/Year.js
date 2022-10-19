


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: '2022',
    label: '2022',
  },
  {
    value: '2023',
    label: '2023',
  },
  {
    value: '2024',
    label: '2024',
  },
  {
    value: '2025',
    label: '2025',
  },
 
];

export default function SelectTextFieldsYear({Toyear}) {
  const [currency, setCurrency] = React.useState('2022');

  const handleChange = (event) => {
    setCurrency(event.target.value);
    Toyear(event.target.value)
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: .3, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Year"
          value={currency}
          onChange={handleChange}
          helperText="select year"
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
