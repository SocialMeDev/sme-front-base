export default function swapArrayItemToFirstIndex(array, element) {
  array.forEach((item, index) => {
    if (item === element) {
      const defaultElement = array[0]

      array[0] = item

      array[index] = defaultElement
    }
  })

  return array
}
