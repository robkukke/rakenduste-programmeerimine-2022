import React from "react"
import { Box, TableCell, Typography } from "@mui/material"
import Header from "../components/Header"

const Table = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          height: "80vh"
        }}
      >
        <Typography>Table.js</Typography>
      </Box>
    </>
  )
}

export default Table
