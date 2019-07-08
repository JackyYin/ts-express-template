import express = require('express');
import morgan = require('morgan');

const app: express.Application = express();
const devLogger: express.RequestHandler = morgan('dev');

app.use(devLogger);

app.get('/', function (req: express.Request, res: express.Response) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
