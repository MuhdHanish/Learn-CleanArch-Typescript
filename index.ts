import express from "express";
import morgan from "morgan";
import connectDatabase from "./src/framework/database/dbConfig";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



const port: number = 8000;
app.listen(port, (): void => console.log(`Server running on ${port}...`));
connectDatabase();
