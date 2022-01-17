export default function americanDateParser(value = '') {
  const date = value.split('/')

  const newDate = `${date[2]}-${date[1]}-${date[0]}`

  return newDate
}
