import NodeClam from 'clamscan'

export default async function virusScan(file: Express.Multer.File) {
  const clam = new NodeClam()
  await clam.init({
    scanLog: '/logs/clamScanLog.txt',
    debugMode: true
  })

  const { isInfected, viruses } = await clam.scanFile(file.path)
  if (isInfected) {
    throw new Error(`Virus detected: ${viruses}`)
  }
}