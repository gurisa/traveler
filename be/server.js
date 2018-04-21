const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

function api(url) {
  return '/v0/' + url;
}

app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log('Server started!');
});

app.route(api('data')).get((req, res) => {
  res.send({
    data: [{ name: 'lilly' }, { name: 'lucy' }]
  });
});