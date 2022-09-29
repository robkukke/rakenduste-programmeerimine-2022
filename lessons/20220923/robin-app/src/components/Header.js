import React from "react"
import { Box } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: "25px",
        height: "20vh"
      }}
    >
      <Link to={`/`}>Main</Link>
      <Link to={`/table`}>Table</Link>
      <Link to={`/contact-form`}>Contact Form</Link>
      <Link to={`/user-profile-settings`}>User Profile Settings</Link>
      <Link to={`/photos`}>Photos</Link>
      <Link to={`/posts`}>Posts</Link>
      <Link to={`/users`}>Users</Link>
      <Link to={`/albums`}>Albums</Link>
      <Link to={`/todos`}>Todos</Link>
    </Box>
  )
}

export default Header
