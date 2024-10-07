function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 56) + 180
  const g = Math.floor(Math.random() * 56) + 180
  const b = Math.floor(Math.random() * 56) + 180
  return `rgb(${r}, ${g}, ${b})`
}
export { getRandomRgbColor }
