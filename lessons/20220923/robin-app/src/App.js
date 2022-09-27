import React, { useState } from "react"
import { Box, Button } from "@mui/material"
import Counter from "./components/Counter"
import Toggle from "./components/Toggle"

import "./App.css"

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "25px",
        height: "100vh"
      }}
    >
      <Counter />
      {show && <Toggle />}
      <Button
        color="error"
        variant="contained"
        onClick={() => setShow(!show)}
      >
        Toggle Toggle
      </Button>
    </Box>
  )
}

export default App
