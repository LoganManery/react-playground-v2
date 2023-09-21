export default function logError(err: Error): void {
  console.error(`[Error]:${err.message}`);
}