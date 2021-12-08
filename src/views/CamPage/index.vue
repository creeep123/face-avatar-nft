<template>
  <div
    id="avatar-creator"
    :class="{ exporting }"
  >
    <div
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
      }"
      id="avatar-preview-outter-wrapper"
    >
      <WebCam
        v-loading="loading"
        ref="webCam"
        @setLoading='setLoading'
      ></WebCam>
    </div>

    <!-- <div
      class="btns"
      style="margin-top: 40px;"
    >
      <button
        id="refresh-btn"
        :disabled="exporting ? 'disabled' : false"
        class="__cursor_rect"
      >
        <span>拍摄</span>
      </button>
    </div> -->

    <div class="camera-shoot hologram interactive btn light chicagoflf">
      <button
        class="shoot-button"
        type="button"
        @click="this.handleButtonClick"
      >
        Let's go!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mixins } from "vue-property-decorator";
import AvatarCreatorMixin from "./creator.mixin";

@Component({
  components: {
    ExportLoading: () => import("@/components/ExportLoading.vue"),
    WebCam: () => import("./WebCam.vue"),
    Loading: () => import("./Loading.vue"),
  },
  mixins: [],
})
export default class AvatarCreator extends Mixins(AvatarCreatorMixin) {
  private loading = false;
  // private width = 280;
  // private height = 480;
  private width = 850;
  private height = 1000;
  private exporting = false;
  private ammount = 100;
  private showMask = false;
  private progress = 0;

  setLoading(boo: boolean) {
    this.loading = boo;
  }

  handleButtonClick() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    //@ts-ignore
    this.$refs.webCam.takePhoto();
  }

  mounted() {}

  exportIgnoreMiddleware(el: HTMLElement) {
    if (el && el.getAttribute("class")) {
      const ignores = ["export-loading"];
      if (
        el &&
        ignores.some(
          (className) =>
            [el.getAttribute("class") || ""].indexOf(className) > -1
        )
      )
        return true;
    }
    return false;
  }
}
</script>

<style lang="scss" scoped>
$primary: #0067b6;
.camera-shoot {
  margin-top: 24vh;
}
#avatar-creator {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  /* background-color: #fff; */
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 50px 30px 20px 30px;
  box-shadow: 12px 20px 40px rgba(0, 0, 0, 0.1),
    5px 5px 10px rgba(0, 0, 0, 0.02);
  z-index: 9;
  backdrop-filter: saturate(180%) blur(12px);

  max-width: 360px;

  .btns {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }
  // button {
  //   border: none;
  //   height: 40px;
  //   border-radius: 7px;
  //   cursor: pointer;
  //   &:focus,
  //   &:active {
  //     outline: none;
  //   }

  //   &:active {
  //     box-shadow: 0px 0px 2px rgba($primary, 0.5);
  //   }

  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: center;

  //   i {
  //     margin-right: 10px;
  //   }

  //   transition: all 0.3s ease;

  //   &#refresh-btn {
  //     background-color: $primary;
  //     color: #fff;
  //     width: calc(50% - 5px);

  //     &:hover {
  //       background-color: #06538d;
  //     }
  //   }
  //   &#download-btn {
  //     background-color: transparent;
  //     border: 1px solid $primary;
  //     color: $primary;
  //     width: calc(50% - 5px);

  //     &:hover {
  //       background-color: $primary;
  //       color: #fff;
  //     }
  //   }
  // }
  input {
    background-color: #efefef;
    border-radius: 7px;
    border: none;
    padding: 0 10px;
    &:focus,
    &:active {
      outline: none;
    }
  }

  button#multiple-export-btn {
    width: calc(40% - 10px);
    color: $primary;
    background-color: rgba($primary, 0.1);
    &:hover {
      background-color: rgba($primary, 0.15);
    }
  }
  input.sum-input {
    width: 50%;
  }

  button:disabled {
    background-color: #efefef !important;
    color: grey !important;
    cursor: not-allowed;
    border: none !important;
  }
}

#avatar-preview {
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: fixed;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    transform: scale(0.95);
    box-shadow: 0px 15px 30px var(--bg);
    opacity: 1;
  }

  &.exporting::before {
    box-shadow: none;
  }
}
#avatar-creator.exporting #avatar-preview::after {
  visibility: hidden !important;
}
#avatar-preview-outter-wrapper {
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
}

.resource-info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: #aaa;
  flex-wrap: wrap;
  padding: 20px 0 10px 0;
  transition: all 0.3s ease;
  a {
    color: #aaa;
    /* color: $primary; */
    text-decoration: none;
    margin-left: 2px;
    font-weight: bold;
    padding: 5px 10px;
    transition: all 0.15s ease;

    &:hover {
      color: $primary;
    }
  }

  a,
  span {
    white-space: nowrap;
  }
  .sources {
    display: flex;
    align-items: center;
  }
}

.contact-us-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0075ce;
  position: relative;

  .contact-us {
    padding: 5px 20px;
    font-size: 0.8rem;
    color: inherit;
    display: flex;
    align-items: center;
    transition: all 0.4s ease;
    i {
      margin-right: 6px;
      font-size: 1rem;
    }
  }
}

@media screen and(max-width: 400px) {
  #avatar-creator {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

@media screen and(min-width: 1080px) {
  #avatar-creator {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    // flex-direction: row;
    justify-content: start;
    align-items: center;
    background-image: url("assets/bg.png");
  }
  #avatar-preview-outter-wrapper {
    margin-top: 6.5vh;
  }
}

@media (prefers-color-scheme: dark) {
  #avatar-creator {
    /* background-color: #393939; */
    background-color: rgba(80, 80, 80, 0.2);

    input {
      background-color: #555;
      color: #eee;
    }

    button#multiple-export-btn {
      color: #fff;
      background-color: rgba($primary, 1);
      &:hover {
        background-color: rgba($primary, 0.8);
        color: #ccc;
      }
    }

    button:disabled {
      background-color: #686868 !important;
      color: grey !important;
    }

    #avatar-preview::after {
      box-shadow: 0px 15px 24px var(--bg);
      opacity: 0.3;
    }
  }
}

body.darkmode:not(.darkmode-off) {
  #avatar-creator {
    /* background-color: #393939; */
    background-color: rgba(80, 80, 80, 0.2);

    input {
      background-color: #555;
      color: #eee;
    }

    button#multiple-export-btn {
      color: #fff;
      background-color: rgba($primary, 1);
      &:hover {
        background-color: rgba($primary, 0.8);
        color: #ccc;
      }
    }

    button:disabled {
      background-color: #686868 !important;
      color: grey !important;
    }

    #avatar-preview::after {
      box-shadow: 0px 15px 24px var(--bg);
      opacity: 0.3;
    }
  }
}
</style>
