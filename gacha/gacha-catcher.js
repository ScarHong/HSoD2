const cheerio = require('cheerio');
const http = require('http');
const fs = require('fs');

const baseUrl = 'http://cms.mihoyo.com/mihoyo/hsod2_gacha_rules/index.php/gacha/';
const pools = ['high', 'custom', 'special'];
const tail = '?region=3_1';

module.exports = () => {
  const all = {};
  return Promise.all(pools.map(p => {
    return catchOne(p).then(data => all[p] = data);
  })).then(() => {
    saveFile(JSON.stringify(all, null, 2), 'gacha.json');
  });
};

function catchOne(pool) {
  const url = baseUrl + pool + tail;
  return new Promise((resolve, reject) => {
    const req = http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', err => {
        if (err) reject(err);
        else parseHTML(data).then(resolve, reject);
      });
      res.on('error', reject);
    });
    req.on('error', reject);
  });
}

function parseHTML (str) {
  return new Promise((resolve, reject) => {
    const $ = cheerio.load(str, {decodeEntities: false});
    const arr = [];
    let isGod = true;
    $('.equip-prob tbody tr').each(function () {
      const data = [];
      $(this).children().each(function () {
        let text = $(this).text();
        if (text.indexOf('使魔') !== -1) isGod = false;
        data.push(text);
      });
      data.push(isGod);
      arr.push(data);
    });
    const form = formatData(arr);
    // saveFile(JSON.stringify(form, null, 2), 'gacha.json', err => {
    //   if (err) reject(err);
    //   else resolve();
    // });
    resolve(form);
  });
}

function saveFile (f, p) {
  fs.writeFile(p, f, {encoding: 'utf-8'}, () => {});
}

function formatData (arr) {
  const form = [];
  let rate = 0;
  let god = 0;
  for (let e of arr) {
    let [name, _, prop, isGod] = e;
    rate = rate + parseInt(prop.replace('.', ''));
    if (isGod) god = rate;
    form.push({name, rate});
  }
  return {
    equips: form,
    total: rate,
    god
  }
}