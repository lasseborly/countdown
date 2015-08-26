new Vue({
  el: '#app',

  data: {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    diff: 0,
    returnDate: '2016-02-18 18:00',
  },

  methods: {
    setDiff: function(){
      var now = moment();
      var then = moment(this.returnDate);
      this.diff = then.diff(now);
    },
    setTimeFromMillis: function(){
      this.seconds = parseInt((this.diff / 1000) % 60);
      this.minutes = parseInt((this.diff / (1000*60)) % 60);
      this.hours = parseInt((this.diff / (1000*60*60)) % 24);
      this.days = parseInt((this.diff / (1000*60*60*24)) % 7);
    },
    updateTime: function(){
      this.setDiff();
      this.setTimeFromMillis();
    }
  },

  ready: function(){
    moment.locale('dk');
    this.updateTime();
    setInterval(this.updateTime, 1000);
  }
});

$('document').ready(function() {
                $('#app').tubular({
                  videoId: 'A9Tp5fl18Ho',
                  mute: false,
                  start: 491
                });
        });
