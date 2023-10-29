import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/index.js';
const app = express();


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',router);

const PORT = process.env.PORT || '8000';

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
})