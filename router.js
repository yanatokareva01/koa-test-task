/**
 * Created by Yana Tokareva on 27.04.2018.
 */
const route = require('koa-router');
const router = new route();

const books = require('./controllers/books');
const generator = require('./controllers/generator');

router.get('/books', books.get);
router.post('/books', books.add);
router.get('/generate', generator.generate);

module.exports = router.routes();