import { useState, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/shared/redux/store'

import { IoChatboxSharp, IoCloseOutline, IoSend } from 'react-icons/io5'
import { PiPaperclipHorizontal } from 'react-icons/pi'
import { RiRobot3Fill } from 'react-icons/ri'
import clsx from 'clsx'

import { ChatMessage } from '@/shared/redux/api/chatSlice'
import { validateFiles, createMessageData } from '../utils'
import { addMessages } from '@/shared/redux/api/chatSlice'
import { useGetChatHistoryQuery } from '@/shared/redux/api/baseApi'

export const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [newMessage, setNewMessage] = useState<string>('')
  const [attachedFiles, setAttachedFiles] = useState<File[]>([])
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)

  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const messages = useSelector((state: RootState) => state.chat.messages as ChatMessage[])

  const { data: chatHistory, isLoading } = useGetChatHistoryQuery()

  useLayoutEffect(() => {
    if (chatHistory) {
      dispatch(addMessages(chatHistory))
    }
  }, [chatHistory, dispatch])

  useLayoutEffect(() => {
    const container = messagesContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages])

  const openChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (newMessage.trim() || attachedFiles.length) {
      const newMessages = attachedFiles.map(file =>
        createMessageData(URL.createObjectURL(file), 'user', file.type.startsWith('image')),
      )
      if (newMessage.trim()) {
        newMessages.push(createMessageData(newMessage, 'user'))
      }
      const updatedMessages = [...messages, ...newMessages]
      dispatch(addMessages(updatedMessages))
      sessionStorage.setItem('chatMessages', JSON.stringify(updatedMessages))
      setNewMessage('')
      setAttachedFiles([])
    }
  }

  const handleAttachImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const validFiles = validateFiles(Array.from(files), attachedFiles)
      setAttachedFiles(prevFiles => [...prevFiles, ...validFiles])
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      <div
        className={clsx(
          'fixed bottom-28 right-6 z-50 hidden w-[360px] flex-col rounded-lg bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] transition-all duration-700 lg:block',
          {
            'translate-y-8 opacity-0': !isOpen,
            'translate-y-0 opacity-100': isOpen,
          },
        )}
      >
        <p className='flex h-12 items-center justify-center text-lg text-neutral-content shadow-[0_8px_20px_0_rgba(0,0,0,0.1)] duration-700'>
          Чат DNS
        </p>

        <div className='h-[515px] w-full overflow-y-auto px-4 pt-14' ref={messagesContainerRef}>
          {messages.map((message: ChatMessage, index: number) =>
            message.author === 'agent' ? (
              <div
                key={`agent-${index}`}
                className={clsx('chat chat-start duration-700', {
                  'opacity-0': !isOpen,
                  'opacity-100': isOpen,
                })}
              >
                <div className='avatar chat-image'>
                  <div className='!flex w-10 justify-center rounded-full border'>
                    <RiRobot3Fill className='h-7 w-7 self-center' />
                  </div>
                </div>

                <div className='chat-bubble chat-bubble-primary bg-[#fc8507] text-white'>
                  {message.message}
                </div>

                <time className='mt-1 text-xs opacity-50'>{message.timestamp}</time>
              </div>
            ) : (
              <div
                key={`user-${index}`}
                className={clsx('chat chat-end duration-700', {
                  'opacity-0': !isOpen,
                  'opacity-100': isOpen,
                })}
              >
                {message.isImage ? (
                  <img
                    src={message.message}
                    alt='attached'
                    className='chat-bubble chat-bubble-accent max-w-full'
                  />
                ) : (
                  <div className='chat-bubble chat-bubble-accent break-words'>
                    {message.message}
                  </div>
                )}

                <time className='mt-1 text-xs text-gray-500 opacity-70'>{message.timestamp}</time>
              </div>
            ),
          )}
        </div>
        <div className='mt-auto flex h-16 items-center justify-start shadow-[8px_0_20px_0_rgba(0,0,0,0.1)]'>
          <label htmlFor='file-upload' className='cursor-pointer'>
            <PiPaperclipHorizontal className='mx-2 h-7 w-7 rotate-90 text-gray-500' />
          </label>
          <input
            id='file-upload'
            type='file'
            className='hidden'
            multiple
            onChange={handleAttachImage}
          />
          <input
            type='text'
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            className='h-10 w-[250px] rounded-lg bg-[#f2f2f2] px-2 placeholder:text-sm'
            placeholder='Введите сообщение...'
          />
          <button
            type='button'
            className='relative m-2.5 mt-2 flex h-10 w-10 justify-center rounded-full bg-[#fc8507] bg-gradient-to-t from-[#14bdf0] to-[#008ef8] bg-center'
            onClick={handleSendMessage}
          >
            <IoSend color='white' className='h-4 w-4 self-center' />
          </button>
        </div>
      </div>
      <button
        type='button'
        className='fixed bottom-6 right-6 z-50 hidden h-14 w-14 rounded-full bg-[#fc8507] shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] lg:block'
        onClick={openChat}
      >
        {isLoading ? (
          <span className='loading loading-spinner text-neutral'></span>
        ) : isOpen ? (
          <IoCloseOutline color='white' className='m-auto h-7 w-7' />
        ) : (
          <IoChatboxSharp color='white' className='m-auto h-5 w-5' />
        )}
      </button>
    </>
  )
}
