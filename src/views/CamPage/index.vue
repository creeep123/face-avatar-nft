<template>
  <div
    id="cam-previewer"
    :class="{ exporting }"
  >
    <div
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
      }"
      id="cam-preview-outter-wrapper"
    >
      <div class="count-down">
        {{countDownTime==4?"":countDownTime}}
      </div>
      <WebCam
        v-loading="loading"
        ref="webCam"
        @setLoading='setLoading'
      ></WebCam>
    </div>

    <!-- <div class="camera-shoot">
      <button
        class="shoot-button"
        type="button"
        @click="this.handleButtonClick"
      >
        Let's go!
      </button>
    </div> -->

    <div class="camera-shoot">
      <button
        :class="shutButtonClass"
        type="button"
        @click="this.handleButtonClick"
      >
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mixins } from "vue-property-decorator";
import AvatarCreatorMixin from "./creator.mixin";
import _ from "lodash";

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
  private height = 850;
  private exporting = false;
  private ammount = 100;
  private showMask = false;
  private progress = 0;
  private shutButtonClass = "shoot-button";
  private countDownTime = 4;

  private async privateRegisterEnter() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    document.onkeydown = async function (e) {
      // 回车提交表单
      // 兼容FF和IE和Opera
      const theEvent: any = window.event || e;
      const code = theEvent.keyCode || theEvent.which || theEvent.charCode;
      if (code == 13) {
        await that.handleButtonClick();
      }
    };
  }

  private async countTime() {
    // 倒计时 -1s
    this.countDownTime -= 1;
    //递归每秒调用countTime方法
    if (this.countDownTime != 0) {
      setTimeout(this.countTime, 1000);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      //@ts-ignore
      const res = await this.$refs.webCam.takePhoto();
      if (res == "success") {
        // 跳转到result页面
        this.$router.push({
          name: "ResultPage",
        });
      } else {
        this.countDownTime = 4;
      }
    }
  }

  setLoading(boo: boolean) {
    this.loading = boo;
  }

  handleButtonClick = _.throttle(async () => {
    // 开始倒计时，3s后调用拍照方法
    await this.countTime();
    setTimeout(() => {
      this.shutButtonClass = "shoot-button";
    }, 200);
    this.shutButtonClass = "shoot-button-pressed";
  }, 3000);

  mounted() {
    this.privateRegisterEnter();
  }

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
  .shoot-button {
    height: 119px;
    width: 480px;
    border: none;
    background: transparent;
    background-image: url("./assets/底部button-常态@1x.png");
  }
  .shoot-button-pressed {
    height: 119px;
    width: 480px;
    border: none;
    background: transparent;
    background-image: url("./assets/底部button-按下@1x.png");
  }
}
#cam-previewer {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  .btns {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }
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

  // button:disabled {
  //   background-color: #efefef !important;
  //   color: grey !important;
  //   cursor: not-allowed;
  //   border: none !important;
  // }
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
#cam-previewer.exporting #avatar-preview::after {
  visibility: hidden !important;
}
#cam-preview-outter-wrapper {
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
  #cam-previewer {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

@media screen and(min-width: 1079px) {
  #cam-previewer {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    // flex-direction: row;
    justify-content: start;
    align-items: center;
    background-image: url("assets/背景@1x.png");
  }
  .count-down {
    z-index: 999;
    position: absolute;
    height: 860px;
    width: 860px;
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: white;
  }
  #cam-preview-outter-wrapper {
    margin-top: 312px;
  }
}

@media (prefers-color-scheme: dark) {
  #cam-previewer {
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
  #cam-previewer {
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

    // button:disabled {
    //   background-color: #686868 !important;
    //   color: grey !important;
    // }

    #avatar-preview::after {
      box-shadow: 0px 15px 24px var(--bg);
      opacity: 0.3;
    }
  }
}
</style>
