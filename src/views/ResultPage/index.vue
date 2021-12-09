<template>
  <div
    id="colorful-face"
    :class="{ exporting }"
  >
    <div
      :style="{
        width: `100%`,
        height: `${height}px`,
        display: 'flex',
        justifyContent: 'space-between',
      }"
      id="avatar-preview-outter-wrapper"
      @click="jumpToAvatarPage"
    >
      <div class="main-attributes">
        <div class="main-attribute-item">
          <div class="icon-wrapper"><img src="./assets/性别.png"></div>
          <div class="attribute-value">{{$store.state.GENDER==0?"男":"女"}}</div>
        </div>
        <div class="main-attribute-item">
          <div class="icon-wrapper"><img src="./assets/年龄.png"></div>
          <div class="attribute-value">{{$store.state.AGE}}</div>
        </div>
        <div class="main-attribute-item">
          <div class="icon-wrapper"><img src="./assets/眼镜.png"></div>
          <div class="attribute-value">{{this.getMappedAttribute("Glasses")}}</div>
        </div>
        <div class="main-attribute-item">
          <div class="icon-wrapper"><img src="./assets/假发.png"></div>
          <div class="attribute-value">{{this.getMappedAttribute("Hair")}}</div>
        </div>
        <div class="main-attribute-item">
          <div class="icon-wrapper"><img src="./assets/胡子.png"></div>
          <div class="attribute-value">{{this.getMappedAttribute("FacialHair")}}</div>
        </div>
      </div>

      <div :style="{
          overflow: 'hidden',
          width: `${width}px`,
          height: exporting ? 0 : `${height}px`,
          '--bg': backgroundColor,
        }">
        <!-- <div
          id="avatar-preview"
          :class="{ exporting }"
          :style="{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor,
            borderRadius,
            '--bg': backgroundColor,
          }"
        > -->
        <div
          id="avatar-preview"
          :class="{ exporting }"
          :style="{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor,
            '--bg': backgroundColor,
          }"
        >
          <ExportLoading
            :ammount="
              Object.prototype.toString.call(ammount) === '[object String]'
                ? parseInt(ammount)
                : ammount
            "
            :progress="progress"
            v-if="showMask"
            :style="{
              width: `${width}px`,
              height: `${height}px`,
            }"
          />
          <!-- <div
            style="width: 100%;height: 100%;position: relative;z-index:2"
            v-html="svgRaw"
          ></div> -->
          <!-- <div style="width: 100%;height: 100%;position: relative;z-index:2">
            <img
              style=";transform:translate(-360px,-190px) scale(0.3)"
              :src="'data:image/jpg;base64,'+$store.PIXEL64"
              class=""
            >
          </div> -->

          <div style="width: 100%;height: 100%;position: relative;z-index:2">
            <img
              :style="`width:${width}px`"
              :src="'data:image/jpg;base64,'+this.$store.state.PIXEL64"
              class="color-face-img"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- <div>
      <ul id="example-1">
        <li>年龄：{{this.$store.state.AGE}}</li>
        <li>魅力值：{{this.$store.state.BEAUTY}}</li>
        <li>性别：{{this.$store.state.GENDER}}</li>
        <li
          v-for="objKey in Object.keys(this.$store.state.chosenAttr)"
          :key="objKey"
        >
          {{ objKey }}:{{$store.state.chosenAttr[objKey]}}
        </li>
      </ul>
    </div> -->

    <div>
      <ul id="rating-stars">
        <li
          class="star-list-item"
          v-for="(starMount,index) in getStarAmount()"
          :key="index"
        >
          <span
            v-for="(_,index) in new Array(starMount).fill(0)"
            :key="index"
            class="star-img-wrapper"
          ><img src="./assets/红心@1x.png"></span>
        </li>
      </ul>
    </div>

    <div class="continue-button-wrapper">
      <div class="continue-button"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mixins } from "vue-property-decorator";
import html2canvas from "html2canvas";

import JSZip from "jszip";

