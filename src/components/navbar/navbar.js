import React from 'react'
import { AppBar, Typography } from '@mui/material'

function Navbar() {
  return (
    <AppBar position="static" sx={{ padding: '16px' }}>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>ToDo App</Typography>
    </AppBar>
  )
}

export default Navbar
