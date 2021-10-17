const Sequelize = require('selquelize');

const DB_NAME = 'db_ventas';

const DB_USER = 'root';

const DB_PASS = '123ho123';

export const database = new Sequelize(
 DB_NAME,
 DB_USER,
 DB_PASS,

 {
    host:'localhost',
    dialect:'mysql',
    port: 3306
 }

);

database.sync({force: true})
.then(function () {
    console.log("Base de datos creada Correctamente")
})