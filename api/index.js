import dotenv from "dotenv";
import express from "express";
import { connectToDB } from "op-db/dbMongo";
import { app as expressApp } from "op-db/expressApp";

dotenv.config();

const app = express();

// Connect to the database
connectToDB();

// Use the expressApp middleware
app.use(expressApp);

// Route definitions
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;