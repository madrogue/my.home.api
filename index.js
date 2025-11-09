const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.post('/echo', async (ctx) => {
  const { message } = ctx.request.body;
  ctx.body = { echo: message };
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
