<template>
  <main id="app">
    <!-- <PageHeader /> -->
    <Loading v-if="LOADING" />
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
