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
                dailyEstimates: []
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
