import express from 'express';
import bodyParser from 'body-parser';
import dataRoutes from './routes/data.js';
const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/data', dataRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage');
});

app.get('/data/bfhl', (req, res) => {
    res.status(200);

});

app.post('/data/bfhl', (req, res) => {
    res.send(dataRoutes.resdata);
})

app.listen(PORT, () => 
    console.log(`it's alive on http://localhost:${PORT}`)
)