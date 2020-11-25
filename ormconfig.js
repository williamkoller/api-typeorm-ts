
console.log('process.env.DB_PORT_INTERN :>>', process.env.DB_PORT_INTERN)
console.log('process.env.DB_HOST :>>', process.env.DB_HOST)
console.log('process.env.DB_USER :>>', process.env.DB_USER)
console.log('process.env.DB_PASSWORD :>>', process.env.DB_PASSWORD)
console.log('process.env.DB_NAME :>>', process.env.DB_NAME)
console.log('process.env.PORT_REDIS :>>', process.env.PORT_REDIS)
console.log('process.env.HOST_REDIS :>>', process.env.HOST_REDIS)
console.log('process.env.DB_KEY :>>', process.env.DB_KEY)
console.log('process.env.DB_IV :>>', process.env.DB_IV)

module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT_INTERN,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database":process.env.DB_NAME,
  "entities": [
    "src/models/**/*.ts"
 ],
 "migrations": [
  "src/database/migrations/**/*.ts"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  },
  "logging": true,
  "cache": {
    type: "redis",
    options: {
      host: process.env.HOST_REDIS,
      port: process.env.PORT_REDIS
    }
  }
}
