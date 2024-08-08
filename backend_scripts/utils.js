require('dotenv').config();

const Communicator = require('./Communicator.js');

(async function main() {
    com = new Communicator();

    console.log(await com.getAgent(process.env.M3T30RM0GUL_TOKEN));
})();
