const { db } = require('../db');

exports.getMany = async () => {
    const { rows, count } = await db.students.findAndCountAll({});
    return { rows, count }
};

exports.insertOne = async ({ class_id, country_id, name, date_of_birth }) => {
    const result = await db.students.create({
        class_id, country_id, name, date_of_birth,
    });
    return result;
};


exports.updateOne = async ({ id, class_id, country_id, name, date_of_birth }) => {
    const result = await db.students.update(
        {
            class_id, country_id, name, date_of_birth,
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
    await db.students.destroy({
        where: { id }
    });
};
