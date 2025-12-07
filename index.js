import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const DIFY_API_KEY = process.env.DIFY_KEY;
const DIFY_URL = process.env.DIFY_URL;

// 代理 POST /chat
app.post("/chat", async (req, res) => {
  try {
    const result = await axios.post(
      DIFY_URL,
      req.body,
      {
        headers: {
          Authorization: `Bearer ${DIFY_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    res.send(result.data);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/", (_, res) => res.send("Dify proxy is running"));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log("Server running on port", PORT));
