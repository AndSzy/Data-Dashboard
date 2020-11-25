<template>
  <div id="app">
    <the-header @submitForm="newComponent"></the-header>
    <div class="container-fluid">
      <div class="row">
        <my-component
        class="col-4 bg-white"
        v-for="chart in charts"
        :key="chart.id"
        :chart="chart"
      ></my-component>
      </div>
    </div>
        <router-view @chart-changed="updateCharts"></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MyComponent from "./components/MyComponent.vue";

import { dataset1, dataset2 } from "./components/FakeData.js";


export default {
  name: "App",
  components: {
    TheHeader,
    MyComponent
  },
  data() {
    return {
      dataset1,
      dataset2,
      charts: [],
    };
  },
  methods: {
    newComponent(newChart) {
      let newChartObject = {};
      newChartObject.id = new Date().toISOString();
      newChartObject.color = newChart.color;
      newChartObject.chartType = newChart.chartType;
      newChartObject.datasetName = newChart.datasetName;
      if (newChart.datasetName === "data1") {
        newChartObject.dataset = this.dataset1;
      } else if (newChart.datasetName === "data2") {
        newChartObject.dataset = this.dataset2;
      }

      this.charts.push(newChartObject);
    },
    updateCharts(currentChart) {
      this.charts.forEach((chart) => {
        if (chart.id === currentChart.id) {
          chart.chartType = currentChart.chartType;
          chart.color = currentChart.color;
          if (currentChart.datasetName === "data1") {
            chart.dataset = this.dataset1;
          } else if (currentChart.datasetName === "data2") {
            chart.dataset = this.dataset2;
          }
        }
      });
    },
  
  },
};
</script>

<style>

</style>
