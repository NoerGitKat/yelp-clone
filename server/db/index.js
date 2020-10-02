import { Pool } from "pg";
import dbConfig from "./config";

const pool = new Pool(dbConfig);

export default {
  query: (text, params) => pool.query(text, params),
};
