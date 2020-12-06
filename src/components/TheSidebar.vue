<template>
  <div>
    <b-sidebar :id="sidebarId" title="Admin" shadow >
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action">
            <font-awesome-icon icon="user" class="mx-2" />Users  
        </a>
        <div class="list-group-item">
            <font-awesome-icon icon="chart-area" class="mx-2" />Charts
            <options-form @submitForm="submitForm"></options-form>
        </div>
        <a href="#" class="list-group-item list-group-item-action">
            <font-awesome-icon icon="table" class="mx-2" />Tables</a>
        <a href="#" class="list-group-item list-group-item-action">
            <font-awesome-icon icon="book" class="mx-2" />Forms</a>
      </div>

      
    </b-sidebar>
  </div>
</template>

<script>
import OptionsForm from "./OptionsForm.vue";

export default {
  components: {
    OptionsForm,
  },
  props: {
    sidebarId: String,
  },
  emits: ["submitForm"],
  methods: {
    submitForm(newChart) {
      this.$emit("submitForm", newChart);
    },
  },
};
</script>