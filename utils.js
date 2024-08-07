require('dotenv').config();

const Communicator = require('./Communicator.js');

(async function main() {
    com = new Communicator();

    // console.log(await com.registerAgent('M3t30rM0gul', 'COSMIC'));
    // console.log(await com.viewSystems(process.env.M3T30RM0GUL_TOKEN, 2));
    // const response = await com.viewWaypoints(
    //     process.env.M3T30RM0GUL_TOKEN,
    //     'X1-UF22'
    // );

    // console.log(response.data[1].factions);

    // console.log(await com.viewShips(process.env.M3T30RM0GUL_TOKEN));

    console.log(
        await com.getContract(
            process.env.M3T30RM0GUL_TOKEN,
            'clziy6uhve02ds60c8qhh0ac9'
        )
    );
})();
