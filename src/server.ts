import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Project Init" });
});

app.listen(3000);
