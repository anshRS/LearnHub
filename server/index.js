import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import router from './routes/index.js';
import ConnectDB from './database/db.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const PORT = process.env.PORT || '8000';
const MONGO_URL = process.env.MONGO_URL

app.use('api/auth' , router);
app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
})

ConnectDB(MONGO_URL);