import pkg from "pg";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();
const { Pool } = pkg;

const databaseUrl = process.env.DATABASE_URL;

// Resolve hostname to IPv4
dns.lookup(databaseUrl.split("@")[1].split(":")[0], { family: 4 }, (err, address) => {
  if (err) {
    console.error("DNS lookup failed:", err.message);
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
    host: address, // use resolved IPv4
    port: 5432,
  });

  pool.query("SELECT NOW()")
    .then(res => {
      console.log("DB connected! Time:", res.rows[0].now);
      process.exit(0);
    })
    .catch(err => {
      console.error("DB connection failed:", err.message);
      process.exit(1);
    });
});
