const { db } = require('../db');

exports.getMany = async () => {
    const { rows, count } = await db.classes.findAndCountAll({});
    return { rows, count }
};

exports.insertOne = async ({ name }) => {
    const result = await db.classes.create({
        name,
    });
    return result;
};


exports.updateOne = async ({ id, name }) => {
    const result = await db.classes.update(
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


exports.deleteOne = async id => {
    await db.classes.destroy({
        where: { id }
    });
};