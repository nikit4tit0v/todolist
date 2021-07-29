<template>
  <AddTodo />
  <Todos />
  <TodosFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddTodo from "@/components/AddTodo.vue";
import Todos from "@/components/Todos.vue";
import TodosFooter from "@/components/TodosFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    AddTodo,
    Todos,
    TodosFooter,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
