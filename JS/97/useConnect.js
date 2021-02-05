const app = require('connect')();
app.use(require('./logger'));

app.use((req, res, next) => {
  res.setHeader('content-type', 'text/html');
  next();
});

app.use(require('./queryParser'));
app.use(require('./please'))

app.use('/home', (req, res, next) => {
  res/*.write*/.end('<h1>Welcome to PCS home page</h1>');
  //next();
});

app.use('/about', (req, res, next) => {
  res/*.write*/.end('<h1>PCS is a great organization</h1>');
  //next();
});

app.use('/makeError', (req, res, next) => {
  foo();
  //throw new Error('OOPS. Something went wrong!');
  next();
});



app.use('/sayHello', (req, res, next) => {
  //const parsedUrl = url.parse(req.url, true);
  res.end(`Hello ${/*parsedUrl.*/req.query.name || ' Unknown'}`);
  next();
});

app.use('/sayGoodbye', (req, res, next) => {
  // const parsedUrl = url.parse(req.url, true);
  res.end(`Goodbye ${/*parsedUrl*/req.query.name || ' Unknown'}`);
  next();
});

app.use((error, req, res, next) => {
  res.statusCode = 400;
  console.log(error);
  res.write(`<h5>Something went wrong</h5>${error.message}`);
  next(error);
});

app.use((error, req, res, next) => {
  res.end(`<h6>No really, something went wrong</h6>${error.message}`);
  next();
});

app.listen(80);