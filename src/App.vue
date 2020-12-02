<template>
  <div id="app">
    <the-header @submitForm="newComponent"></the-header>
    <div class="container-fluid">
      <div
        class="row"
        v-for="index in Math.ceil(charts.length / 3)"
        :key="index"
      >
        <my-component
          :id="chart.id"
          class="draggable col-4"
          
          v-for="chart in charts.slice((index - 1) * 3, index * 3)"
          :key="chart.id"
          :chart="chart"
          :openModalAction="openComponentModal"

          draggable="true"
          @dragstart.native="handleDragStart"
          @dragend.native="handleDragEnd"
          
          @dragover.native.prevent
          @drop.native.prevent="handleDrop"
        ></my-component>
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

export default {
  name: "App",
  components: {
    TheHeader,
    MyComponent,
  },
  data() {
    return {
      dataset1,
      dataset2,
      charts: [],
    };
  },
  methods: {


    handleDragStart(e) {
      e.target.classList.add('transparent');
      event.dataTransfer.setData("selectedId", event.target.id);
      // this.isTransparent = true;
      // e.dataTransfer.dropEffect = "move";
      // e.dataTransfer.setData("text/plain", e.target);
      // console.log(e.target.id);

    },
    handleDragEnd(e) {
      e.target.classList.remove('transparent')
      // this.isTransparent = false;
    
    },
    
    
    handleDrop(e) {
      const selectedId = e.dataTransfer.getData("selectedId");
      const targetId = e.currentTarget.id;
      console.log(selectedId, targetId);
      if(selectedId !== targetId) {
        this.swapCharts(selectedId, targetId)
      }
    },
    swapCharts(selectedId, targetId){
      let targetChartIndex = this.charts.findIndex((chart) => chart.id === targetId);
      let selectedChartIndex = this.charts.findIndex((chart) => chart.id === selectedId);
      let selectedChart = this.charts[selectedChartIndex];
      this.charts.splice(selectedChartIndex,1);
      this.charts.splice(targetChartIndex,0,selectedChart);
    },




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
