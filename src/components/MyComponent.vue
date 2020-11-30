<template>
  <div 
  class="new-window-container"
  :class="{ transparent: isTransparent, over: isOver }"
  @dragstart="handleDragStart"
  @dragend="handleDragEnd"
  @dragenter="handleDragEnter" 
  @dragleave="handleDragLeave"
  @dragover.prevent="handleDragOver"  
  @drop.prevent="handleDrop" 
  draggable=true>
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
      isTransparent: false,
      isOver: false,
    }
  },
  methods: {
    openModal() {
      this.openModalAction(this.chart);
    },
   handleDragStart(e) {
      this.isTransparent = true;
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("text/plain", e.target);
      console.log(e.target);

    },
    handleDragEnd() {
      this.isTransparent = false;
    
    },
    handleDragEnter() {
      this.isOver = true;
    },
    handleDragLeave() {
      this.isOver = false;
    },
    handleDragOver(e) {
      e.dataTransfer.dropEffect = "move";
    },
    handleDrop(e) {
      this.handleDragLeave();
      const data = e.dataTransfer.getData("text/plain");
      console.log(data);
  }



  },
  
};
</script>

<style scoped>
.new-window-container {
  cursor: move;
}

.transparent {
  opacity: 0.4;
}

.over {
  border: 3px dotted #666;
}
</style>