<template>
  <div class="content">
    <Title v-bind:first_name="user_info.first_name"></Title>
    <Description isMain v-on:update_friends="this.getListFriends"/>
    <div class="friends_list">
      <template v-if="!isMobile">
        <Friend  v-for="friend in response.items"
                 v-bind:friend="friend"
                 v-bind:key="friend.id"></Friend>
      </template>
      <template v-else>
        <FriendMobile v-for="friend in response.items"
                      v-bind:friend="friend"
                      v-bind:key="friend.id"></FriendMobile>
      </template>

    </div>
  </div>
</template>

<script>
import Friend from '../components/Friend'
import FriendMobile from '../components/FriendMobile'
import Title from '../components/Title'
import Description from '../components/Description'
export default {
  name: 'Main',
  components: { FriendMobile, Description, Title, Friend },
  data() {
    return{
      response:[],
      token: null,
      user_id:null,
      user_info:{first_name:'Лапушка'},
      isMobile: false,
    }
  },
  methods: {
    getUserInfo: function () {
      this.$jsonp(
        'https://api.vk.com/method/users.get',
        {
          access_token: this.token,
          user_ids: this.user_id,
          v: this.$verVK
        }).then(json => {
          this.user_info = json.response[0]
      }).catch(err => {
        console.log(err)
      })
    },
    getListFriends: function () {
      this.$jsonp(
        'https://api.vk.com/method/friends.get',
        {
          access_token: this.token,
          user_ids: this.user_id,
          order: 'random',
          count: 5,
          fields: 'education,photo_100,photo_50,online',
          v: this.$verVK
        }).then(json => {
        this.response = json.response;
      }).catch(err => {
        console.log(err)
      })
    },
    isMobileFunc: function () {
      const w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
        || Number(x) < 500)
        this.isMobile = true
    }
  },
  mounted () {
    this.isMobileFunc()
    if (!localStorage.getItem('access_token')
      || localStorage.getItem('access_token') === 'access_denied'
      || !localStorage.getItem('user_id'))
      this.$router.push({ name: 'auth' })
    this.token = localStorage.getItem('access_token')
    this.user_id = localStorage.getItem('user_id')
    this.getUserInfo()
    this.getListFriends()
  },
}
</script>

<style scoped>
  .friends_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 100%;
    padding-top: 0.5vh;
  }
  @media (min-width: 500px) {
    .friends_list {
      max-width: 500px;
    }
  }
</style>
