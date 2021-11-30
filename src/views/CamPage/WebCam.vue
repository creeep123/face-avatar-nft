<template>
  <div
    id="webcam"
    class="web-camera-container"
  >
    <div class="camera-button">
      <button
        type="button"
        class="opencam-button"
        @click="toggleCamera"
      >
        <span v-if="!isCameraOpen">Open Camera</span>
        <span v-else>Close Camera</span>
      </button>
    </div>

    <div
      v-show="isCameraOpen && isLoading"
      class="camera-loading"
    >
      <ul class="loader-circle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div
      v-if="isCameraOpen"
      v-show="!isLoading"
      class="camera-box"
      :class="{ 'flash' : isShotPhoto }"
    >

      <!-- <div
        class="camera-shutter"
        :class="{'flash' : isShotPhoto}"
      ></div> -->

      <video
        id="inputVideo"
        v-show="!isPhotoTaken"
        ref="camera"
        :width="450"
        :height="337.5"
        autoplay
      ></video>

      <canvas
        v-show="isPhotoTaken"
        id="photoTaken"
        ref="canvas"
        :width="450"
        :height="337.5"
      ></canvas>
    </div>

    <div
      v-if="isCameraOpen && !isLoading"
      class="camera-shoot"
    >
      <button
        id="cam-shot-btn"
        type="button"
        @click="takePhoto"
      >
        拍摄
      </button>
    </div>

    <div
      v-if="isPhotoTaken && isCameraOpen"
      class="camera-download"
    >
      <a
        id="downloadPhoto"
        download="my-photo.jpg"
        class="button"
        role="button"
        @click="downloadImage"
      >
        Download
      </a>
    </div>
  </div>
</template>

<script>
import JSZip from 'jszip';
import matchAttributesFromFaceAttributeInfos from './utils/match'
export default {
  name: "webcam",
  inject: ['faceInfo'],
  mounted () {
    console.log(this.faceInfo)
  },
  data () {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#'
    }
  },

  methods: {
    toggleCamera () {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },

    createCameraElement () {
      this.$nextTick(_ => {
        this.isLoading = true;

        const constraints = (window.constraints = {
          audio: false,
          video: true
        });


        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(stream => {
            this.isLoading = false;
            this.$refs.camera.srcObject = stream;
          })
          .catch(error => {
            this.isLoading = false;
            console.log('error :>> ', error);
            alert("May the browser didn't support or there is some errors.");
          });
      })
    },

    stopCameraStream () {
      const tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    },

    async takePhoto () {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;
        const FLASH_TIMEOUT = 50;
        //截取图片，调用识别接口
        const context = this.$refs.canvas.getContext('2d');
        context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
        const image = this.getCurCanvasImg()
        //人脸信息存入 store
        this.$store.commit('showLoading')
        const res1 = await this.getFaceInfo(image)
        const faceDetailInfo = res1.data.FaceDetailInfos[0].FaceDetailAttributesInfo
        const attributesChosen =
          matchAttributesFromFaceAttributeInfos(faceDetailInfo);
        this.$store.commit('changeChosenAttrs', attributesChosen)
        this.$store.commit('changeAge', faceDetailInfo.Age)
        this.$store.commit('changeBeauty', faceDetailInfo.Beauty)
        this.$store.commit('changeGender', faceDetailInfo.Gender.Type)
        this.$store.commit('changePixel64', res1.data.FaceDetailInfos[0].pixel_b64)
        this.$store.commit('hideLoading')
        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
        //跳转到result页面
        this.$router.push({
          name: 'ResultPage',
        })
      }

      this.isPhotoTaken = !this.isPhotoTaken;
    },

    getCurCanvasImg () {
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
      const image = canvas
      return image
    },

    getFaceInfo (image) {
      //获取照片人脸信息
      return this.$api.getFaceProperties({ image })
    },

    downloadImage () {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
      // .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
  }
};
</script>



<style lang="scss" scoped>
$primary: #0067b6;
body {
  display: flex;
  justify-content: center;
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

  &#cam-shot-btn {
    background-color: $primary;
    color: #fff;

    &:hover {
      background-color: #06538d;
    }
  }
  &#download-btn {
    background-color: transparent;
    border: 1px solid $primary;
    color: $primary;
    width: calc(50% - 5px);

    &:hover {
      background-color: $primary;
      color: #fff;
    }
  }
}

.web-camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid #ccc;
  // border-radius: 4px;
  width: 500px;
  // background-color: pink;

  .camera-button {
    // margin-bottom: 2rem;
    .opencam-button {
      // width: calc(40% - 10px);
      width: 80px;
      color: $primary;
      background-color: rgba($primary, 0.1);
      &:hover {
        background-color: rgba($primary, 0.15);
      }
    }
  }

  .camera-box {
    #inputVideo {
      width: 200px;
      transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg); /* Safari 和 Chrome */
      -moz-transform: rotateY(180deg);
    }
    .camera-shutter {
      opacity: 0;
      width: 80%;
      height: 337.5px;
      background-color: #fff;
      position: absolute;

      &.flash {
        opacity: 1;
      }
    }
  }

  .camera-shoot {
    margin: 8px 0;

    button {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;

    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }

    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;

      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;

        &:nth-child(2) {
          animation-delay: 0.2s;
        }

        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }

  @keyframes preload {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>