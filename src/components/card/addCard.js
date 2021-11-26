import React from 'react'
import { Card, CardContent  } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function AddCard({ handleClick }) {
  return (
    <Card sx={{ width: 250, height: 180, margin: '16px' }}>
      <CardContent
        onClick={handleClick}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%'
        }}
      >
        <AddIcon color="action" sx={{ fontSize: 48 }}/>
      </CardContent>
    </Card>
  )
}

export default AddCard