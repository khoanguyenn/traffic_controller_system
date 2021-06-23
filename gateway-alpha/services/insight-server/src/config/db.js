module.exports = {
  dbConfig: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'tests',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  redisDbs: {
    authDb: {
      port: 6379,
      host: process.env.REDIS_URL || 'localhost',
      auth_pass: process.env.SKIP_TLS ? undefined : process.env.REDIS_AUTH,
      db: parseInt(process.env.AUTHENTICATION_STORE || '0', 10),
      get tls() {
        return (process.env.NODE_ENV === 'test' || process.env.SKIP_TLS) ? undefined : { servername: this.host };
      },
    },
  },
};
