require('dotenv').config();

const Communicator = require('./Communicator.js');
const Database = require('./database.js');

(async function () {
    let com = new Communicator();
    let db = new Database('spacetraders', 'system_data');

    let page = 1;
    let limit = 20;

    const resp = await db.deleteAll();

    const intervalId = setInterval(async function () {
        if (page > 425) {
            clearInterval(intervalId);
            return;
        }

        let val = parseInt((page / 425) * 10);

        console.log(
            `${'█'.repeat(val)}${'░'.repeat(10 - val)} ${val}/10 ${page}/425`
        );

        const response = await com.listSystems(
            process.env.M3T30RM0GUL_TOKEN,
            page,
            limit
        );

        const dbinput = response.data.map((item) => {
            return {
                symbol: item.symbol,
                x: item.x,
                y: item.y,
                page: page,
                data: item,
            };
        });

        db.createMultiple(dbinput);
        page++;
    }, 3000);
})();
