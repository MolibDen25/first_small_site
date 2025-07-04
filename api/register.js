import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, login, password } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (username, login, password) VALUES ($1, $2, $3) RETURNING *",
      [username, login, password]
    );
    res.status(200).json({ user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Помилка реєстрації" });
  }
}
