import express from "express";
import morgan from "morgan";

import connectDatabase from "./src/framework/database/config/dbConfig";
import userRoutes from "./src/interface/routes/userRoutes";

import { ErrorHandler } from "./src/utils/errorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(ErrorHandler);
app.use('/', userRoutes);


const port: number = 8000;
connectDatabase();
app.listen(port, (): void => console.log(`Server running on ${port}...`));
