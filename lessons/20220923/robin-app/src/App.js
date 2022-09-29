import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./pages/Main"
import ErrorNotFound from "./pages/ErrorNotFound"
import Table from "./pages/Table"
import ContactForm from "./pages/ContactForm"
import UserProfileSettings from "./pages/UserProfileSettings"
import Photos from "./pages/Photos"
import Posts from "./pages/Posts"
import Users from "./pages/Users"
import Albums from "./pages/Albums"
import Todos from "./pages/Todos"

import "./App.css"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorNotFound />
    },
    {
      path: "/table",
      element: <Table />
    },
    {
      path: "/contact-form",
      element: <ContactForm />
    },
    {
      path: "/user-profile-settings",
      element: <UserProfileSettings />
    },
    {
      path: "/photos",
      element: <Photos />
    },
    {
      path: "/posts",
      element: <Posts />
    },
    {
      path: "/users",
      element: <Users />
    },
    {
      path: "/albums",
      element: <Albums />
    },
    {
      path: "/todos",
      element: <Todos />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
