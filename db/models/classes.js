module.exports.define = (sequelize, DataTypes) => {
    const Classes = sequelize.define('classes', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        class_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Classes;
};


module.exports.associate = ({ models }) => {

};