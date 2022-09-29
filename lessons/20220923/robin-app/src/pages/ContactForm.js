import React from "react"
import { Box, Typography } from "@mui/material"
import Header from "../components/Header"

const ContactForm = () => {
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
        <Typography>ContactForm.js</Typography>
      </Box>
    </>
  )
}

export default ContactForm
