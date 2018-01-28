let http = require('http');
/*
  {
    "2018-01-01 00:00": [0,0,0,0,0,0]
    [left-total, right-total, left-1000, right-1000, left-2000, right-2000]
  }
  */
// module.exports = function watcher () {}
let baseUrl = 'http://event.mihoyo.com/worldbattle5/';
http.get(baseUrl, res => {
  let data = '';
  let progressReg = /progress.*arrow/;
  res.on('error', err => {
    console.error(err);
  });
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    // console.log(data);
    data = data.replace(/\n/g, '');
    data = data.replace(/[\s]{4}/g, '');
    let scores_ = data.match(/class=\"text.*?<\/text/g);
    // console.log(scores_);
    let scores = scores_.map(i => {
      return i.match(/>\d*/g)[0].substring(1);
    });
    console.log(scores);
    let progress_ = data.match(/\s=\s\d+/g);
    let progress = progress_.map(i => {
      return i.substring(3);
    });
    console.log(progress);
  });
});