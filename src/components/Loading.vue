<template>
  <div
    :class="bgColor"
    class="loading-page"
  >
    <img
      class="loading-gif"
      src="../assets/pixel-loading.gif"
    >
    <div id="loading-letter">
      <p class="loading">
        <span>结&nbsp;</span>
        <span>果&nbsp;</span>
        <span>生&nbsp;</span>
        <span>成&nbsp;</span>
        <span>中&nbsp;</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
  },
  props: {
    bgColor: String
  }
};
</script>

<style lang="scss" scoped>
// This is just to center the spinner
.loading-gif {
  -webkit-clip-path: inset(0 0 28% 0);
  clip-path: inset(0 0 28% 0);
}
.loading-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  // position: fixed;
  z-index: 999;
  align-items: center;
  justify-content: center;
}

@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
$t: 3s;
$n: 7;

#loading-letter {
  margin-top: -260px;
  width: 100%;
  height: 20vh;
  position: relative;
  font-weight: bold;
  // background-color: rgb(102, 62, 148);
  display: flex;
  align-items: center;
  justify-content: center;
}
.red {
  color: white;
  background-color: #ff5328;
}
.yellow {
  color: #0137ff;
  background-color: #f6cf00;
}

.loading {
  // font-family: "Press Start 2P", sans-serif;
  font-size: #{100vw * 0.055};
  // color: #ffffff;
  text-transform: uppercase;
  padding: 1.2em;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 2px;
    bottom: 0;
    left: 0;
    right: 0%;
    background-color: #ffffff;
    position: absolute;
    animation: line $t ease-in-out infinite;
  }
  span {
    display: inline-block;
    animation-name: char;
    animation-duration: $t;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
    @for $i from 1 through $n {
      &:nth-child(#{$i}) {
        animation-delay: #{($i * $t * 0.25 / $n)};
      }
    }
  }
}

@keyframes line {
  0% {
    right: 100%;
    left: 0%;
    opacity: 0.1;
  }
  50% {
    right: 0%;
    left: 0%;
    opacity: 1;
  }
  100% {
    left: 100%;
    right: 0%;
    opacity: 0.1;
  }
}

@keyframes char {
  0% {
    transform: translateY(1.8em);
    opacity: 0;
  }
  25%,
  50% {
    transform: none;
    opacity: 1;
  }
  75%,
  100% {
    transform: translateY(-1.8em);
    opacity: 0;
  }
}
</style>
