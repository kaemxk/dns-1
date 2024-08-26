import { useState } from 'react'
import { IoChatboxSharp, IoCloseOutline, IoSend } from 'react-icons/io5'
import { PiPaperclipHorizontal } from 'react-icons/pi'
import { RiRobot3Fill } from 'react-icons/ri'
import clsx from 'clsx'

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const openChat = () => {
    if (!isOpen) {
      setIsLoading(true)
      setIsOpen(true)
      setIsLoading(false)
    } else {
      setIsOpen(false)
    }
  }

  const messages = [
    {
      message:
        'Здравствуйте, я виртуальный помощник DNS! Я могу помочь в поиске заказа или товаров, проверке баланса подарочной карты или карты ProZaPass и многом другом. Выберите что Вас интересует или напишите свой вопрос.',
      author: 'agent',
      time: `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
    },
  ]

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
        <div className='h-[515px] w-full px-4 pt-14'>
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
                <time className='mt-1 text-xs opacity-50'>{message.time}</time>
              </div>
            ) : (
              <div
                key={`user-${index}`}
                className={clsx('chat chat-start duration-700', {
                  'opacity-0': !isOpen,
                  'opacity-100': isOpen,
                })}
              >
                <div className='chat-bubble chat-bubble-accent'>{message.message}</div>
              </div>
            ),
          )}
        </div>
        <div className='mt-auto flex h-16 items-center justify-start shadow-[8px_0_20px_0_rgba(0,0,0,0.1)]'>
          <label htmlFor='file-upload' className='cursor-pointer'>
            <PiPaperclipHorizontal className='mx-2 h-7 w-7 rotate-90' />
          </label>
          <input id='file-upload' type='file' className='hidden' />

          <input
            type='text'
            className='h-10 w-[250px] rounded-lg px-2 placeholder:text-sm'
            placeholder='Введите сообщение...'
          />
          <button
            type='button'
            className='relative m-2.5 mt-2 flex h-10 w-10 justify-center rounded-full bg-primary bg-center'
            onClick={() => console.log('clicked')}
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
