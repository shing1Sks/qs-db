import main from "op-db";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  try {
    const app = await main();
    app(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
