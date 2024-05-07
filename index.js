import express from "express";
import {dirname} from  'path';
import {fileURLToPath} from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(`${port}`, () => {
    console.log("Server is running on port: ", `${port}`);
});