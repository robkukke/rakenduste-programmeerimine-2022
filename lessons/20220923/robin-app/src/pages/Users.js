import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import Header from "../components/Header"
import { User } from "../components/User"

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users?_page=0&_limit=5")
      .then(response => response.json())
      .then(data => setUsers(data))
      .then(json => console.log(json))
  }

  const onEdit = async (id, name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        const updatedUsers = users.map(user => {
          if (user.id === id) {
            user.name = name
            user.email = email
          }
          return user
        })

        setUsers(users => updatedUsers)
      })
      .then(json => console.log(json))
  }

  const onDelete = async id => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    }).then(
      setUsers(
        users.filter(user => {
          return user.id !== id
        })
      )
    )
  }

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "25px",
          height: "80vh"
        }}
      >
        {users.map(user => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </Box>
    </>
  )
}

export default Users
