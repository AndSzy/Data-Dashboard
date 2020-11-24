<template>
    <div id="modal-2">
        <h2>Hello From ChartModal.vue</h2>
        <form>
            <div class="form-control">
                <label for="chartType">Choose chart type.</label>
                <select name="chartType" id="chartType" >
                    <option value="Line">Line</option>
                    <option value="Bar">Bar</option>
                </select>
            </div>
            <div class="form-control">
                <label for="chartColor">Choose chart color.</label>
                <select name="chartColor" id="chartColor" >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div class="form-control">
                <label for="chartData">Choose chart dataset.</label>
                <select name="chartData" id="chartData" >
                    <option value="data1">Data 1</option>
                    <option value="data2">Data 2</option>
                </select>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    props: [],
}
</script>