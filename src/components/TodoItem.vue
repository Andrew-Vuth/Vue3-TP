<template>
  <div class="todos">
    <div
      v-for="task in taskList"
      :key="task.id"
      class="todo"
      :class="task.status"
      @click="onClick(task)"
      @mouseenter="task.showBtn = true"
      @mouseleave="task.showBtn = false"
    >
      {{ task.text }}
      <MyButton
        @click="deleteTask(task)"
        v-if="task.showBtn"
        type="trash"
        :key="task.id"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "TodoItem",
    props: ["taskList"],
    data() {
      return {};
    },
    methods: {
      onClick(task) {
        task.status === "done"
          ? this.$emit("marked-as-pending", task.id)
          : this.$emit("marked-as-done", task.id);
      },
      deleteTask(task) {
        console.log(task.id);
        this.$emit("deleteTask", task.id);
      },
    },
  };
</script>

<style scoped>
  .todos {
    margin: 1em 0;
  }
  .todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.2em;
    background: #dedede;
    height: 50px;
    padding-left: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .todo.done {
    background: #0daf69;
    text-decoration: line-through;
    color: #dedede;
  }
</style>
