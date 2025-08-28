import "dotenv/config";
import express from "express";
import cors from "cors";
import summaryRoutes from "./routes/emailRoute.js";

// List of websites you want to allow
const allowedOrigins = [
  'https://zentrok.vercel.app', 
  'https://www.zentrok.com',
  'http://localhost:3000' // Good to include for local development
];

const app = express();
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Use the CORS options
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/subscribe", summaryRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));