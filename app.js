/**
 * Created by Yana Tokareva on 27.04.2018.
 */
'use strict';
const koa = require('koa');
const router = require('./router');
const app = module.exports = new koa();

app.use(router);

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
