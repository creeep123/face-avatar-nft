<template>
  <main id="app">
    <!-- <PageHeader /> -->
    <Loading
      v-if="LOADING"
      bgColor="red"
    />
    <router-view
      v-if="!LOADING"
      @multiple-start="multipleExporting = true"
      @multiple-end="multipleExporting = false"
    />
    <PageFooter />
    <!-- <ipad-mouse
      v-if="showIpadMouse"
      :force-show-cursor="multipleExporting"
      rectSelector=".__cursor_rect"
      textSelector=".__cursor_text"
    /> -->
  </main>
</template>

<script>
import { mapState } from 'vuex'
import 'animate.css';
export default {
  provide () {
    return {
      faceInfo: { test: "tests" },
      changeFaceInfo: this.changeFaceInfo
    }
  },
  data () {
    return {
      multipleExporting: false,
    };
  },
  methods: {
    changeFaceInfo (newInfo) {
      this.faceInfo = newInfo
    },
  },
  components: {
    // IpadMouse: () => import("@/components/IpadMouse"),
    // PageHeader: () => import("./views/PageHeader"),
    PageFooter: () => import("./views/PageFooter"),
    Loading: () => import("./components/Loading.vue")
  },

  computed: {
    ...mapState([
      'LOADING'
    ])
    // showIpadMouse () {
    //   return !/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(
    //     navigator.userAgent
    //   );
    // },
  },
};
</script>

<style lang="scss">
@import url("./assets/global/global.scss");
.animate__animated.animate__pulse {
  --animate-duration: 2s;
  --animate-delay: 3s;
}
body,
html {
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow: hidden;
}

.smart-engineering {
  transform: translateX(-10px) scale(0.4, 0.4);
}

#app {
  background: #654ea3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eaafc8,
    #654ea3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaafc8,
    #654ea3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: unset;
  &:visited {
    color: unset;
  }
}

:root {
  --highlight-bg: #fff;
}

@media (prefers-color-scheme: dark) {
  body,
  html {
    background-color: #333333;
  }
  :root {
    --highlight-bg: #494949;
  }
}

body.darkmode:not(.darkmode-off) {
  background-color: #333333;
  :root {
    --highlight-bg: #494949;
  }
}
</style>
