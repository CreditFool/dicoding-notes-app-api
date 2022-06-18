const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: (request, h) => {
      const response = h.response('success')
        .type('application/json');
      return response;
    },
  },
];

module.exports = routes;
