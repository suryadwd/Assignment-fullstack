import pkg from "pg";
import dotenv from "dotenv";
import dns from "dns/promises"; // Use promise-based DNS

dotenv.config();
const { Pool } = pkg;

async function createPool() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL not set!");

  // Extract host from URL
  const host = databaseUrl.split("@")[1].split(":")[0];

  // Resolve IPv4 explicitly
  const addresses = await dns.lookup(host, { family: 4 });
  const ipv4 = addresses.address;

  const pool = new Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
    host: ipv4, // force IPv4
    port: 5432,
  });

  return pool;
}

export const poolPromise = createPool();
