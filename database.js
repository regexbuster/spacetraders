const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

class Database {
    constructor(database, collection) {
        this.uri = `mongodb+srv://insandouts-api:${process.env.MONGODB_PASS}@general.wfuxmik.mongodb.net/?appName=General`;
        this.database = database;
        this.collection = collection;
    }

    ping() {
        console.log('pong');
    }

    async getConnectedClient() {
        return new MongoClient(this.uri).connect();
    }

    async createOne(newDocument) {
        let client = await this.getConnectedClient();

        try {
            let result = await client
                .db(this.database)
                .collection(this.collection)
                .insertOne(newDocument);

            if (result) {
                return { ok: true, res: result };
            } else {
                return { ok: false, res: result };
            }
        } catch (err) {
            console.error(err);
        } finally {
            await client.close();
        }
    }

    async createMultiple(newDocuments) {
        let client = await this.getConnectedClient();

        try {
            let result = await client
                .db(this.database)
                .collection(this.collection)
                .insertMany(newDocuments);

            if (result) {
                return { ok: true, res: result };
            } else {
                return { ok: false, res: result };
            }
        } catch (err) {
            console.error(err);
        } finally {
            await client.close();
        }
    }

    async readOne(filter) {
        let client = await this.getConnectedClient();

        try {
            let result = await client
                .db(this.database)
                .collection(this.collection)
                .findOne(filter);

            if (result) {
                return { ok: true, res: result };
            } else {
                return { ok: false, res: result };
            }
        } catch (err) {
            console.error(err);
        } finally {
            await client.close();
        }
    }

    async readMultiple(filter) {
        let client = await this.getConnectedClient();

        try {
            let result = await client
                .db(this.database)
                .collection(this.collection)
                .find(filter);

            if (result) {
                return { ok: true, res: result };
            } else {
                return { ok: false, res: result };
            }
        } catch (err) {
            console.error(err);
        } finally {
            await client.close();
        }
    }

    async deleteAll() {
        let client = await this.getConnectedClient();

        try {
            const result = await client
                .db(this.database)
                .collection(this.collection)
                .deleteMany();

            if (result) {
                return { ok: true, res: result };
            } else {
                return { ok: false, res: result };
            }
        } catch (err) {
            console.error(err);
        } finally {
            await client.close();
        }
    }
}

module.exports = Database;
