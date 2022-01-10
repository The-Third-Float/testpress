<template>
  <div class="home">
    <div class="container">
    </div>
    <div class="spinner-box">
      <div class="leo-border-1">
        <div class="leo-core-1"></div>
      </div>
      <div class="leo-border-2">
        <div class="leo-core-2"></div>
      </div>
    </div>
    <!-- SPINNER ORBITS -->
    <div class="spinner-box">
      <div class="blue-orbit leo">
      </div>
      <div class="green-orbit leo">
      </div>
      <div class="red-orbit leo">
      </div>
      <div class="white-orbit w1 leo"></div>
      <div class="white-orbit w2 leo"></div>
      <div class="white-orbit w3 leo"></div>
    </div>
    <div id="nav" style="bottom: 0;left: 50%;transform: translateX(-50%);position: absolute">
      <router-link to="/home">首页</router-link> |
      <router-link to="/gb">挚爱</router-link> |
      <router-link to="/mcdh">大海</router-link> |
      <router-link to="/nwt">你我</router-link> |
      <router-link to="/sjynczc">苏家</router-link> |
      <router-link to="/ssnhdn">三十</router-link> |
      <router-link to="/swcfsfy">彩凤</router-link> |
      <router-link to="/xkbklzdwp">外婆</router-link>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, defineComponent, reactive } from "vue"
export default defineComponent({
  setup() {
    const count = ref(20)
    console.log(count.value)
  }
})
</script>

<style>
.container {
  position: absolute;
  height: 100vh;
  width: 100%;
  background: url("../assets/gb.jpg") no-repeat center center fixed;
  background-size: cover;
}
.spinner-box {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blue-orbit {
  width: 500px;
  height: 500px;
  border: 1px solid #91daffa5;
  -webkit-animation: spin3D 7s linear 0.2s infinite;
}

.green-orbit {
  width: 360px;
  height: 360px;
  border: 1px solid #91ffbfa5;
  -webkit-animation: spin3D 5s linear 0s infinite;
}

.red-orbit {
  width: 270px;
  height: 270px;
  border: 1px solid #ffca91a5;
  -webkit-animation: spin3D 4s linear 0s infinite;
}
.white-orbit {
  width: 180px;
  height: 180px;
  border: 2px solid #ffffff;
}

.leo {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.leo-border-1 {
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63, 249, 220);
  background: linear-gradient(
      0deg,
      rgba(63, 249, 220, 0.1) 33%,
      rgba(63, 249, 220, 1) 100%
  );
  animation: spin3D 6.4s linear 0s infinite;
}

.leo-core-1 {
  width: 100%;
  height: 100%;
  background-color: #37474faa;
  border-radius: 50%;
}

.leo-border-2 {
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(251, 91, 83);
  background: linear-gradient(
      0deg,
      rgba(251, 91, 83, 0.1) 33%,
      rgba(251, 91, 83, 1) 100%
  );
  animation: spin3D 4.2s linear 0s infinite;
}

.leo-core-2 {
  width: 100%;
  height: 100%;
  background-color: #1d2630aa;
  border-radius: 50%;
}

.w1 {
  -webkit-animation: spin3D 3s linear 0.4s infinite;
}

.w2 {
  -webkit-animation: spin3D 2s linear 0.7s infinite;
}

.w3 {
  -webkit-animation: spin3D 4s linear 0.9s infinite;
}

@keyframes spin3D {
  from {
    transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  }
  to {
    transform: rotate3d(0deg);
  }
}
</style>
