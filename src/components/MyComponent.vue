<template>
  <div>
    <div>
      <h1>My Component</h1>
      <button class="btn btn-primary" @click="openModal">Edit</button>
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
  props: {
    chart: Object,
    openModalAction: Function
  },
  data() {
    return {
      TheModalLink: {
        name: 'TheModal',
        params: {
          chart: this.charts
        }
      },
     
    }
  },
  methods: {
    openModal() {
      this.openModalAction(this.chart);
    },
  },
  
};
</script>

<style scoped>

</style>