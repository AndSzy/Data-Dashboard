<template>
    <div class="new-window-container">
        <h1>NewWindow Component</h1>
        <line-chart v-if="chartType === 'Line'" :dataset="dataset" :color="color"></line-chart>
        <bar-chart v-else-if="chartType === 'Bar'" :dataset="dataset" :color="color"></bar-chart>
    </div>
</template>

<script>
import LineChart from './LineChart.js';
import BarChart from './BarChart.js';


export default {
    components: {
        LineChart,
        BarChart
    },
    props: ['dataset', 'color', 'chartType'],
}
</script>

<style scoped>
.new-window-container {
    padding: 20px;
    margin: 10px;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: #fff;
}
.chart-container {
    width: 400px;
    height: 400px;
}
</style>