<template>
  <!-- 新着動画 -->
  <section class="list -new">
    <div class="list__head">
      <h2>新着動画</h2>
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

<style>
.movie.-new {
  margin-top: 60px;
}
</style>