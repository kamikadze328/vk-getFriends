<template>
  <button class="button" @click="logout">Выход</button>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return{
      response:null
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('access_token');
      this.$router.push('/');
    }
  },
  mounted () {
    if (localStorage.getItem('user_id')) {
      this.$axios({
        method: 'post',
        url: 'https://api.vk.com/method/users.get',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        data:{
          user_ids: localStorage.getItem('user_id'),
          v: this.$verVK
        }
      }).then(response => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.response);
        this.response = response.data.response;
      })
    }
  }
}
</script>

<style scoped>

</style>
