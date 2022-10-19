
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

function CurrentDate() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}