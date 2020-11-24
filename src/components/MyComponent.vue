<template>
  <div class="new-window-container">
    <div>
      <h1>My Component</h1>
      <router-link :to="TheModalLink" class="btn btn-primary float-right">Edit Chart</router-link>
    </div>
    <line-chart
      v-if="chart.chartType === 'Line'"
      :color="chart.color"
      :dataset="chart.dataset"
    ></line-chart>
    <bar-chart
      v-else-if="chart.chartType === 'Bar'"
      :color="chart.color"
      :dataset="chart.dataset"
    ></bar-chart>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";
import BarChart from "./BarChart.js";

export default {
  components: {
    LineChart,
    BarChart,
  },
  props: ['chart'],
  data() {
    return {
      TheModalLink: {
        name: 'TheModal',
        params: {
          chart: this.chart
        }
      },
    }
  }
};
</script>

<style scoped>
</style>