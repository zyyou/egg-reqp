'use strict';

module.exports = (app) => {
  const { router, controller } = app;

  router.get('/params/:text', controller.home.params);
  router.get('/query', controller.home.query);
  router.post('/body', controller.home.body);
};
