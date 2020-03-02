<template>
  <div id="app">
    <header>
        <div id="author" class="text">{{author}}</div>
        <!--<a class="header-logo" href="https://vk.com">
          <img src="./assets/vk-logo.png" alt="vk logo">
        </a>-->
        <a class="header-logo" href="https://se.ifmo.ru/courses/web">
          <img src="./assets/itmo-logo.png" alt="itmo logo">
        </a>
    </header>
      <router-view/>
     <footer>
          2020 Сделано с любовью
      </footer>
  </div>
</template>
<script>
  import Auth from './views/Auth'
  export default {
    name: 'App',
    data() {
      return {
        author: '©Сергей Киселёв'
      }
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
      margin: 0 auto;
      max-width: 950px;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
  }

  header {
      padding: 4.0vh 0 2.0vh 0;
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
  }

  footer {
      padding: 3.0vh 0 2.0vh 0;
      width: 100%;
      font-size: calc((100vw - 460px) / (950 - 460) * (11 - 9) + 9px);
      opacity: .3;
  }

</style>
