import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { sortByDate } from './sort'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    idCounter: 0,
    todoList: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        id: state.idCounter + 1,
        title: action.payload.title,
        description: action.payload.description,
        status: 0,
        createdAt: new Date()
      })
      state.idCounter = state.idCounter + 1
    },
    updateTodo: (state, action) => {
      let index = 0;
      for (let i = 0; i < state.todoList.length; i++) {
        if (state.todoList[i].id === action.payload.id) {
          index = i;
        }
      }
      state.todoList[index] = {
        ...state.todoList[index],
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
      }
    },
    removeTodo: (state, action) => {
      let index = 0;
      for (let i = 0; i < state.todoList.length; i++) {
        if (state.todoList[i].id === action.payload.id) {
          index = i;
        }
      }
      state.todoList.splice(index, 1)
    },
    fetchMock: (state, action) => {
      state.todoList = action.payload
      state.idCounter = state.todoList.length
    },
    // sortTodo: (state) => {
    //   for (let i = 0; i < state.mockTodo.length; i++) {
    //     if (state.mockTodo[i].status === 0) {
    //       state.todoList.push(state.mockTodo[i])
    //     } else {
    //       state.listDone.push(state.mockTodo[i])
    //     }
    //   }
    //   state.todoList = sortByDate({ array: state.todoList })
    //   state.listDone = sortByDate({ array: state.listDone, desc: true })
    //   state.idCounter = state.todoList.length + state.listDone.length
    // }
  }
})

export const fetchMockTodos = () => async dispatch => {
  const { data } = await axios({
    method: 'GET',
    url: 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'
  })
  dispatch(fetchMock(data))
  // dispatch(sortTodo())
}

export const { addTodo, updateTodo, removeTodo, fetchMock, sortTodo } = todoSlice.actions

export default todoSlice.reducer
