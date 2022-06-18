const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: '5000',
  });

  server.route(routes);

  await server.start();
  console.log(`Server start at ${server.info.uri}`);
};

init();
