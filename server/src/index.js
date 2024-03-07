const app = require('./app');
const logger = require('./utils/logger');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});