<template>
    <div id="app" :class="{'oneElement':isRotate}">
    <header v-if="!isRotate">
        <div id="author">©Сергей Киселёв</div>
        <a class="header-logo" href="https://se.ifmo.ru/courses/web">
          <img src="./assets/itmo-logo.png" alt="itmo logo">
        </a>
    </header>
      <router-view/>
     <footer v-if="!isRotate">
          2020 Сделано с любовью
      </footer>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data () {
      return {
        isRotate: false
      }
    },
    methods: {
      isRotateFunc: function () {
        const w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth,
          y = w.innerHeight || e.clientHeight || g.clientHeight;
        this.isRotate = this.$router.currentRoute.name==='main'
          && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
            || Number(y) < 500)
          && x > y;
      }
    },
    mounted () {
      window.addEventListener("orientationchange", () => this.isRotateFunc(), false);
      window.addEventListener("resize", () => this.isRotateFunc(), false);
      this.isRotateFunc()
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html, body{
    width: 100%;
    height: 100%;
    min-height: 100%;
  }

  body {
    background: #F9F9F9;
    color: black;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    min-height: 100%;
    margin: 0 auto;
    max-width: 950px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
  #a>*:first-child{
    padding-top: 4.0vh;
  }
  #a>*:first-child {
    padding-top: 4.0vh;
  }

  header {
    padding-top: 4vh;
    padding-bottom: 2vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-logo img {
      height: 36px;
  }
  #author{
    text-transform: uppercase;
    letter-spacing: .1vh;
    font-size: 16px;
    font-weight: 900;
    opacity: .35;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .text{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  footer {
      padding: 1.0vh 0 2.0vh 0;
      width: 100%;
      font-size: calc((100vw - 460px) / (950 - 460) * (11 - 9) + 9px);
      opacity: .3;
  }
  .oneElement{
    margin: 2vh 0 1vh 0;
  }

  @media (max-width: 330px) {
    #app {
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
    }
  }
</style>
