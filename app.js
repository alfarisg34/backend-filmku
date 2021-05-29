const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

const port = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: 'Running...'
    });
});
app.use('/api', routes);

app.listen(5000, () => {
    console.log(`Listening to port 5000`);
});