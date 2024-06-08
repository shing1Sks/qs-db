import main from "op-db";
import dotenv from "dotenv";

dotenv.config();

export default async function handler() {
  try {
    main();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
