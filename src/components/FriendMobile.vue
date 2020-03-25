<template>
  <div class="item">
    <div class="itemAvatar">
      <div class="OwnerAvatar">
        <a class="avatar_link" :class="{'online':friend.online>0}" :href="'https://vk.com/id' + friend.id">
          <img class="avatar_img" :src="friend.photo_50" :alt="friend.first_name">
        </a>
      </div>
    </div>
    <div class="itemBody">
      <a class="si_owner" :href="'https://vk.com/id' + friend.id">{{friend.first_name + ' '+ friend.last_name}}</a>
    </div>
    <div class="itemWrite">
      <a class="itemWriteAction" :href="'https://vk.com/write' + friend.id" aria-label="Написать">
        <div class="iconMessage"></div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FriendMobile',
    props: {
      friend: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .item {
    margin: 0;
    padding: 6px 12px;
    border: 0;
    width: 100%;
    box-sizing: border-box;
    display: table;
    position: relative;
    font-family: -apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Segoe WP,Helvetica Neue,Lucida Grande,Verdana,Tahoma,Arial,sans-serif!important;
  }
  .avatar_img {
    width: 44px;
    height: 44px;
    border-radius: 100%;
  }

  .itemAvatar {
    display: table-cell;
    vertical-align: top;
  }
  .OwnerAvatar {
    position: relative;
    font-size: 0;
    line-height: 0;
  }
  .avatar_link {
    display: block;
  }
  .itemBody {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    box-sizing: border-box;
    word-break: break-word;
    padding: 0 8px 0 12px;
  }
  .itemBody .si_owner {
    height: 40px;
    width: 100%;
  }
  .si_owner {
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    color: #2c2d2e;
    font-size: 16px;
    font-weight: 400;
    display: table-cell;
    vertical-align: middle;
  }
  .itemWrite {
    display: table-cell;
    vertical-align: top;
  }
  .itemWriteAction {
    display: block;
    width: 24px;
    height: 24px;
    padding: 10px 12px 10px 0;
    margin: 0 -12px 0 0;
  }
  .iconMessage {
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-image: url(../assets/mailIcom.png);
  }
  .online:after {
    right: 3%;
    bottom: 3%;
    border: solid 2px #fff;
    width: 8px;
    height: 8px;
  }
  .online:after {
    content: '';
    position: absolute;
    background-color: #8ac176;
    border-radius: 50%;
  }

  a {
    color: #4986cc;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    border: 0;
  }

</style>
