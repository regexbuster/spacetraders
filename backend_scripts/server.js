const express = require('express');
const Database = require('./database');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/systems', async (req, res) => {
    const db = new Database('spacetraders', 'system_data');

    let values = await db.readMultiple({});

    res.send({ data: values.res });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
