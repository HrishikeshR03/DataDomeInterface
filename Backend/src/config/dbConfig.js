const dotenv = require('dotenv');

dotenv.config();

const host = process.env.DB_HOST || '127.0.0.1';
const port = process.env.DB_PORT || 3306;
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || 'root';
const database = process.env.DB_DATABASE || 'data_dome';

module.exports = {
  host, port, user, password, database,
};
