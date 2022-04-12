const countries = require('../controller/countries');

module.exports = function (fastify, opts, done) {
    
    fastify.get('/countries', async function (request, reply) {
        const data = await countries.getMany();
        reply.send({ ...data })
    });
    done();

    fastify.post('/countries', async function (request, reply) {
        const data = await countries.insertOne(request.body);
        reply.send({ ...data })
    });
    done();

    fastify.put('/countries/:id', async function (request, reply) {
        const data = await countries.updateOne({ id: request.params.id, ...request.body });
        reply.send({ ...data });
    });
    done();

    fastify.delete('/countries/:id', async function (request, reply) {
        const data = await countries.deleteOne(request.params.id);
        reply.send({});
    });
    done();
};