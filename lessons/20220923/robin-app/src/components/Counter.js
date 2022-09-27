import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Button } from "@mui/material"

// Komponendi loomiseks kirjutasin rafcp => Tab

const Counter = props => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => setCounter(counter + 1)

  // Ilma dependency array-ta
  useEffect(() => {
    document.title = `Robin counter: ${counter}`
  })

  // Tühja dependency array-ga
  useEffect(() => {
    console.log("Guess how many times")
  }, [])

  // Täidetud dependency array-ga
  useEffect(() => {
    console.log("Filled dependency array")
  }, [counter])

  return (
    <Button
      color="success"
      variant="contained"
      onClick={increaseCounter}
    >
      +1
    </Button>
  )
}

Counter.propTypes = {}

export default Counter
