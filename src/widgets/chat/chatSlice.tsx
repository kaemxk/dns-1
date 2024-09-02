import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ChatMessage } from './interfaces'

export const fetchChatHistory = createAsyncThunk<ChatMessage[]>(
  'chat/fetchChatHistory',
  async () => {
    const response = await fetch('http://localhost:4000/chatHistory')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = (await response.json()) as ChatMessage[]
    return data
  },
)

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
  extraReducers: builder => {
    builder.addCase(fetchChatHistory.fulfilled, (state, action) => {
      state.messages = action.payload
      sessionStorage.setItem('chatMessages', JSON.stringify(state.messages))
    })
  },
})

export const { addMessage, addMessages } = chatSlice.actions
export default chatSlice.reducer
