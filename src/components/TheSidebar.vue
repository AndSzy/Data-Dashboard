<template>
  <div>
    <b-sidebar :id="sidebarId" title="Admin" shadow>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action">
          Cras justo odio
        </a>
        <form @submit.prevent="submitForm" class="list-group-item">
            <div class="form-group mx-3">
                <label for="chartType">Choose chart type</label>
                <select class="form-control-sm mx-2" name="chartType" id="chartType" v-model="newChart.chartType">
                    <option value="Line">Line</option>
                    <option value="Bar">Bar</option>
                </select>
            </div>
            <div class="form-group mx-3">
                <label for="chartColor">Choose chart color</label>
                <select class="form-control-sm mx-2" name="chartColor" id="chartColor" v-model="newChart.color">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div class="form-group mx-3">
                <label for="chartData">Choose chart dataset</label>
                <select class="form-control-sm mx-2" name="chartData" id="chartData" v-model="newChart.datasetName">
                    <option value="data1">Data 1</option>
                    <option value="data2">Data 2</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">New Chart</button>
        </form>
        <div class="list-group-item"
          >Dapibus ac facilisis in
          <form @submit.prevent="submitForm">
            <div class="form-group mx-3">
                <label for="chartType">Choose chart type</label>
                <select class="form-control-sm mx-2" name="chartType" id="chartType" v-model="newChart.chartType">
                    <option value="Line">Line</option>
                    <option value="Bar">Bar</option>
                </select>
            </div>
            <div class="form-group mx-3">
                <label for="chartColor">Choose chart color</label>
                <select class="form-control-sm mx-2" name="chartColor" id="chartColor" v-model="newChart.color">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div class="form-group mx-3">
                <label for="chartData">Choose chart dataset</label>
                <select class="form-control-sm mx-2" name="chartData" id="chartData" v-model="newChart.datasetName">
                    <option value="data1">Data 1</option>
                    <option value="data2">Data 2</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">New Chart</button>
        </form>
          
          
          </div
        >
        <a href="#" class="list-group-item list-group-item-action"
          >Porta ac consectetur ac</a
        >
        <a href="#" class="list-group-item list-group-item-action"
          >Vestibulum at eros</a
        >
      </div>
      
    </b-sidebar>
  </div>

  <!-- <form class="form-inline" @submit.prevent="submitForm">
            <div class="form-group mx-3">
                <label for="chartType">Choose chart type</label>
                <select class="form-control-sm mx-2" name="chartType" id="chartType" v-model="newChart.chartType">
                    <option value="Line">Line</option>
                    <option value="Bar">Bar</option>
                </select>
            </div>
            <div class="form-group mx-3">
                <label for="chartColor">Choose chart color</label>
                <select class="form-control-sm mx-2" name="chartColor" id="chartColor" v-model="newChart.color">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div class="form-group mx-3">
                <label for="chartData">Choose chart dataset</label>
                <select class="form-control-sm mx-2" name="chartData" id="chartData" v-model="newChart.datasetName">
                    <option value="data1">Data 1</option>
                    <option value="data2">Data 2</option>
                </select>
            </div>
            <button type="submit" class="btn btn-light mx-5">New Chart</button>
        </form> -->
</template>

<script>
export default {
  props: {
    sidebarId: String,
  },
  emits: ["submitForm"],
  data() {
    return {
      newChart: {
        color: "blue",
        chartType: "Line",
        datasetName: "data2",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submitForm", this.newChart);
    },
  },
};
</script>