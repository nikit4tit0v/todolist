<template>
  <form class="add-todo">
    <input v-model.trim="newTodoText" placeholder="Your task" />
    <button @click.prevent="onClick">Add todo</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddTodo",
  data() {
    return {
      newTodoText: "",
    };
  },
  methods: {
    onClick(): void {
      if (!this.newTodoText) return;
      this.$store.commit("addTodo", this.newTodoText);
      this.newTodoText = "";
    },
  },
});
</script>

<style scoped>
.add-todo {
}
</style>
