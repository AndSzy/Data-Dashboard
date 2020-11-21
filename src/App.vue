<template>
  <div id="app">
    <the-header @submitForm="newComponent"></the-header>
    <chart-modal 
      :activeChartId="activeChartId"
      :activeChartType="activeChartType"
      :activeChartColor="this.activeChartColor"
      :activeChartDataset="activeChartDataset"
      @editChart="updateCharts"
    ></chart-modal>
    <div class="container-fluid">
      <div class="row">
        <my-component
        class="col-4 bg-white"
        @openModal="openModal"
        @editChart="updateCharts"
        v-for="chart in charts"
        :key="chart.id"
        :id="chart.id"
        :color="chart.color"
        :chartType="chart.chartType"
        :datasetName="chart.datasetName"
        :dataset="chart.dataset"
      ></my-component>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MyComponent from "./components/MyComponent.vue";
import ChartModal from "./components/ChartModal.vue";


export default {
  name: "App",
  components: {
    TheHeader,
    MyComponent,
    ChartModal
  },
  data() {
    return {
      charts: [],
      activeChartId: '',
      activeChartType: '',
      activeChartColor: '',
      activeChartDataset: '',
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
    openModal(id, type, color, dataset) {
      this.activeChartId = id;
      this.activeChartType = type;
      this.activeChartColor = color;
      this.activeChartDataset = dataset;
      this.$bvModal.show('modal-2');
    }
  },
};
</script>

<style>

</style>
