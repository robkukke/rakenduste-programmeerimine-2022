import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Calculation() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button
        variant="contained"
        color="success"
        aria-label="subtract-one"
        onClick={() => setCount(count - 1)}
      >
        -1
      </Button>

      <Button
        variant="contained"
        color="success"
        aria-label="add-one"
        onClick={() => setCount(count + 1)}
      >
        +1
      </Button>

      <Button
        variant="contained"
        color="success"
        aria-label="subtract-hundred"
        onClick={() => setCount(count - 100)}
      >
        -100
      </Button>

      <Button
        variant="contained"
        color="success"
        aria-label="add-hundred"
        onClick={() => setCount(count + 100)}
      >
        +100
      </Button>

      <Typography
        aria-label="current-value"
      >
        {count}
      </Typography>
    </>
  );
}