<template>
  <v-main class="px-15 py-10">
    <v-container
      fluid
      class="mypage"
    >
      <section class="playbackHistory">
        <div class="list__head mb-6">
          <h2>再生履歴</h2>
        </div>
        <slide-movie-list />
      </section>

      <hr class="my-10" color="#C8C8C8" />

      <section class="favorite">
        <div class="list__head mb-6">
          <h2>お気に入り</h2>
          <small>（全8件）</small>
        </div>
        <movie-list />
      </section>

      <hr class="my-10" color="#C8C8C8" />

      <section class="buy">
        <div class="list__head mb-6">
          <h2>購入動画</h2>
          <small>（全8件）</small>
        </div>
        <movie-list />
      </section>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext, toRefs } from "@vue/composition-api"
import SlideMovieList from '@/components/parts/SlideMovieList.vue'
import MovieList from '@/components/parts/MovieList.vue'

export default defineComponent({
  components: {
    SlideMovieList,
    MovieList
  },
  setup (_, context: SetupContext) {
    /* Reactive State */
    const reactiveState = reactive({
    })

    /* Methods */
    const methods = {
    }

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>

<style>
</style>