<template>
<!-- tests -->
    <div>
        <div class="charts" v-for="chartData in chartsData">
            <div class="chartWrapper">
                <chart :data="chartData"></chart>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Burndowns',
  data () {
    return {
        chartsData:[
            {
                id:1,
                title: "story 1",
                startDate:"04/16/2018",
                endDate:"04/23/2018",
                initialEstimate: 20,
                dailyEstimates: [20,20,13, 8]
            },{
                id:2,
                title: "story two",
                startDate:"04/20/2018",
                endDate:"04/24/2018",
                initialEstimate: 13,
                dailyEstimates: [13, 12, 10, 8]
            },{
                id:3,
                title: "story 3",
                startDate:"04/24/2018",
                endDate:"05/10/2018",
                initialEstimate: 5,
                dailyEstimates: [5, 4, 3, 3, 1]
            }
        ]
    }
  }
}
</script>

<style scoped>
.chartWrapper {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>
