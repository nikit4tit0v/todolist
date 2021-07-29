import { createStore } from "vuex";
import { v4 as uuid } from "uuid";
import TodoModel from "@/models/todo.model";

export default createStore({
  state: {
    todos: [] as TodoModel[],
  },
  mutations: {
    addTodo(state, title: string): void {
      state.todos.unshift({
        id: uuid(),
        title,
        completed: false,
        editing: false,
      });
    },
    updateTitle(state, payload: { id: string; title: string }): void {
      const todo = state.todos.find((t) => t.id === payload.id);
      if (todo) todo.title = payload.title;
    },
    deleteTodo(state, id: string): void {
      state.todos = state.todos.filter((t) => t.id !== id);
    },
    deleteTodos(state): void {
      state.todos = [];
    },
    toggleCompleted(state, id: string): void {
      const todo = state.todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },
    toggleEditing(state, id: string): void {
      const todo = state.todos.find((t) => t.id === id);
      if (todo) todo.editing = !todo.editing;
    },
  },
  actions: {},
  modules: {},
});
