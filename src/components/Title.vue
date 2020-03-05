<template>
  <div class="text" id="title">
    <span v-if="first_name">Мде, {{first_name}}, этих-то мы уже видели...</span>
    <span v-else>Опа, а Друзей-то Вы и не ждали</span>

  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      first_name: {
        type: String,
        required: false
      },
    },
    mounted () {

    }
  }

</script>

<style scoped>
  #title {
    font-size: calc((100vw - 460px) / (950 - 460) * (30 - 21) + 21px);
    font-weight: 900;
  }
  @media (min-width: 950px) {
    #title {
      font-size: 30px;
      line-height: 34px;
    }
  }
</style>
