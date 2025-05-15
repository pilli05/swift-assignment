import express from "express";
import { getDatabase, connectToDatabase } from "./db/db";
import userRouter from "./api/routes/userRouter";
import postRouter from "./api/routes/postRouter";
import commentRouter from "./api/routes/commentRouter";
import loadRouter from "./api/routes/loadRoutes";

const app = express();

const PORT = 4000;

app.use(express.json());

app.use(loadRouter);
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);

const startServer = () => {
  try {
    connectToDatabase();
    getDatabase();
    app.listen(PORT, () => {
      console.log(`Server started on port ${4000}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

startServer();
