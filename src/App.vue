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


export default {
  name: "App",
  components: {
    TheHeader,
    MyComponent,
  },
  watch: {
    $route() {
      this.showModal = true;
    }
  },
  data() {
    return {
      charts: [],
      showModal: false,
      dataset1: [
        {
          x: new Date(2018, 11, 24),
          y: 1,
        },
        {
          t: new Date(2019, 11, 24),
          y: 10,
        },
        {
          t: new Date(2020, 11, 17),
          y: 12,
        },
      ],
      dataset2: [
        {
          x: new Date(2018, 11, 24),
          y: 10,
        },
        {
          t: new Date(2019, 11, 24),
          y: 1,
        },
        {
          t: new Date(2020, 11, 17),
          y: 20,
        },
      ],
    };
  },
  methods: {
    newComponent(newChartType, newChartColor, newChartData) {
      let newChartObject = {};
      newChartObject.id = new Date().toISOString();
      newChartObject.color = newChartColor;
      newChartObject.chartType = newChartType;
      newChartObject.datasetName = newChartData;
      if (newChartData === "data1") {
        newChartObject.dataset = this.dataset1;
      } else if (newChartData === "data2") {
        newChartObject.dataset = this.dataset2;
      }

      this.charts.push(newChartObject);
    },
    updateCharts(id, chartType, color, dataName) {
      this.charts.forEach((chart) => {
        if (chart.id === id) {
          chart.chartType = chartType;
          chart.color = color;
          if (dataName === "data1") {
            chart.dataset = this.dataset1;
          } else if (dataName === "data2") {
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
