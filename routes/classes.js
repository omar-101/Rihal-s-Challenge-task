const classes = require('../controller/classes');

module.exports = function (fastify, opts, done) {

    fastify.get('/classes', async function (request, reply) {
        const data = await classes.getMany();
        reply.send({ ...data })
    });
    done();

    fastify.post('/classes', async function (request, reply) {
        const data = await classes.insertOne(request.body);
        reply.send({ ...data })
    });
    done();


    fastify.put('/classes/:id', async function (request, reply) {
        const data = await classes.updateOne({ id: request.params.id, ...request.body });
        reply.send({ ...data });
    });
    done();

    fastify.delete('/classes/:id', async function (request, reply) {
        const data = await classes.deleteOne(request.params.id);
        reply.send({});
    });
    done();
};