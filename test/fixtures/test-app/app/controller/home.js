const Controller = require('egg').Controller;

class HomeController extends Controller {
  async params() {
    this.logger.warn('params', this.ctx.params);
    const data = {
      text: this.ctx.params.text,
      reqp: this.ctx.reqp.params.text,
    };
    this.logger.warn('res', data);
    this.ctx.body = data;
  }

  async query() {
    this.logger.warn('query', this.ctx.query);
    const data = {
      text: this.ctx.query.text,
      reqp: this.ctx.reqp.query.text,
      text_enc: this.ctx.query.text_enc,
      reqp_enc: this.ctx.reqp.query.text_enc,
    };
    this.logger.warn('res', data);
    this.ctx.body = data;
  }

  async body() {
    this.logger.warn('body', this.ctx.request.body);
    const data = {
      text: this.ctx.request.body.text,
      reqp: this.ctx.reqp.body.text,
      text_enc: this.ctx.request.body.text_enc,
      reqp_enc: this.ctx.reqp.body.text_enc,
    };
    this.logger.warn('res', data);
    this.ctx.body = data;
  }
}

module.exports = HomeController;
