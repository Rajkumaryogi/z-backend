import "dotenv/config";
import express from "express";
import cors from "cors";
import summaryRoutes from "./routes/emailRoute.js";

const app = express();
app.use(cors({
  origin: "https://www.zentrok.com" || "http://localhost:3000" || "https://zentrok.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}
));
app.use(express.json());

app.use("/api/subscribe", summaryRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));