// @ts-ignore
import confetti from "canvas-confetti";
import mockFaceInfo from "./mockdata";
import AvatarCreatorMixin from "./creator.mixin";
import attributesName from "./utils/attributesName";
import matchAttributesFromFaceAttributeInfos from "./utils/match";
import { RenderType, GenderType } from "./interface/avatar.interface";
import { mapState } from "vuex";

@Component({
  components: {
    ExportLoading: () => import("@/components/ExportLoading.vue"),
  },
  mixins: [],
  computed: {
    ...mapState(["chosenAttr"]),
  },
})
export default class AvatarCreator extends Mixins(AvatarCreatorMixin) {
  private width = 600;
  private height = 600;
  private faceColorImg = "";
  private faceAttributeInfos: any = {};
  private attributesChosen: any = {};
  private attributesName = attributesName;
  private exporting = false;
  private ammount = 100;
  private showMask = false;
  private progress = 0;

  private backgroundColor = "#fff";
  private borderRadius = "12px";

  private mask: any = null;
  private showWechatGroupQrCard = false;

  private svgRaw = "";

  private exportTypes = [
    { label: "SVG", value: "svg" },
    { label: "PNG", value: "png" },
  ];

  getMappedAttribute(attrName: any) {
    const attributesMap: any = {
      Glasses: {
        方眼镜: "SQUARE",
        圆眼镜: "CIRCLE",
        墨镜: "SUNGLA",
        无眼镜: "NONE",
      },
      Hair: {
        光头: "BOLD",
        短发: "SHORT",
        中发: "MIDDLE",
        长发: "LONG",
        绑发: "TIED",
      },
      FacialHair: {
        有胡子: "YES",
        无胡子: "NO",
      },
    };
    const attrArray: string[] = this.$store.state.chosenAttr[attrName];
    const attributesMapOne = attributesMap[`${attrName}`];
    for (let i = 0; i < attrArray.length; i++) {
      if (
        attrArray[i] !== "" &&
        attributesMapOne.hasOwnProperty(attrArray[i])
      ) {
        return attrArray[i];
      }
    }
  }

  mounted() {
    // attributesChosen 按照不同 layer 分为了 15 个 layer
    // 每个 layer 数组用 dir 命名，其中存放的是根据拍摄人脸信息提取的关键词
    // 在选取素材时，每一层筛选出文件名中包含数组中【所有关键词】的文件
    this.attributesChosen = this.$store.state.chosenAttr;
  }

  getStarAmount() {
    const faceInfoRaw = this.$store.state.faceInfoRaw;
    const starAmounts = [
      Math.floor(
        Math.floor(
          faceInfoRaw.Smile < 20 ? faceInfoRaw.Smile + 20 : faceInfoRaw.Smile
        ) / 20
      ),
      Math.round(Math.random() * 5),
      Math.floor(Math.floor(faceInfoRaw.Beauty) / 20),
      Math.round(Math.random() * 5),
      Math.round(Math.random() * 5),
    ];
    return starAmounts;
  }

  private fetchFaceInfo() {
    const { faceColorImg, faceAttribute }: any = this.$route.params;
    this.faceColorImg = faceColorImg;
    this.faceAttributeInfos =
      faceAttribute.FaceDetailInfos[0].FaceDetailAttributesInfo;
    return this.$route.params;
  }

  private jumpToAvatarPage() {
    this.$router.push({
      name: "AvatarCreator",
    });
  }

  /**
   * 截取
   */
  async capture() {
    this.exporting = true;
    this.borderRadius = "0";
    this.$nextTick(async () => {
      const dom: HTMLElement = document.querySelector(
        "#avatar-preview"
      ) as HTMLElement;
      const canvas = await html2canvas(dom, {
        logging: false,
        scale: window.devicePixelRatio,
        width: this.width,
        height: this.height,
      });
      const a = document.createElement("a");
      a.href = canvas.toDataURL();
      a.download = "avatar.png";
      a.click();
      this.exporting = false;
      this.borderRadius = "12px";
    });
  }

