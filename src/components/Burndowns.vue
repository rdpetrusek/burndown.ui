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
                title: "MHP - Common Package on Asset Manager",
                startDate:"05/02/2018",
                endDate:"05/8/2018",
                initialEstimate: 2,
                dailyEstimates: [2,2]
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
