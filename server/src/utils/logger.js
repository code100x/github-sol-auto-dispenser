const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', 
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
  ),
  transports: [
    // Console transport
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
   
  ],
});

module.exports = logger;
