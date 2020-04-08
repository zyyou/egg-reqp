const Controller = require('egg').Controller;

class HomeController extends Controller {
  async params() {
    const data = {
      text: this.ctx.params.text,
      reqp: this.ctx.reqp.params.text,
    };
    this.logger.debug({ params: this.ctx.params, data });
    this.ctx.body = data;
  }

  async query() {
    const data = {
      text: this.ctx.query.text,
      reqp: this.ctx.reqp.query.text,
      text_enc: this.ctx.query.text_enc,
      reqp_enc: this.ctx.reqp.query.text_enc,
      reqp_null: this.ctx.reqp.query.xxx,
    };
    this.logger.debug({ params: this.ctx.query, data });
    this.ctx.body = data;
  }

  async body() {
    const data = {
      text: this.ctx.request.body.text,
      reqp: this.ctx.reqp.body.text,
      text_enc: this.ctx.request.body.text_enc,
      reqp_enc: this.ctx.reqp.body.text_enc,
    };
    this.logger.debug({ params: this.ctx.request.body, data });
    this.ctx.body = data;
  }
}

module.exports = HomeController;
