const students = require('../controller/students');

module.exports = function (fastify, opts, done) {
    
    fastify.get('/students', async function (request, reply) {
        const data = await students.getMany();
        reply.send({ ...data })
    });
    done();

    fastify.post('/students', async function (request, reply) {
        const data = await students.insertOne(request.body);
        reply.send({ ...data })
    });
    done();


    fastify.put('/students/:id', async function (request, reply) {
        const data = await students.updateOne({ id: request.params.id, ...request.body });
        reply.send({ ...data });
    });
    done();

    fastify.delete('/students/:id', async function (request, reply) {
        const data = await students.deleteOne(request.params.id);
        reply.send({});
    });
    done();
};