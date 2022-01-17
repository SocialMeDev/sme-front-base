export default function capitalizeString(value = '') {
  if (!value) return
  const arrayOfString = value.toLowerCase().split(' ')

  const newArray = []

  arrayOfString.forEach((string) => {
    let word = ''

    if (string.length <= 2) {
      if (string.length === 1) {
        word = string.charAt(0) + string.slice(1)
      }
      if (string.length === 2) {
        if (string.split('')[0] === 'd') {
          word = string.charAt(0) + string.slice(1)
        } else {
          word = string.charAt(0).toUpperCase() + string.slice(1)
        }
      }
      word = string.charAt(0).toUpperCase() + string.slice(1)
    } else {
      word = string.charAt(0).toUpperCase() + string.slice(1)
    }

    newArray.push(word)
  })

  return newArray.join(' ')
}
