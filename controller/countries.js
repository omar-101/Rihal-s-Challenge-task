const { db } = require('../db');

exports.getMany = async () => {
    const { rows, count } = await db.countries.findAndCountAll({});
    return { rows, count }
};

exports.insertOne = async ({ name }) => {
    const result = await db.countries.create({
        name,
    });
    return result;
};


exports.updateOne = async ({ id, name }) => {
    const result = await db.countries.update(
        {
            name,
        },
        {
            where: {
                id,
            },
            returning: true,
        }
    );
    return result;
};


exports.deleteOne = async ({ id }) => {
    await db.countries.destroy({
        where: { id }
    });
};