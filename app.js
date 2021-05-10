const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.listen(5000, () => {
    console.log(`Listening to port 5000`);
});