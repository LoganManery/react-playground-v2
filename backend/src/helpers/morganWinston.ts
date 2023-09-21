import morgan from 'morgan'
import logger from './logger.js'

const stream = {
  write: (message: string) => {
    logger.info(message.trim())
  }
}

const morganWinston = morgan('combined', { stream: stream })

export default morganWinston