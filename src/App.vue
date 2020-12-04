<template>
  <div id="app">
    <the-header @submitForm="newComponent"></the-header>
    <div class="container-fluid">

      <!-- v-for="index in Math.ceil(charts.length / 3)"
        :key="index" -->

      <div class="row">
        <draggable v-model="charts" class="col-4">
          <my-component
          mydraggable
          
          v-for="chart in charts"
          :key="chart.id"
          :chart="chart"
          :openModalAction="openComponentModal"
        ></my-component>
        </draggable>
        

      </div>
    </div>
    <router-view
      :closeModalAction="closeComponentModal"
      :updateChartAction="updateCharts"
    ></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MyComponent from "./components/MyComponent.vue";

import { dataset1, dataset2 } from "./components/FakeData.js";

import draggable from 'vuedraggable';

// handle the registration

import { logSmth } from './components/DragControler.js';

export default {
  name: "App",
  components: {
    TheHeader,
    MyComponent,
    draggable
  },
  data() {
    return {
      dataset1,
      dataset2,
      charts: [],
    };
  },
  mounted() {
    // console.log("mounted");
  },
  beforeUpdate() {
    // console.log("before Update Hook");
    // removeEventListeners();
  },
  updated() {
    // console.log("updated");
    logSmth();
  },

  methods: {
    openComponentModal(editedChart) {
      this.$router.push({
        name: "TheModal",
        params: {
          chart: editedChart,
        },
      });
    },
    closeComponentModal() {
      this.$router.push("/");
    },
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

.draggable {
  cursor: move;
}

.transparent {
  opacity: 0.4;
}

.over {
  border: 3px dotted #666;
}
</style>
