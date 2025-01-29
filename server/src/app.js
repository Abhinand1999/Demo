import express from 'express'
import cors from 'cors';
import mongoose  from 'mongoose'
import menuRoutes from "./routes/menuRoutes";
import menuItemRoutes from "./routes/menuItemRoutes";
import bodyParser from "body-parser";

const port =3001
const app = express()
app.use(cors());



 app.use(bodyParser.json());
 app.use("/api/menus", menuRoutes);
 app.use("/api/menu-items", menuItemRoutes);



  const startServer = async () => {
    try {
      await mongoose.connect('mongodb+srv://greenarrow090909:sXBRXdIFpJkiy5ry@cluster0.qoovq.mongodb.net/',
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      console.log('Connected to MongoDB');
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
  startServer();