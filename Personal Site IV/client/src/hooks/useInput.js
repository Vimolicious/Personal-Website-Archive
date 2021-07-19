// Imports
import { useState } from 'react'

// Use input hook
export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => setValue(e.target.value)

  return [value, handleChange, setValue]
}
