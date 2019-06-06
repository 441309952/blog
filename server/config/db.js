const isDev = process.env.NODE_ENV === 'dev'

const config = {
  database: isDev ? 'blogdev' : 'react-blog',
  user: isDev ? 'root' : '',
  password: isDev ? '12345678' : '',
  options: {
    host: isDev ? 'localhost' : '', // 连接的 host 地址
    dialect: 'mysql', // 连接到 mysql
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

module.exports = config
