import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  list: {
    name: 'ToDo List',
    items: [
      {
        description: 'Add tasks to the to-do list',
        done: false,
      }
    ]
  }
};

export const tasks = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const itemInfo = action.payload;
      state.list.items.push(itemInfo); 
    },
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload
      state.list.items[itemIndex].done = done
    },
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload
      state.list.items = state.list.items.filter((item, index) => index !== itemIndex)
    }
  }
})