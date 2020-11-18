<template>
  <div id="app">
    <the-header @submitForm="newChart"></the-header>
    <div class="main-container">
      <new-window
        v-for="chart in charts"
        :key="chart.id"
        :color="chart.color"
        :chartType="chart.chartType"
        :dataset="chart.dataset"
      ></new-window>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import NewWindow from "./components/NewWindow.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    NewWindow,
  },
  data() {
    return {
      charts: [
        {
          id: 0,
          color: "#f33939",
          chartType: "Line",
          dataset: [
            { x: new Date(2018, 11, 24), y: 7 },
            { x: new Date(2019, 11, 24), y: 3 },
            { x: new Date(2020, 11, 24), y: 6 },
          ],
        },

        {
          id: 1,
          color: "green",
          chartType: "Bar",
          dataset: [
            { x: new Date(2018, 11, 24), y: 1 },
            { x: new Date(2019, 11, 24), y: 5 },
            { x: new Date(2020, 11, 24), y: 4 },
          ],
        },
      ],
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
    newChart(newChartType, newChartColor, newChartData) {
      let newChartObject = {};
      newChartObject.id = new Date().toISOString();
      newChartObject.color = newChartColor;
      newChartObject.chartType = newChartType;
      if (newChartData === 'data1') {
        newChartObject.dataset = this.dataset1;
      } else if (newChartData === 'data2') {
        newChartObject.dataset = this.dataset2;
      }
      
      this.charts.push(newChartObject);
    }
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  background-color: grey;
  width: 100%;
}
</style>
