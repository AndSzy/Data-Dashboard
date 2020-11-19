<template>
    <div class="new-window-container">
        <h1>My Component</h1>
        <form>
            <div class="form-control">
                <label for="chartType">Choose chart type.</label>
                <select name="chartType" id="chartType" v-model="selectedChartType">
                    <option value="Line">Line</option>
                    <option value="Bar">Bar</option>
                </select>
            </div>
            <div class="form-control">
                <label for="chartColor">Choose chart color.</label>
                <select name="chartColor" id="chartColor" v-model="selectedColor">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div class="form-control">
                <label for="chartData">Choose chart dataset.</label>
                <select name="chartData" id="chartData" v-model="selectedDatasetName">
                    <option value="data1">Data 1</option>
                    <option value="data2">Data 2</option>
                </select>
            </div>
        </form>
        <line-chart v-if="selectedChartType === 'Line'" :color="color" :dataset="dataset" ></line-chart>
        <bar-chart v-else-if="selectedChartType === 'Bar'" :color="color" :dataset="dataset" ></bar-chart>
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
    props: ['id', 'chartType', 'color', 'datasetName', 'dataset'],
    data() {
        return {
            selectedChartType: this.chartType,
            selectedColor: this.color,
            selectedDatasetName: this.datasetName,
            
        }
    },
    watch: {
        selectedChartType() {
            this.$emit('editChart', this.id, this.selectedChartType, this.selectedColor, this.selectedDatasetName);
        },
        selectedColor() {
            this.$emit('editChart', this.id, this.selectedChartType, this.selectedColor, this.selectedDatasetName);
        },
        selectedDatasetName() {
            this.$emit('editChart', this.id, this.selectedChartType, this.selectedColor, this.selectedDatasetName);
        }
    },
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