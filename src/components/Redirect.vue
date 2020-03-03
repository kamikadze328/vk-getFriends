<template>
<span class="text"> Redirecting to the auth in {{redirectSeconds}} seconds...
</span>
</template>

<script>
  export default {
    name: 'Redirect',
    data () {
      return {
        redirectSeconds: 3
      }
    },
    methods: {
      getState: function () {
        let text = ''
        const possible = 'abcdefghijklmnopqrstuvwxyz'

        for (let i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
    },
    mounted () {
      localStorage.setItem('access_token', 'ab79a3d9e5c99b22258595452be3231e265ee88a32556780052e2fa8a3b742814140e408e471ad859c001')
      localStorage.setItem('user_id', '141506085');
      localStorage.setItem('state', this.getState());
      console.log(window.location.href);
      if(!this.$BaseURL.includes('localhost')) this.$BaseURL = window.location.href;
      const url = "https://oauth.vk.com/authorize?client_id=" + this.$webAppId + "&display=page&redirect_uri=" + this.$BaseURL + "&scope=friends,offline&response_type=token&v="+ this.$verVK+"&state=" + localStorage.getItem('state');
      setTimeout(() => window.location = url, 3150);
      setTimeout(() => this.redirectSeconds--, 1000);
      setTimeout(() => this.redirectSeconds--, 2000);
      setTimeout(() => this.redirectSeconds--, 3000);
    }
  }
</script>

<style scoped>

</style>
