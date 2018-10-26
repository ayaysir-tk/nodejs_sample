// 超簡易版のサンプル
var http = require('http');
var contents = "";
http.createServer(function (req, res) {

  // text/plain 用の戻りを設定
  res.writeHead(200, {'Content-Type': 'text/plain'});
  contents = "Hello World 2-3\n";
  contents += "Hello World 2-4\n";
  res.end(contents);

}).listen(3000);
 
console.log('Server running at http://localhost:3000/');
