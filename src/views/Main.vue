<template>
  <div class="content">
    <button class="button" @click="logout">Выход</button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return{
      response:null,
      token: null,
      user_id:null
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('access_token');
      this.$router.push({name:'auth'});
    },
    getUserInfo: function () {
      this.$jsonp(
        'https://api.vk.com/method/users.get',
        {
          access_token: this.token,
          user_ids: this.user_id,
          v: this.$verVK
        }).then(json => {
        console.log(json.response[0].first_name)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.token = localStorage.getItem('access_token');
    console.log(this.token);
    this.user_id = localStorage.getItem('user_id')
    if (localStorage.getItem('user_id')) {
      this.getUserInfo();
    }
  }
}
</script>

<style scoped>

</style>
