<template>
    <header>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="chartType">Choose chart type.</label>
                <select name="chartType" id="chartType" v-model="chartType">
                    <option value="Line">Line</option>
                    <option value="Bar">Bar</option>
                </select>
            </div>
            <div class="form-control">
                <label for="chartColor">Choose chart color.</label>
                <select name="chartColor" id="chartColor" v-model="chartColor">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div class="form-control">
                <label for="chartData">Choose chart dataset.</label>
                <select name="chartData" id="chartData" v-model="chartData">
                    <option value="data1">Data 1</option>
                    <option value="data2">Data 2</option>
                </select>
            </div>
            <button>New Chart</button>
        </form>
        
    </header>
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

header {
    background-color: cornsilk;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

button {
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
}



</style>