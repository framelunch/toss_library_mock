<template>
  <!-- おすすめ動画 -->
  <section class="list -recomend">
    <div class="list__head">
      <h2>おすすめ</h2>
      <small @click="toSearch">一覧を見る</small>
    </div>
    <div class="list__body">
      <slide-movie-list />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@vue/composition-api"
import SlideMovieList from '@/components/parts/SlideMovieList.vue'

export default defineComponent({
  components: {
    SlideMovieList
  },
  setup (_, context: SetupContext) {
    /* Methods */
    const methods = {
      toSearch () {
        context.root.$router.push({path: 'search', hash: 'recomend' })
      }
    }

    return {
      ...methods
    }
  }
})
</script>