<template>
  <div class="todo">
    <span
      v-if="!todo.editing"
      :style="{ 'text-decoration': todo.completed ? 'line-through' : 'none' }"
    >
      {{ todo.title }}
    </span>
    <input
      v-else
      :value="todo.title"
      @change="
        (e) =>
          $store.commit('updateTitle', { id: todo.id, title: e.target.value })
      "
    />
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="$store.commit('toggleCompleted', todo.id)"
    />
    <button @click="$store.commit('toggleEditing', todo.id)">
      {{ todo.editing ? "Save" : "Edit" }}
    </button>
    <button @click="$store.commit('deleteTodo', todo.id)">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TodoModel from "@/models/todo.model";

export default defineComponent({
  name: "Todo",
  props: {
    todo: {
      type: Object as PropType<TodoModel>,
      required: true,
    },
  },
});
</script>

<style scoped>
.todo {
  display: flex;
  align-items: center;
  align-self: center;
}
</style>
