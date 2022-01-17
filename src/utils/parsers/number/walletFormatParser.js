export default function walletFormatParser(value = 0) {
  if (value % 1 === 0) {
    const newValue = value * 1000000

    return newValue
  } else {
    const newValue = value * 1000000
    return newValue
  }
}
