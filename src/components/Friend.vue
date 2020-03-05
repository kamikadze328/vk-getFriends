<template>
    <div class="row">
      <div class="photo_wrap">
        <a class="photo" :class="{'online':friend.online>0}" :href="'https://vk.com/id' + friend.id">
          <img class ="photo_img" :src="friend.photo_100" :alt="friend.first_name">
        </a>
      </div>
      <div class="user_info">
        <div id="field_title" class="friends_field">
          <a :href="'https://vk.com/id' + friend.id">{{friend.first_name + ' '+ friend.last_name}}</a>
        </div>
        <div v-if="friend.university>0" class="friends_field">{{friend.university_name}}</div>
        <a class="field_act" :href="'https://vk.com/write' + friend.id">Написать сообщение</a>
      </div>
  </div>

</template>

<script>
  export default {
    name: 'Friend',
    props: {
      friend: {
        type: Object,
        required: true
      }
    }
  }

</script>

<style scoped>
  .row {
    width: 100%;
    min-width: 254px;
    clear: both;
    padding: calc(1vh) 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-top: 1px solid #e7e8ec;
  }
  .row:last-child{
    border-bottom: 1px solid #e7e8ec;
  }
  .photo_wrap {
    float: left;
    position: relative;
    width: 11vh;
    height: 11vh;
    padding-right: 2vw;
    overflow: hidden;
  }

  .photo {
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
  }
  a {
     color: #2a5885;
     text-decoration: none;
     cursor: pointer;
   }
  a:hover{
    text-decoration: underline;
  }
  .photo_img {
    width: 100%;
    border-radius: 50%;
    background-color: #f0f2f5;
    position: relative;
  }
  img {
    border: 0;
    color: transparent;
  }
  .photo_img:before, .photo_img:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
  }
  .photo_img:after {
    border-radius: 50%;
    background-color: #f0f2f5;
  }
  .photo_img:before {
    background-color: #fff;
  }

  .user_info {
    padding: 5px 10px 0 0;
    overflow: hidden;
  }
  #field_title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #42648b;
  }
  .friends_field {
    line-height: 1.154;
    font-size: 13px;
    margin-bottom: 9px;
    color: #656565;
    word-wrap: break-word;
  }
  .field_act {
    float: left;
    padding: 0 0 4px;
    font-size: 13px;
    font-family: -apple-system,BlinkMacSystemFont,Roboto,Open Sans,Helvetica Neue,"Noto Sans Armenian","Noto Sans Bengali","Noto Sans Cherokee","Noto Sans Devanagari","Noto Sans Ethiopic","Noto Sans Georgian","Noto Sans Hebrew","Noto Sans Kannada","Noto Sans Khmer","Noto Sans Lao","Noto Sans Osmanya","Noto Sans Tamil","Noto Sans Telugu","Noto Sans Thai",sans-serif
  }
  .row .online:after {
    right: 18%;
    bottom: 4%;
    border: 3px solid #fff;
    width: 10px;
    height: 10px;
  }
  .online:after {
    right: 2%;
    bottom: 2%;
    border: 2px solid #fff;
    width: 8px;
    height: 8px;
  }
  .online:after {
    content: '';
    position: absolute;
    background-color: #8ac176;
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    .photo_wrap{
      padding-right: 15px;
    }
  }

</style>
