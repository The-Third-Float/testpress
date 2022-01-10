<template>
  <div class="home">
    <div id="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/gb">挚爱</router-link> |
      <router-link to="/mcdh">大海</router-link> |
      <router-link to="/nwt">你我</router-link> |
      <router-link to="/sjynczc">苏家</router-link> |
      <router-link to="/ssnhdn">三十</router-link> |
      <router-link to="/swcfsfy">彩凤</router-link> |
      <router-link to="/xkbklzdwp">外婆</router-link>
    </div>
    <div class="container-middle">
      <videoPlay v-bind="options"/>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { videoPlay } from "vue3-video-play"
const options = reactive({
  width: '950px', //播放器高度
  height: '550px', //播放器高度
  color: "#409eff", //主题色
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false,  //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制器
  title: '', //视频名称
  src: "gb.mp4", //视频源
  poster: '', //封面
})
</script>

<style>
.container-middle {
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
}
</style>
