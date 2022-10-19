
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'Chennai',
    label: 'Chennai',
  },
  {
    value: 'Goa',
    label: 'Goa',
  },
  {
    value: 'Bengaluru',
    label: 'Bengaluru',
  },
  {
    value: 'Kolkata',
    label: 'Kolkata',
  },
  {
    value: 'Delhi',
    label: 'Delhi',
  },
  {
    value: 'mumbai',
    label: 'mumbai',
  },
  {
    value: 'hyderabad',
    label: 'hyderabad',
  },
  {
    value: 'patna',
    label: 'patna',
  },
  {
    value: 'lucknow',
    label: 'lucknow',
  },
  {
    value: 'bhubaneswar',
    label: 'bhubaneswar',
  },
];

export default function SelectTextFields({setFrom}) {
  const [currency, setCurrency] = React.useState('Chennai');

  const handleChange = (event) => {
    setCurrency(event.target.value);
    setFrom(event.target.value)
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: .3, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="From"
          value={currency}
          onChange={handleChange}
          helperText="Please select your Boarding Point"
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
