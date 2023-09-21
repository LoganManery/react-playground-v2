import fs from 'fs'
import path from 'path'
import virusScan from './virusScan'
import sharp from 'sharp'
import logError from './logError'

export default async function handleImage(file: Express.Multer.File): Promise<string> {
  const imageBuffer = fs.readFileSync(file.path)
  try {
    // const type = await fileTypeFromBuffer(imageBuffer)

    // if (!type || !['image/png', 'image/jpeg'].includes(type.mime)) {
    //   throw new Error('Invalid file type')
    // }

    virusScan(file);

  // Define a custom directory and filename
    const directory = path.join(__dirname, '../images');
    const filename = `optimized-${file.filename}.jpg`;
    const outputPath = path.join(directory, filename);

    await sharp(file.path)
      .resize(800)
      .jpeg({ quality: 80 })
      .toFile(outputPath)

    // Delete the original file
    fs.unlinkSync(file.path)

    return `/images/${filename}`
  } catch (err: any) {
    logError(err)
    fs.unlinkSync(file.path)
    throw err
  }
}