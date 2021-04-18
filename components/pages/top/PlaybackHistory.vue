<template>
  <!-- 再生履歴 -->
  <section class="list -playbackHistory">
    <div class="list__head">
      <h2>再生履歴</h2>
      <small @click="toSearch">一覧を見る</small>
    </div>
    <div v-if="!isMobile" class="list__body">
      <slide-movie-list />
    </div>
    <div v-else class="list__body">
      <movie-list />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import SlideMovieList from '@/components/parts/SlideMovieList.vue'
import MovieList from '@/components/parts/MovieList.vue'

export default defineComponent({
  components: {
    SlideMovieList,
    MovieList
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  setup (_, context: SetupContext) {
    /* Methods */
    const methods = {
      toSearch () {
        context.root.$router.push({path: 'search', hash: 'history' })
      }
    }

    return {
      ...methods
    }
  }
})
</script>