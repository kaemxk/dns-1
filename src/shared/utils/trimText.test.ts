import { describe, it, expect } from 'vitest'

import { trimText } from './textUtils'

describe('trimText', () => {
  it('должен вернуть оригинальный текст, если короче максимальной допустимой длины', () => {
    const input = 'This is short text'
    const maxTextLength = 50
    const result = trimText(input, maxTextLength)
    expect(result).toBe(input)
  })
  it('должен вернуть укороченный текст, если больше допустимой длины', () => {
    const input =
      'This is loooong text This is loooong text This is loooong text This is loooong text'
    const maxTextLength = 7
    const result = trimText(input, maxTextLength)
    expect(result).toBe('This is loooong text This ...')
  })
})
