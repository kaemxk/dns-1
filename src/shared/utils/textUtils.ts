function trimText(text: string, maxTextLength: number) {
  if (text.length > maxTextLength) {
    const textArray = text.split(' ')
    return textArray.slice(0, 5).concat('...').join(' ')
  } else return text
}
export {trimText}
