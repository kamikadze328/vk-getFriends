<template>
  <div class="text" :class="{'selectable':isMain}" id="description">
    <a v-if="isMain" href="#" onclick="return false;">
      <span v-on:click="$emit('update_friends')">> Давай посмотрим других друзей!</span>
    </a>
    <a v-if="isMain" href="#" onclick="return false;">
      <span v-on:click="logout">> Пошли отсюда.. Друзья не нужны..</span>
    </a>
    <span v-else>Авторизируйтесь через VK и узнайте, каких друзей вы точно не ожидали тут увидеть</span>
  </div>
</template>

<script>
  export default {
    name: 'Description',
    props: {
      isMain: Boolean
    },
    methods: {
      logout: function () {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user_id')
        this.$router.push({ name: 'auth' })
      },
    },
  }
</script>

<style scoped>
  #description {
    font-size: calc((100vw - 460px) / (950 - 460) * (18 - 14) + 17px);
    opacity: .5;
    padding: 0.5vw;
    color: #000000;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between
  }
  .selectable{
    text-decoration: underline;
    text-decoration-color: darkblue;
  }

  a, a:visited {
    color: #000000;
    text-decoration-color: darkblue;
  }
  a:active {
    color: #2a5885;
  }

  a:hover {
    color: #2a5885;
  }

  a:first-child{
    padding-bottom: 0.5vh;
  }


  @media (min-width: 950px) {
    #description {
      font-size: 21px;
      line-height: 30px;
    }
  }
</style>
