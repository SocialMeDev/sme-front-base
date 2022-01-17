import imageCompression from 'browser-image-compression'

export default async function compressImageFile(file) {
  await imageCompression.getExifOrientation(file)

  const options = {
    maxWidthOrHeight: 600,
    maxSizeMB: 1.5,
    useWebWorker: true,
    initialQuality: 0.7,
  }

  const output = await imageCompression(file, options)

  const outputFile = new File([output], file.name, {
    type: file.type,
    lastModified: Date.now(),
  })

  return outputFile
}
