<template>
  <div class="hello">
      <h1>{{data.title}}</h1>
    <canvas :id="data.id" height="100" width="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import moment from 'moment';

export default {
  name: 'Chart',
  data () {
    return {
      msg: 'Burndown Chart'
    }
  },
  props: [
      'data'
  ],
  mounted: function() {
      console.log(this.dailyEstimates);
      this.draw_chart(this.data.startDate, this.data.endDate, this.data.initialEstimate, this.data.dailyEstimates);
  },
methods: {
    is_weekday: function(momentDate){
        return momentDate.isoWeekday() < 6;
    },
    next_weekday: function(date){
        var isoWeekday = date.isoWeekday();
        if(isoWeekday > 4){
            date.add(8 - isoWeekday, 'days');
            return;
        }

        date.add(1, 'days');
    },
    get_days: function(startDate, endDate){
        var dateFormat = 'ddd MM/DD/YYYY';
        var days = [];
        var currentDate = startDate.clone();
        
        days.push(currentDate.format(dateFormat));
        while(currentDate < endDate){
            this.next_weekday(currentDate);
            days.push(currentDate.format(dateFormat));
        }
        return days;
    },
    draw_chart: function(start, end, totalPoints, actuals){
    var startDate = moment(start);
    var currentDate = startDate.clone();
    var endDate = moment(end);

    var idealData = [];
    var labels = this.get_days(startDate, endDate);
    var dailyIdealPoints = totalPoints / (labels.length - 1);
    
    for(var i = 0; i<labels.length; i++){
        idealData.push(totalPoints - (i * dailyIdealPoints));
    }
    
    var ctx = document.getElementById(this.data.id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Current',
                data: actuals,
                borderColor: "red",
                backgroundColor: "rgba(224, 108, 112, 0)",
                borderWidth: 3
            },{
                label: 'Ideal',
                data: idealData,
                borderColor: "green",
                backgroundColor: "rgba(111, 2, 112, 0)",
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
