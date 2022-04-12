module.exports.define = (sequelize, DataTypes) => {
    const Students = sequelize.define('students', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    return Students;
};


module.exports.associate = ({ models }) => {
    models.students.belongsTo(
        models.countries,
        { as: 'country', foreignKey: 'country_id' }
    );
    models.students.belongsTo(
        models.classes,
        { as: 'class', foreignKey: 'class_id' }
    );
};