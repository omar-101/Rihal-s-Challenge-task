
const Sequelize = require('sequelize');

const db = {};

const databaseCredentials = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'rihal_db',
    password: '0000',
    dialect: 'mysql'
};

module.exports.initdbConnection = async function connectToPostgres() {
    try{
        const sequelize = new Sequelize(
                databaseCredentials.database, 
                databaseCredentials.user, 
                databaseCredentials.password, {
                host: databaseCredentials.host,
                port: databaseCredentials.port,
                dialect: databaseCredentials.dialect,
                logging: false,
            }
        );
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        db.Sequelize = Sequelize;
        db.sequelize = sequelize;

        ['classes', 'countries', 'students'].forEach(schema => {
            db[schema] =  require(`./models/${schema}`).define(sequelize, Sequelize)
        });

        // sync
        await sequelize.sync();

        // do associations
        ['classes', 'countries', 'students'].forEach(schema => {
            require(`./models/${schema}`).associate(sequelize);
        });

        console.log('Tables created successfully.');
    }catch(err){
        console.log('Unable to connect to the database:', err);
        throw err;
    }
};

module.exports.db = db;

