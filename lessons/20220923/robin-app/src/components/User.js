import React, { useState } from "react"
import { Box, TextField, Button, Grid, Typography } from "@mui/material"

export const User = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  const handleOnEditSubmit = evt => {
    evt.preventDefault()
    onEdit(id, evt.target.name.value, evt.target.email.value)
    setIsEdit(!isEdit)
  }

  return (
    <Box>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="row"
            gap="25px"
          >
            <Grid item>
              <TextField
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={name}
              />
            </Grid>
            <Grid item>
              <TextField
                type="text"
                placeholder="Email"
                name="email"
                defaultValue={email}
              />
            </Grid>
            <Button
              variant="contained"
              type="submit"
            >
              Save
            </Button>
          </Grid>
        </form>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Typography>{name}</Typography>
          <Typography>{email}</Typography>
          <Box>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}
