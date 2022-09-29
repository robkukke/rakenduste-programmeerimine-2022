import React from "react"
import { Box, Typography } from "@mui/material"
import Header from "../components/Header"
import Comments from "../components/Comments"

const Posts = () => {
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
        <Typography>Posts.js</Typography>
        <Comments />
      </Box>
    </>
  )
}

export default Posts
