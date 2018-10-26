// サンプル
// リクエストは http://localhost:3000/hogea | jq .

var express = require('express');
var app = express();

var User = {
  find: function(params)
  {
    return {
      name: params.name
    };
  }
}

var HelloController = function(req, res)
{
  var user = User.find(req.params);

  res.set('Content-Type', 'application/json');
  res.json({
    hello: 'world',
    name: user.name,
  });
}

app.get('/:name', HelloController);

var server = app.listen(process.env.PORT || 3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});