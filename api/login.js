// api/login.js
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

  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: "Логін і пароль обов'язкові" });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE login = $1 AND password = $2",
      [login, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Невірний логін або пароль" });
    }

    const user = result.rows[0];

    res.status(200).json({
      success: true,
      user: {
        username: user.username,
        login: user.login,
        password: user.password,
        avatar_url: user.avatar_url,
      },
    });
  } catch (err) {
    console.error("❌ ПОМИЛКА ВХОДУ:", err.message);
    res.status(500).json({ error: "Помилка входу" });
  }
}
