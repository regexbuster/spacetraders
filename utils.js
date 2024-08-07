require('dotenv').config();

const Communicator = require('./Communicator.js');

(async function main() {
    com = new Communicator();

    console.log(await com.listSystems(process.env.WH0P3R_TOKEN));
})();
