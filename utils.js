require('dotenv').config();

const communicator = require('./Communicator.js');

(async function main() {
    // console.log(await apiRegisterAgent('REGEX', 'COSMIC'));
    console.log(await communicator.viewFactions());
})();
