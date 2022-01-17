import compressImageFile from './compressImageFile'

async function handleInputFileEvent(event) {
  if (event.target && event.target.files !== null) {
    let file = event.target.files[0]

    if (!file) {
      return false
    }

    file = await compressImageFile(file)

    return file
  }
}

export default handleInputFileEvent
