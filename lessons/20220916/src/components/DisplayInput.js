import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';

export function DisplayInput() {
  const [input, setInput] = useState('');

  return (
    <>
      <Input
        aria-label="input-text"
        inputProps={{"data-testid": "input-text-id"}}
        value={input}
        onChange={e => setInput(e.target.value)}
      >
      </Input>
      <Typography
        aria-label="display-text"
      >
        {input}
      </Typography>
    </>
  );
}