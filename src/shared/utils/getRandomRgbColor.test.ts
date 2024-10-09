import { describe } from 'vitest'

import { getRandomRgbColor } from './styleUtils'

describe('getRandomRgbColor', () => {
  it('Возвращает достаточно случайных значений', () => {
    const colorSet = new Set()

    for (let index = 0; index < 100; index++) {
      colorSet.add(getRandomRgbColor())
    }
    expect(colorSet.size).toBeGreaterThan(80)
  })
})
