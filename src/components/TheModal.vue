<template>
 <div class="modal-overlay" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" @click="closeModal" >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form >
            <div class="form-group ">
                <label for="chartType">Choose chart type</label>
                <select class="form-control-sm mx-2" name="chartType" id="chartType" v-model="currentChart.chartType">
                    <option value="Line">Line</option>
                    <option value="Bar">Bar</option>
                </select>
            </div>
            <div class="form-group">
                <label for="chartColor">Choose chart color</label>
                <select class="form-control-sm mx-2" name="chartColor" id="chartColor" v-model="currentChart.color">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div class="form-group">
                <label for="chartData">Choose chart dataset</label>
                <select class="form-control-sm mx-2" name="chartData" id="chartData" v-model="currentChart.datasetName">
                    <option value="data1">Data 1</option>
                    <option value="data2">Data 2</option>
                </select>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeModal" >Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: {
      chart: Object,
      closeModalAction: Function,
      updateChartAction: Function
    }, 
    data() {
        return {
            currentChart : this.chart,
        }
    },
    watch: {
      currentChart: {
        handler(){
            this.updateChartAction(this.currentChart);
        }, deep: true
      },
    },
    methods: {
      closeModal() {
        this.closeModalAction();
      }
    }
}
</script>

<style scoped>

.modal-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(229,229,229, 0.5);
}


</style>