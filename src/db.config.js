module.exports = {
    HOST: "strapi-db.ctwmxuokfkqo.us-east-1.rds.amazonaws.com",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };