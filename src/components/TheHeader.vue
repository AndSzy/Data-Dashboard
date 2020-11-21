<template>
    <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <form class="form-inline" @submit.prevent="submitForm">
            <div class="form-group mx-3">
                <label for="chartType">Choose chart type</label>
                <select class="form-control-sm mx-2" name="chartType" id="chartType" v-model="chartType">
                    <option value="Line">Line</option>
                    <option value="Bar">Bar</option>
                </select>
            </div>
            <div class="form-group mx-3">
                <label for="chartColor">Choose chart color</label>
                <select class="form-control-sm mx-2" name="chartColor" id="chartColor" v-model="chartColor">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div class="form-group mx-3">
                <label for="chartData">Choose chart dataset</label>
                <select class="form-control-sm mx-2" name="chartData" id="chartData" v-model="chartData">
                    <option value="data1">Data 1</option>
                    <option value="data2">Data 2</option>
                </select>
            </div>
            <button type="submit" class="btn btn-light mx-5">New Chart</button>
        </form>
        
    </nav>
</template>

<script>
export default {
    emits: ['submitForm'],
    data() {
        return {
            chartType: 'Line',
            chartColor: 'blue',
            chartData: 'data2'
        }
    },
    methods: {
        submitForm() {
            this.$emit('submitForm', this.chartType, this.chartColor, this.chartData);
        }
    }
}
</script>

<style scoped>

</style>