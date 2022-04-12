module.exports.define = (sequelize, DataTypes) => {
    const Countries = sequelize.define('countries', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Countries;
};


module.exports.associate = ({ models }) => {

};