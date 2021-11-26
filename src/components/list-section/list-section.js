import React, { useState } from 'react';
import { Wrapper } from './list-section.styles';
import { Typography } from '@mui/material';
import Cardlist from '../cardlist/cardlist';
import TodoCard from '../card/card';
import DialogForm from '../dialog-form/dialog-form';
import AddCard from '../card/addCard';

function ListSection({ title, items = [], done = false }) {
  const [showDialog, setShowDialog] = useState(false)

  const handleOpenDialog = () => {
    setShowDialog(true)
  }

  const handleDialogClose = () => {
    setShowDialog(false)
  }

  return (
    <Wrapper>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {title}
      </Typography>
      <Cardlist>
        {items.map(item => (
          <TodoCard key={item.id} todo={item} />
        ))}
        {!done && <AddCard handleClick={handleOpenDialog} />}
      </Cardlist>
      <DialogForm visible={showDialog} onDialogClose={handleDialogClose} />
    </Wrapper>
  )
}

export default ListSection