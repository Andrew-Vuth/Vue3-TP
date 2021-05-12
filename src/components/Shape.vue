<template>
  <div class="shape" :id="shape" :style="shapeStyle"><slot></slot></div>
</template>

<script scope>
  export default {
    name: "Shape",
    props: ["shape", "color"],
    data() {
      return {
        shapeColor: this.$props.color,
      };
    },
    computed: {
      shapeStyle() {
        return {
          "--color": this.shapeColor,
        };
      },
    },
  };
</script>

<style scope>
  .shape {
    position: relative;
  }
  #triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid var(--color);
  }
  #hexagon {
    width: 100px;
    height: 57.735px;
    background: var(--color);
    position: relative;
  }
  #hexagon::before {
    content: "";
    position: absolute;
    top: -28.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 28.8675px solid var(--color);
  }
  #hexagon::after {
    content: "";
    position: absolute;
    bottom: -28.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 28.8675px solid var(--color);
  }

  #heart {
    position: relative;
    width: 100px;
    height: 90px;
  }
  #heart:before,
  #heart:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: var(--color);
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  #heart:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
  #diamond {
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 20px solid var(--color);
    position: relative;
    top: -50px;
  }
  #diamond:after {
    content: "";
    position: absolute;
    left: -50px;
    top: 20px;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top: 70px solid var(--color);
  }
  #star {
    margin: 50px 0;
    position: relative;
    display: block;
    color: var(--color);
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid var(--color);
    border-left: 100px solid transparent;
    transform: rotate(35deg);
  }
  #star:before {
    border-bottom: 80px solid var(--color);
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: "";
    transform: rotate(-35deg);
  }
  #star:after {
    position: absolute;
    display: block;
    color: var(--color);
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid var(--color);
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: "";
  }
</style>
