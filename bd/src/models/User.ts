
const Sequelize = require('sequelize');

import { database } from "../database/db";

export class User extends Sequelize.Model {
    public nombre!: string;
    public apellido!: string;
    public correo!: string;
    public contraseña!: string;

}

export interface UserI{

    nombre: string;
     apellido: string;
     correo: string;
     contraseña: string;
}

User.init (
    {
        nombre: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },

        apellido: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        contraseña: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },


    },

    {
            tableName: "users",
            sequelize: database, 
            timestamps: true
    }


);
