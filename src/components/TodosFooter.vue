<template>
  <div>
    <button
      v-if="$store.state.todos.length > 0"
      @click="$store.commit('deleteTodos')"
    >
      Delete all todos
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodosFooter",
});
</script>
