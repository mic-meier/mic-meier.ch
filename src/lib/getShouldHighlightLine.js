import rangeParser from 'parse-numeric-range'

export const getShouldHighlightLine = (hl) => {
  if (hl) {
    const lineNumbers = rangeParser(hl)
    return (index) => lineNumbers.includes(index + 1)
  }
  return () => false
}
