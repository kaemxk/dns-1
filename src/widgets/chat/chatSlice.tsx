import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChatMessage } from './interfaces'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [] as ChatMessage[],
  },
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload)
      sessionStorage.setItem('chatMessages', JSON.stringify(state.messages))
    },
    addMessages: (state, action: PayloadAction<ChatMessage[]>) => {
      state.messages = action.payload
      sessionStorage.setItem('chatMessages', JSON.stringify(state.messages))
    },
  },
})

export const { addMessage, addMessages } = chatSlice.actions
export default chatSlice.reducer
