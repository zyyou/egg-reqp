'use strict';
const mm = require('egg-mock');
const assert = require('assert');

describe('test/extend.test.js', () => {
  let app;

  before(() => {
    app = mm.app({
      baseDir: 'test-app',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('测试xss get query', async () => {
    const result = await app
      .httpRequest()
      .get('/query?text_enc=%3Cscript%3Ealert(%22query.text%22)%3C%2Fscript%3E&text=<script>alert("query.text")</script>')
      .expect(200);

    assert(result.body.reqp.indexOf('<') === -1, '未转义' + JSON.stringify(result.body));
    return result;
  });

  it('测试xss get params encode', async () => {
    const result = await app.httpRequest().get('/params/%3Cscript%3Ealert(%22params.text%22)%3C%2Fscript%3E').expect(200);

    assert(result.body.reqp.indexOf('<') === -1, '未转义' + JSON.stringify(result.body));
    return result;
  });

  it('测试xss post body', async () => {
    const result = await app
      .httpRequest()
      .post('/body')
      .send({
        text: '<script>alert("query.text")</script>',
        text_enc: '%3Cscript%3Ealert(%22body.text%22)%3C%2Fscript%3E',
      })
      .expect(200);

    assert(result.body.reqp.indexOf('<') === -1, '未转义' + JSON.stringify(result.body));
    return result;
  });
});
