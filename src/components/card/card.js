import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, CardActions, CardContent, Typography  } from '@mui/material'
import { removeTodo } from '../../store/todoSlice'
import DialogForm from '../dialog-form/dialog-form'

function TodoCard({ todo }) {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [payload, setPayload] = useState({})

  const handleUpdate = () => {
    setPayload(todo)
    setVisible(true)
  }

  const handleDelete = () => {
    dispatch(removeTodo({ id: todo.id }))
  }

  const handleDialogClose = () => {
    setPayload({})
    setVisible(false)
  }

  return (
    <Card sx={{ width: 250, minHeight: 180, margin: '16px' }}>
      <CardContent>
        <Typography variant="h6" component="div">{todo.title}</Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
        {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleUpdate}>
          Update
        </Button>
        {todo.status === 0 && (
          <Button size="small" onClick={handleDelete}>
            Delete
          </Button>)
        }
      </CardActions>
      <DialogForm payload={payload} visible={visible} onDialogClose={handleDialogClose} />
    </Card>
  )
}

export default TodoCard