<template>
    <div class="content">
      <Title/>
      <Description v-bind:isMain="fasle"/>
      <Redirect v-if="isRedirect" class="vk-text" ></Redirect>
      <button v-else class="button" id="auth-button" @click="auth">
        Войти через VK
      </button>
    </div>
</template>

<script>

import Redirect from '../components/Redirect'
import Title from '../components/Title'
import Description from '../components/Description'
export default {
  name: "Auth",
  data () {
    return {
      isRedirect: false
    }
  },
  components: { Description, Title, Redirect },
  methods:
    {
      auth: function () {
        this.isRedirect = true;
      }
    },
}
</script>

<style scoped>
    #auth-button {
      margin: 1.0vh 0 2.0vh 0;
      width: calc((100vw - 460px) / (950 - 460) * (190 - 140) + 140px);
      height: calc((100vw - 460px) / (950 - 460) * (55 - 44) + 44px);
      line-height: 20px;
      border-radius: 3px;
    }
    .button {
      margin: 0;
      font-size: calc((100vw - 460px)/(950 - 460) * (18 - 14) + 14px);
      display: inline-block;
      zoom: 1;
      cursor: pointer;
      white-space: nowrap;
      outline: none;
      font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Hebrew", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Osmanya", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", sans-serif;
      vertical-align: top;
      text-align: center;
      text-decoration: none;
      background: #5181b8 none;
      color: #fff;
      border: 0;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .vk-text{
      margin: 1.0vh 0 2.0vh 0;
      height: calc((100vw - 460px)/490*11 + 44px);
    }
    @media (min-width: 950px) {
      #auth-button, .vk-text {
        font-size: 18px;
        width: 190px;
        height: 56px;
      }
    }
</style>
