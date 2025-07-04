// api/deleteUser.js
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Метод не дозволено" });
  }

  const { login } = req.body;

  if (!login) {
    return res.status(400).json({ error: "Не вказано логін" });
  }

  try {
    const result = await pool.query("DELETE FROM users WHERE login = $1", [login]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Користувача не знайдено" });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Помилка при видаленні користувача:", err.message);
    res.status(500).json({ error: "Помилка сервера" });
  }
}
