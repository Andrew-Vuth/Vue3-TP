<template>
  <div class="app-wrapper">
    <Post />
    <Comment />
  </div>
</template>

<script>
  import Post from "./components/Post";
  import Comment from "./components/Comment";
  export default {
    name: "App",
    components: {
      Post,
      Comment,
    },
  };
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .app-wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 2em;
  }
</style>
