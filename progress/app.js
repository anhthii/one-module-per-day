var req = require('request');
var fs = require('fs');
var ProgressBar = require('progress');

req('http://cachefly.cachefly.net/100mb.test', { headers: { 'user-agent': 'test' }})
  .on('response', function(response) {
    var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
      complete: '=',
      incomplete: ' ',
      width: 100,
      total: parseInt(response.headers['content-length'], 10)
    });

    response.on('data', function (chunk) {
      bar.tick(chunk.length);
    });

    response.on('end', function () {
      console.log('\n');
    });
}).pipe(fs.createWriteStream('text.data'));

