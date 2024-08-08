// for (let i = 1; i <= 425; i++) {
//     let val = parseInt((i / 425) * 10);

//     console.log(`${'█'.repeat(val)}${'░'.repeat(10 - val)} ${val}/10 ${i}/425`);
// }

const Database = require('./database');

(async function () {
    const db = new Database('spacetraders', 'system_data');

    let result = await db.readMultiple({});

    console.log(result.res);
})();
