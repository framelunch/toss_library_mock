<template>
  <!-- おすすめ動画 -->
  <section class="list -recomend">
    <div class="list__head">
      <h2>おすすめ</h2>
      <nuxt-link to="/search">一覧を見る</nuxt-link>
    </div>
    <div class="list__body">
      <slide-movie-list />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import SlideMovieList from '@/components/parts/SlideMovieList.vue'

export default defineComponent({
  components: {
    SlideMovieList
  }
})
</script>