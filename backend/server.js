import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import uploadRoutes from './routes/upload.routes.js';
import contractsRoutes from './routes/contracts.route.js';
import cors from "cors";

const app = express();
app.use(express.json()); 
app.use(cookieParser());


app.use(cors({
  origin: ["http://localhost:5173", "https://assignment-fullstack-ns9n.vercel.app", "https://assignment-fullstack-ucke.vercel.app","https://assignment.devsurya.space/"],
  credentials: true,
}));





app.get('/', (req, res) => {
  res.send('API is running...');
});



app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes);
app.use('/contracts', contractsRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});


