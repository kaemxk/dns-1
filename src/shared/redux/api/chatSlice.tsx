import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ChatMessage {
  author: string
  message: string
  timestamp: string
  isImage: boolean
}

interface ChatState {
  messages: ChatMessage[]
}

const initialState: ChatState = {
  messages: [],
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
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
