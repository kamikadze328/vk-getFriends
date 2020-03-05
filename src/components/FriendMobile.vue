<template>
  <div class="item">
    <div class="itemAvatar">
      <div class="OwnerAvatar">
        <a class="avatar_link" :href="'https://vk.com/id' + friend.id">
          <img class="avatar_img" :src="friend.photo_50" :alt="friend.first_name">
          <div class="avatar_online"></div>
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
    padding-left: 12px;
    padding-right: 12px;
  }
  .item {
    margin: 0;
    padding: 6px 12px;
    border: 0;
    width: 100%;
    box-sizing: border-box;
    display: table;
    position: relative;
  }
  .avatar_img {
    min-width: 44px;
    min-height: 44px;
    border-radius: 100%;
  }

  .itemAvatar {
    display: table-cell;
    vertical-align: top;
    padding: 0 12px 0 0;
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
    padding: 0 8px 0 0;
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

  a {
    color: #4986cc;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    border: 0;
  }

</style>
