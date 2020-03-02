<template>
    <div class="content">
      <div class="text" id="title">
        <span>Опа, а Друзей-то Вы и не ждали</span>
      </div>
      <div class="text" id="description">
        <span>Авторизируйтесь через VK и узнайте, каких друзей вы точно не ожидали тут увидеть</span>
      </div>
      <Redirect class="vk-text" v-if="isRedirect"></Redirect>
      <button v-else class="button" id="auth-button" @click="auth">
        Войти через VK
      </button>
    </div>
</template>

<script>

import Redirect from '../components/Redirect'
export default {
  name: "Auth",
  data () {
    return {
      isRedirect: false
    }
  },
  components: { Redirect },
  methods:
    {
      auth: function () {
        this.isRedirect = true;
      }
    }

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

    .text{
      width: 100%;
      position: relative;
      display: flex;
      flex-shrink: 1;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .vk-text{

    }
    #title {
      font-size: calc((100vw - 460px) / (950 - 460) * (30 - 21) + 21px);
      font-weight: 900;
    }
    #description {
      font-size: calc((100vw - 460px) / (950 - 460) * (18 - 14) + 14px);
      opacity: .5;
    }
</style>
