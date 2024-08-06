require('dotenv').config();

const Communicator = require('./Communicator.js');

(async function main() {
    com = new Communicator();

    // console.log(await com.registerAgent('M3t30rM0gul', 'COSMIC'));
    console.log(await com.factions.view(process.env.M3T30RM0GUL_TOKEN));
})();
