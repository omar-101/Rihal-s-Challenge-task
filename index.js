// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
// import init db
const { initdbConnection } = require('./db');

// register next.js
fastify
  .register(require('fastify-nextjs'))
  .after(() => {
    fastify.next('/');
    fastify.next('/classes');
    fastify.next('/countries');
    fastify.next('/students');
  });

// register api
fastify.register(require('./routes/classes'), { prefix: '/api' });
fastify.register(require('./routes/countries'), { prefix: '/api' });
fastify.register(require('./routes/students'), { prefix: '/api' });




// Run the server!
const start = async () => {
  try {
    await initdbConnection();
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  };
};

start();