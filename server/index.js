import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import {Authrouter} from './routes/auth.js';
import {Blogrouter} from './routes/blog.js';
import ConnectDB from './database/db.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const PORT = process.env.PORT || '8000';
const MONGO_URL = process.env.MONGO_URL

// routes
app.use('/api/auth' , Authrouter);
app.use("/api/blog" , Blogrouter);

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
})

ConnectDB(MONGO_URL);