export default function WalletFormatConversion(value = 0) {
  const division = value / 1000000

  if (division % 1 === 0) {
    const newValue = `${division.toLocaleString('pt-br')},00`
    return newValue
  } else {
    const newValue = division.toFixed(2)
    return newValue.replace('.', ',')
  }
}
