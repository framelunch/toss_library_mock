<template>
  <!-- おすすめ動画 -->
  <section class="list -recomend">
    <div class="list__head">
      <h2>おすすめ</h2>
      <nuxt-link to="/search">一覧を見る</nuxt-link>
    </div>
    <div class="list__body">
      <movie-list />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import MovieList from '~/components/pages/top/list/MovieList.vue'

export default defineComponent({
  components: {
    MovieList
  }
})
</script>