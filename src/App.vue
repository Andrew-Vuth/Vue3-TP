<template>
  <div>
    <h2>Todo App</h2>
    <form class="form-wrapper" @submit.prevent="onSubmit">
      <input v-model="task_text" type="text" placeholder="Add your new todo" />
      <MyButton type="plus" />
    </form>

    <TodoItem
      @marked-as-pending="markPending"
      @marked-as-done="markDone"
      @deleteTask="deleteTask"
      :taskList="taskList"
    />
    You have {{ countPending }} pending tasks
  </div>
</template>

<script>
  import TodoItem from "./components/TodoItem";
  let taskID = 1;
  export default {
    name: "App",
    components: {
      TodoItem,
    },
    data() {
      return {
        taskList: [
          {
            id: taskID++,
            text: "Finish Homework",
            status: "pending",
            showBtn: false,
          },
          {
            id: taskID++,
            text: "Do Exercise",
            status: "pending",
            showBtn: true,
          },
        ],
        task_text: "",
      };
    },
    methods: {
      markDone(id) {
        this.taskList.forEach((task) => {
          id === task.id && (task.status = "done");
        });
      },
      markPending(id) {
        this.taskList.forEach((task) => {
          id === task.id && (task.status = "pending");
        });
      },
      deleteTask(id) {
        console.log("hi");
        this.taskList = this.taskList.filter((task) => task.id !== id);
      },
      onSubmit() {
        const newTask = {
          id: taskID++,
          text: this.task_text,
          status: "pending",
          showBtn: false,
        };
        this.taskList.push(newTask);
        this.task_text = "";
      },
    },
    computed: {
      countPending() {
        let count = 0;
        this.taskList.forEach((task) => {
          if (task.status === "pending") {
            count++;
          }
        });
        return count;
      },
    },
  };
</script>

<style>
  * {
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    width: 500px;
    max-width: 100%;
  }
  .form-wrapper {
    display: flex;
    margin-bottom: 2em;
  }
  .form-wrapper input {
    padding: 0.5em;
    flex: 1;
    margin-right: 0.5em;
  }
</style>