  /**
   * 从一个数组中随机获取
   */
  randomSelectWithWeight<T>(
    type: T,
    arr: Record<string, any>[],
    valueKey = "id",
    weightKey = "weight"
  ): T {
    const store: Array<T> = [];
    arr.forEach((el) => {
      const value = el[valueKey];
      if (Object.prototype.toString.call(el[weightKey]) !== "[object Number]") {
        throw Error("weight is not a Number");
      } else {
        const weight: number = el[weightKey] || 1;
        for (let i = 0; i < weight; i++) store.push(value);
      }
    });
    const randIndex =
      parseInt((Math.random() * store.length * 10000).toFixed(0)) %
      store.length;
    return store[randIndex];
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

  /**
   * 绘制彩带动画
   */
  private applyConfettiAnimation() {
    const btn = document.querySelector("#refresh-btn");
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const { clientWidth, clientHeight } = document.body;
    const centerOfBtnX = rect.left + rect.width / 2;
    const centerOfBtnY = rect.top + rect.height / 2;
    const centerOfBtnXPercent = centerOfBtnX / clientWidth;
    const centerOfBtnYPercent = centerOfBtnY / clientHeight;

    const _confetti = function (opt = {}) {
      confetti({
        particleCount: Math.floor(100 + Math.random() * 100),
        angle: 80,
        spread: 155, // 最大角度
        startVelocity: 50, // 最大距离
        decay: 0.9, // 减速： [0, 1]
        gravity: 3,
        ticks: 200, // 移动次数
        origin: {
          x: centerOfBtnXPercent,
          y: centerOfBtnYPercent,
        },
        colors: [
          "#F4D03F",
          "#E20650",
          "#1F618D",
          "#3498DB",
          "#E74C3C",
          "#48C9B0",
          "#34495E",
          "#31FBE0",
        ],
        shapes: ["square"],
        scalar: 1,
        zIndex: clientWidth > 400 ? 0 : 100,

        ...opt,
      });
    };
    _confetti({
      scalar: 1.4,
    });
    _confetti({
      particleCount: 50,
      // angle: 80,
      spread: 65, // 最大角度
      startVelocity: 60, // 最大距离
      gravity: 2,
    });
    _confetti({
      particleCount: 20,
      angle: 80,
      spread: 45,
      startVelocity: 40,
      colors: [
        "#7b5cff",
        "#6245e0",
        "#b3c7ff",
        "#8fa5e5",
        "#5c86ff",
        "#345dd1",
      ],
      scalar: 1.2,
    });
  }

  private maskClickListener = (e: Event) => this.toggleWechatGroupQrCard(false);
  private toggleWechatGroupQrCard(show: boolean) {
    this.showWechatGroupQrCard = show;
    // 移除mask
    try {
      if (this.mask) {
        this.mask.removeEventListener("click", this.maskClickListener);
        document.body.removeChild(this.mask);
        this.mask = null;
      }
    } catch (err) {
      console.log("Error to remove mask", err);
    }
    if (show) {
      const mask = document.createElement("div");

      mask.setAttribute(
        "style",
        `
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0,0,0,.4);
        left: 0;
        top: 0;
        z-index: 1000;
        backdrop-filter: saturate(180%) blur(20px);
        display: flex;
        justify-content: center;
        align-items: center;
      `
      );
      const card = document.createElement("div");
      card.setAttribute(
        "style",
        `
        width: 300px;
        height: 400px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0px 10px 20px rgba(0,0,0,.1), 0px 20px 40px rgba(0,0,0,0);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
      `
      );

      const img = document.createElement("img");
      img.setAttribute("src", require("@/assets/wechat-qr.png"));
      img.setAttribute("loading", "lazy");
      img.setAttribute(
        "style",
        `
        width: 100%;
      `
      );

      const description = document.createElement("div");
      const title = document.createElement("div");
      const content = document.createElement("div");
      title.innerText = "智能工程";
      content.innerHTML =
        "🔧 面向未来的数据可视化分析工具。<br />💬 分享世界精彩的可视化内容。";
      title.setAttribute("style", "font-size: 1.3rem;font-weight: bold;");
      content.setAttribute("style", "font-size: 0.8rem;");
      description.appendChild(title);
      description.appendChild(content);

      card.appendChild(img);
      card.appendChild(description);
      mask.appendChild(card);

      mask.addEventListener("click", this.maskClickListener);
      this.mask = mask;
      document.body.appendChild(mask);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./card";
$primary: #0067b6;
#colorful-face {
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
  // border-radius: 12px;
  padding: 50px 30px 20px 30px;
  // box-shadow: 12px 20px 40px rgba(0, 0, 0, 0.1),
  //   5px 5px 10px rgba(0, 0, 0, 0.02);
  z-index: 9;
  backdrop-filter: saturate(180%) blur(12px);

  max-width: 360px;

  .btns {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  button {
    border: none;
    height: 40px;
    border-radius: 7px;
    cursor: pointer;
    &:focus,
    &:active {
      outline: none;
    }

    &:active {
      box-shadow: 0px 0px 2px rgba($primary, 0.5);
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    i {
      margin-right: 10px;
    }

    transition: all 0.3s ease;

    &#refresh-btn {
      background-color: $primary;
      color: #fff;
      width: calc(50% - 5px);

      &:hover {
        background-color: #06538d;
      }
    }
    &#download-btn {
      background-color: transparent;
      border: 1px solid $primary;
      color: $primary;
      // width: calc(50% - 5px);

      &:hover {
        background-color: $primary;
        color: #fff;
      }
    }
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
    // position: fixed;
    // width: inherit;
    // height: inherit;
    // border-radius: inherit;
    // transform: scale(0.95);
    // box-shadow: 0px 15px 30px var(--bg);
    // opacity: 1;
  }

  &.exporting::before {
    box-shadow: none;
  }
}
#colorful-face.exporting #avatar-preview::after {
  visibility: hidden !important;
}
#avatar-preview-outter-wrapper {
  // transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  // &:hover {
  //   transform: scale(1.02);
  // }
  display: flex;
  justify-content: start;
}

.color-face-img {
  // border: 8px solid #3b3b3b;
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
  color: #aaa;
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
#wechat-group-qr-card {
  width: 300px;
  height: 350px;
  padding: 20px;
  position: fixed;
  background-color: #fff;
  z-index: 99999;
  /* bottom: calc(100% + 10px); */
  border-radius: 20px;
  box-shadow: 0px -20px 40px rgba(0, 0, 0, 0.1),
    0px 10px 20px rgba(0, 0, 0, 0.05);
  img {
    width: 100%;
    border-radius: inherit;
  }

  transform: scale(0) translateY(0px);
  opacity: 0;
  transition: all 0.23s ease;
  transform-origin: 50% 120%;
  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #fff;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  &.show-wechat-group-qr-card {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

@media screen and(max-width: 400px) {
  #colorful-face {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

//适配大屏幕
@media screen and(min-width: 1080px) {
  #colorful-face {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    // flex-direction: row;
    justify-content: start;
    align-items: center;
    background-image: url("assets/背景@1x.png");
  }
  #avatar-preview-outter-wrapper {
    margin-top: 14.5vh;
  }

  .main-attributes {
    flex-basis: 35%;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 18px;
  }

  .main-attribute-item {
    display: flex;
    flex-wrap: nowrap;
    height: 50px;
    margin: 25px 0px;
  }

  .attribute-value {
    font-weight: bold;
    font-size: 48px;
    margin-left: 28px;
  }

  .icon-wrapper {
    opacity: 0;
    width: 120px;
    img {
      min-width: 100px;
    }
  }

  #rating-stars {
    margin-top: 9vh;
    .star-list-item {
      overflow: hidden;
      height: 80px;
      margin: 23px 0px;
      list-style: none;
      img {
        min-width: 74px;
      }
    }
  }

  .continue-button {
    height: 119px;
    width: 480px;
    background-image: url("./assets/底部button-常态@1x.png");
  }
}

@media (prefers-color-scheme: dark) {
  #colorful-face {
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
  #colorful-face {
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
