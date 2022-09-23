const express = require('express')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

const frogRoutes = require('./controllers/frogs');
app.use('/frogs',frogRoutes);

app.get('/', (req,res) => {
    res.send('Frog time!');
});

app.post('/', (req,res => {
    res.statusCode(405).send('Not allowed >:(')
}));

module.exports = app
