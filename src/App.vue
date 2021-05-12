<template>
  <div class="shapes">
    <Shape shape="hexagon" color="red">
      <Shape shape="heart" color="yellow" />
    </Shape>
    <Shape shape="diamond" color="blue">
      <Shape shape="star" color="yellow" />
    </Shape>
    <Shape shape="triangle" color="purple"> </Shape>
    <Shape shape="heart" color="brown"> </Shape>
    <Shape shape="star" color="pink"> </Shape>
    <Shape shape="hexagon" color="black"> </Shape>
    <Shape shape="triangle" color="purple"> </Shape>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
  };
</script>

<style>
  body {
    background: #9fc5f8;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .shapes {
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>
