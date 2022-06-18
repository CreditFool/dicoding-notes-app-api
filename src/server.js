const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: '5000',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => 'it works!',
  });

  await server.start();

  console.log(`Server start at ${server.info.uri}`);
};

init();
