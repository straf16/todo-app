import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../../store/todoSlice'

function DialogForm({ payload, visible, onDialogClose }) {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState(0)

  useEffect(() => {
    if (payload) {
      setTitle(payload.title)
      setDescription(payload.description)
      setStatus(payload.status)
    }
  }, [payload])

  const handleClose = () => {
    setTitle('')
    setDescription('')
    onDialogClose()
  }

  const handleSubmit = () => {
    if (payload) {
      dispatch(updateTodo({ id: payload.id, title, description, status }))
    } else {
      dispatch(addTodo({ title, description }))
    }
    setTitle('')
    setDescription('')
    onDialogClose()
  }

  return (
    <Dialog open={visible} onClose={handleClose}>
      <DialogTitle>{'Add Todo'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          value={title}
          fullWidth
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          id="description"
          label="Decription"
          value={description}
          fullWidth
          variant="standard"
          onChange={(e) => setDescription(e.target.value)}
        />
        {payload && (
          <TextField
            select
            label="Status"
            id="status"
            value={status}
            variant="standard"
            fullWidth
            onChange={(e) => setStatus(e.target.value)}
            sx={{ margin: '8px 0 4px' }}
          >
            <MenuItem key={0} value={0}>Todo</MenuItem>
            <MenuItem key={1} value={1}>Done</MenuItem>
          </TextField>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>CANCEL</Button>
        <Button onClick={handleSubmit}>SAVE</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogForm
