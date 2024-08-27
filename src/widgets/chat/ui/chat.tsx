
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
        
import { IoChatboxSharp, IoCloseOutline, IoSend } from 'react-icons/io5'
import { PiPaperclipHorizontal } from 'react-icons/pi'
import { RiRobot3Fill } from 'react-icons/ri'
import clsx from 'clsx'

type ChatMessage = {
  author: string
  message: string
  timestamp: string
  isImage: boolean
}

export const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [newMessage, setNewMessage] = useState<string>('')
  const [attachedFiles, setAttachedFiles] = useState<File[]>([])
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)

  const MAX_FILE_SIZE_MB = 50
  const MAX_FILES = 5
  const ALLOWED_FORMATS = ['doc', 'docx', 'xls', 'xlsx', 'txt', 'pdf', 'jpeg', 'jpg', 'png']

  useEffect(() => {
    const savedMessages = sessionStorage.getItem('chatMessages')
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    } else {
      fetch('http://localhost:4000/chatHistory')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data: ChatMessage[]) => {
          const updatedChatHistory = data.map(message => ({
            ...message,
            timestamp: new Date().toLocaleTimeString(),
          }))
          setMessages(updatedChatHistory)
          sessionStorage.setItem('chatMessages', JSON.stringify(updatedChatHistory))
        })
        .catch(error => console.error('Error fetching data:', error))
    }
  }, [])

  useLayoutEffect(() => {
    const container = messagesContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages])

  const openChat = () => {
    if (!isOpen) {
      setIsLoading(true)
      setIsOpen(true)
      setIsLoading(false)
    } else {
      setIsOpen(false)
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim() || attachedFiles.length) {
      const newMessages = attachedFiles.map(file => ({
        message: URL.createObjectURL(file),
        author: 'user',
        timestamp: new Date().toLocaleTimeString(),
        isImage: file.type.startsWith('image'),
      }))

      if (newMessage.trim()) {
        const messageData = {
          message: newMessage,
          author: 'user',
          timestamp: new Date().toLocaleTimeString(),
          isImage: false,
        }
        newMessages.push(messageData)
      }

      const updatedMessages = [...messages, ...newMessages]
      setMessages(updatedMessages)
      sessionStorage.setItem('chatMessages', JSON.stringify(updatedMessages))
      setNewMessage('')
      setAttachedFiles([])
    }
  }

  const handleAttachImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const validFiles: File[] = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const fileSizeMB = file.size / (1024 * 1024)
        const fileExtension = file.name.split('.').pop()?.toLowerCase()

        if (fileSizeMB > MAX_FILE_SIZE_MB) {
          alert(`Файл ${file.name} превышает максимальный размер в ${MAX_FILE_SIZE_MB}MB.`)
        } else if (!ALLOWED_FORMATS.includes(fileExtension || '')) {
          alert(`Формат файла ${file.name} не поддерживается.`)
        } else if (attachedFiles.length + validFiles.length >= MAX_FILES) {
          alert(`Превышено максимальное количество файлов (${MAX_FILES}).`)
          break
        } else {
          validFiles.push(file)
        }
      }
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
          'fixed bottom-28 right-6 flex hidden w-[360px] flex-col rounded-lg bg-neutral shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] transition-all duration-700 lg:block',
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
          {messages.map((message, index) =>
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

                <div className='chat-bubble chat-bubble-primary'>{message.message}</div>
                <time className='mt-1 text-xs opacity-50'>{message.timestamp}</time>
              </div>
            ) : (
              <div
                key={`user-${index}`}
                className={clsx('chat chat-start duration-700', {
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
                  <div className='chat-bubble chat-bubble-accent'>{message.message}</div>
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
            className='h-10 w-[250px] rounded-lg px-2 placeholder:text-sm'
            placeholder='Введите сообщение...'
          />
          <button
            type='button'
            className='relative m-2.5 mt-2 flex h-10 w-10 justify-center rounded-full bg-primary bg-center'
            onClick={handleSendMessage}
          >
            <IoSend className='h-4 w-4 self-center bg-primary' />
          </button>
        </div>
      </div>
      <button
        type='button'
        className='fixed bottom-6 right-6 hidden h-14 w-14 rounded-full border-2 border-primary bg-primary shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] lg:block'
        onClick={openChat}
      >
        {isLoading ? (
          <span className='loading loading-spinner text-neutral'></span>
        ) : isOpen ? (
          <IoCloseOutline className='m-auto h-7 w-7 text-primary-content' />
        ) : (
          <IoChatboxSharp className='m-auto h-5 w-5 text-primary-content' />
        )}
      </button>
    </>
  )
}
