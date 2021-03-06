//import('vue.min.js');
//import('axios.min.js');
//import('echarts.min.js');
//import('line.min.js');

((Vue, axios) => {
'use strict';
let app = new Vue({
  el: '#app',
  data: {
    charts: {
      main: {
        columns: [], rows: [],
        title: { text: '总分' }
      },
      scores: {
        columns: [], rows: [],
        title: { text: '分数线' }
      },
      delta: {
        columns: [], rows: [],
        title: { text: '分数变化' }
      },
      leftMargin: {
        columns: [], rows: [],
        title: { text: '分差 (闇★Revolution - Kirakira☆気分)' }
      },
      rightMargin: {
        columns: [], rows: [],
        title: { text: '分差 (Kirakira☆気分 - 闇★Revolution)' }
      },
      marginDelta: {
        columns: [], rows: [],
        title: { text: '分差变化' }
      }
    },
    settings: {
      legendPosition: 'top',
      loading: false,
      colors: ['#fa5788', '#83b9ff'],
      inverseColors: ['#83b9ff', '#fa5788']
    },
    styles: {
      halfScreen: {
        width: 'calc(50% - 60px)',
        display: 'inline-block'
      },
    },
    chartSettings: { scale: [true, true] },
    areaChart: {
      scale: [true, true],
      area: true
    },
    zoom: {
      type: 'slider',
      start: 0,
      end: 100
    },
    visualMap: [{
      type: 'piecewise',
      pieces: [
        {max: -1, label: '闇★Revolution', color: '#fa5788'},
        {min: 0, label: 'Kirakira☆気分', color: '#83b9ff'}
      ],
      right: 0,
      top: 0
    }]
  },
  created () {
    this.loadData();
  },
  methods: {
    loadData () {
      let settings = this.settings;
      settings.loading = true;
      let main = this.charts.main;
      let scores = this.charts.scores;
      let delta = this.charts.delta;
      let leftMargin = this.charts.leftMargin;
      let rightMargin = this.charts.rightMargin;
      let marginDelta = this.charts.marginDelta;
      axios.get('/worldbattle/20181/data').then(res => {
        let data = res.data;
        parseMainData(main, data);
        parseScores(scores, data);
        parseDelta(delta, main);
        parseMargin(leftMargin, rightMargin, marginDelta, main);
        settings.loading = false;
      });
    }
  },
  components: { VeLine }
});
function parseMainData (main, data) {
  let rows = [];
  let totalDelta = 0;
  for (let key in data) {
    let row = {
      '时间': key.substring(5),
      '闇★Revolution': data[key]['faction_total_point'][1],
      'Kirakira☆気分': data[key]['faction_total_point'][2],
    };
    rows.push(row);
    totalDelta = data[key]['faction_total_point'][1] - data[key]['faction_total_point'][2];
  }
  main.columns =  [
    '时间',
    '闇★Revolution',
    'Kirakira☆気分',
  ];
  main.rows = rows;
  main.title.subtext = `分差: ${totalDelta > 0 ? totalDelta : -totalDelta}`;
}
function parseScores (scores, data) {
  let rows = [];
  for (let key in data) {
    let row = {
      '时间': key.substring(5),
      '闇★Revolution 前 1000 分数线': data[key]['faction_1000_point'][1],
      'Kirakira☆気分 前 1000 分数线': data[key]['faction_1000_point'][2],
    };
    rows.push(row);
  }
  scores.columns =  [
    '时间',
    '闇★Revolution 前 1000 分数线',
    'Kirakira☆気分 前 1000 分数线',
  ];
  scores.rows = rows;
}
function parseDelta (delta, main_) {
  let rows = [];
  let main = main_.rows;
  for (let i = 1; i < main.length; i++) {
    let now = main[i], pre = main[i - 1];
    let row = {
      '时间': now['时间'],
      '闇★Revolution': now['闇★Revolution'] - pre['闇★Revolution'],
      'Kirakira☆気分': now['Kirakira☆気分'] - pre['Kirakira☆気分']
    };
    rows.push(row);
  }
  delta.columns = [
    '时间',
    '闇★Revolution',
    'Kirakira☆気分'
  ];
  delta.rows = rows;
}
function parseMargin (lm, rm, delta, main_) {
  let lr = [], rr = [], dm = [];
  let pos = 0, neg = 0, sum = 0;
  let main = main_.rows;
  for (let i = 0; i < main.length; i++) {
    let now = main[i];
    let margin = now['闇★Revolution'] - now['Kirakira☆気分'];
    if (i != 0) {
      let pre = main[i - 1];
      let preMargin = pre['闇★Revolution'] - pre['Kirakira☆気分'];
      let deltaMargin = preMargin - margin;
      dm.push({
        '时间': now['时间'],
        '分差变化': deltaMargin
      });
      // sum
      sum++;
      if (deltaMargin > 0) pos++;
      else neg ++;
    }
    lr.push({
      '时间': now['时间'],
      '分差': margin
    });
    rr.push({
      '时间': now['时间'],
      '分差': -margin
    });
  }
  lm.columns = [ '时间', '分差' ];
  lm.rows = lr;
  rm.columns = [ '时间', '分差' ];
  rm.rows = rr;
  delta.columns = ['时间', '分差变化'];
  delta.rows = dm;
  delta.title.subtext = `☆${(pos / sum * 100).toFixed(2)}% : ★${(neg / sum * 100).toFixed(2)}%`;
}

})(Vue, axios);