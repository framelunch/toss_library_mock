<template>
  <!-- 新着動画 -->
  <section class="list -new mt-15">
    <div class="list__head">
      <h2>新着動画</h2>
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
        context.root.$router.push({path: 'search', hash: 'new' })
      }
    }

    return {
      ...methods
    }
  }
})
</script>