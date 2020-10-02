import dotenv from "dotenv";

// Activate env variables
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "database-user",
  password: process.env.DB_PASSWORD || "123456",
  max: process.env.DB_MAX_USERS || 20,
  database: process.env.DB_NAME || "yelp_clone",
  port: process.env.DB_PORT || 5432,
};

export default dbConfig;
