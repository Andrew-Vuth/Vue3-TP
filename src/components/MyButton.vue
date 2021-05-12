<template>
  <button class="btn" :class="type" :type="type === 'plus' ? 'submit' : ''">
    <i :class="['fas', 'fa-' + type]"></i>
  </button>
</template>

<script>
  export default {
    name: "MyButton",
    props: ["type"],
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .btn {
    color: #ffff;
    border: 0;
    height: 100%;
    padding: 1.5em;
    cursor: pointer;
    margin: 0;
  }
  .btn.trash {
    background: rgba(250, 35, 35, 0.802);
  }
  .btn.plus {
    background: rgba(193, 35, 250, 0.802);
  }
</style>
