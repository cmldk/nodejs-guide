/*
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '', { dialect: 'mysql', host: "localhost" });

module.exports = sequelize;
*/

let _db;

const mongoConnect = (callback) => {
    const mongodb = require('mongodb');
    const MongoClient = mongodb.MongoClient;

    MongoClient.connect('mongodb+srv://cemaldak:2533cemal@cluster0.l2fq7.mongodb.net/shop?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected!');
            _db = client.db()
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No db found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

