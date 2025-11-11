import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import fs from 'fs'
import path from 'path'

const isDocker = fs.existsSync('/.dockerenv')

const logDir = isDocker ? '/app/logs' : path.resolve('logs')

// Dockerfile에서 설정한 app:app(1001:1001) 권한으로 서버에 logs 폴더 수동 생성
// if (!fs.existsSync(logDir)) {
//   fs.mkdirSync(logDir, { recursive: true })
// }

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(
      ({ timestamp, level, message }) =>
        `[${timestamp}] [${level.toUpperCase()}] ${message}`,
    ),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(logDir, 'access-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxSize: '5m',
      maxFiles: '30d',
      zippedArchive: false,
      auditFile: path.join(logDir, 'audit.json'),
    }),
  ],
})

export default logger
