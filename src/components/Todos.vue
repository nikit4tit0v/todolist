<template>
  <div class="todos">
    <Todo v-for="todo in $store.state.todos" :todo="todo" :key="todo.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Todo from "@/components/Todo.vue";

export default defineComponent({
  name: "Todos",
  components: {
    Todo,
  },
});
</script>

<style scoped>
.todos {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
