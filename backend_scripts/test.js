// // for (let i = 1; i <= 425; i++) {
// //     let val = parseInt((i / 425) * 10);

// //     console.log(`${'█'.repeat(val)}${'░'.repeat(10 - val)} ${val}/10 ${i}/425`);
// // }

// // const Database = require('./database');

// // (async function () {
// //     const db = new Database('spacetraders', 'system_data');

// //     let result = await db.readMultiple({});

// //     console.log(result.res);
// // })();

// (async function () {
//     const response = await fetch('http://localhost:3001/systems', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     let json_res = await response.json();

//     console.log(
//         json_res.data.map((item) => {
//             return item.data;
//         })
//     );
// })();

// // filter = { ok: true, nope: false };

// // Object.keys(filter).forEach((item) => console.log(item));

// // const Communicator = require('./Communicator');
// // require('dotenv').config();

// // let c = new Communicator();

// // console.time('a');
// // console.timeEnd('a');

// // // (async function () {
// // //     console.log(await c.listSystems(process.env.M3T30RM0GUL_TOKEN));
// // //     // console.log(await c.registerAgent('M3T30RM0GUL'));
// // // })();

// class Item {
//     constructor(name, category, price, inStock) {
//         this.name = name;
//         this.category = category;
//         this.price = price;
//         this.inStock = inStock;
//     }

//     static createFilter(filters) {
//         return function (item) {
//             return Object.keys(filters).every((key) => filters[key](item[key]));
//         };
//     }
// }

// const items = [
//     new Item('Apple', 'Fruit', 1, true),
//     new Item('Banana', 'Fruit', 0.5, true),
//     new Item('Orange', 'Fruit', 1.2, false),
//     new Item('Milk', 'Dairy', 1.5, true),
//     new Item('Cheese', 'Dairy', 3, false),
// ];

// const filters = {
//     category: (value) => value === 'Fruit',
//     price: (value) => value >= 1 && value < 2,
//     inStock: (value) => value === true,
// };

// const filteredItems = items.filter(Item.createFilter(filters));
// console.log(filteredItems);

const System = require('./Schemas/System');
const { SystemType, WaypointType, Factions } = require('./Schemas/Types');
const Database = require('./database');

(async function () {
    const db = new Database('spacetraders', 'system_data');

    let result = await db.readMultiple({});

    let sys = result.res.map((system) => new System().load(system));

    let filters = {
        type: (value) => value == SystemType.BLACK_HOLE,
        x: (value) => value > 0,
    };

    const filtered = sys.filter(System.createFilter(filters));

    filtered.forEach((system) => console.log(system.toString()));
})();
