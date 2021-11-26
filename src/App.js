import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMockTodos } from './store/todoSlice'
import { sortByDate } from './store/sort';

import Navbar from './components/navbar/navbar';
import { Container } from '@mui/material';
import ListSection from './components/list-section/list-section';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todo.todoList)

  let listTodo = []
  let listDone = []

  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].status === 0) {
      listTodo.push(todoList[i])
    } else {
      listDone.push(todoList[i])
    }
  }
  
  useEffect(() => {
    dispatch(fetchMockTodos())
  }, [])
  
  useEffect(() => {
    listTodo = sortByDate({ array: listTodo })
    listDone = sortByDate({ array: listDone, desc: true })
  }, [todoList])

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ padding: '24px 0' }}>
        <ListSection title={'Your Todo List'} items={listTodo} />
        <ListSection title={'Task Done'} items={listDone} done />
      </Container>
    </div>
  );
}

export default App;
