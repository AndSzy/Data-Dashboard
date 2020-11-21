<template>
  <div class="new-window-container">
    <div>
      <h1>My Component</h1>
      <button class="btn btn-primary m-2 float-right" @click="openModal">Open Modal</button>
      <button class="btn" @click="showModal">Modal</button>
    </div>
    <b-modal :id="id">
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
    </b-modal>
    <!-- <form>
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
        </form> -->
    <line-chart
      v-if="chartType === 'Line'"
      :color="color"
      :dataset="dataset"
    ></line-chart>
    <bar-chart
      v-else-if="chartType === 'Bar'"
      :color="color"
      :dataset="dataset"
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
  props: ["id", "chartType", "color", "datasetName", "dataset"],
  methods: {
    showModal() {
        this.$bvModal.show(this.id);
      },
    openModal() {
      this.$emit("openModal", this.id, this.chartType, this.color, this.datasetName);
    }
  },
  data() {
    return {
      selectedChartType: this.chartType,
      selectedColor: this.color,
      selectedDatasetName: this.datasetName,
    }
  },
  watch: {
    selectedChartType() {
        console.log("type changed");
      this.$emit(
        "editChart",
        this.id,
        this.selectedChartType,
        this.selectedColor,
        this.selectedDatasetName
      );
    },
    selectedColor() {
      this.$emit(
        "editChart",
        this.id,
        this.selectedChartType,
        this.selectedColor,
        this.selectedDatasetName
      );
    },
    selectedDatasetName() {
      this.$emit(
        "editChart",
        this.id,
        this.selectedChartType,
        this.selectedColor,
        this.selectedDatasetName
      );
    },
  },
};
</script>

<style scoped>
</style>