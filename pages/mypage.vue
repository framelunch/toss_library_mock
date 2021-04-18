<template>
  <v-main class="mypage">
    <v-container fluid class="pa-0">
      <section class="history">
        <div class="list__head mb-6">
          <h2>再生履歴</h2>
        </div>
        <div v-if="!isMobile" class="list__body">
          <slide-movie-list />
        </div>
        <div v-else class="list__body">
          <movie-list />
        </div>
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
import { defineComponent, reactive, SetupContext, toRefs, onMounted } from '@vue/composition-api'
import SlideMovieList from '@/components/parts/SlideMovieList.vue'
import MovieList from '@/components/parts/MovieList.vue'

export default defineComponent({
  components: {
    SlideMovieList,
    MovieList
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      isMobile: false
    })

    onMounted(() => {
      const width = window.outerWidth
      if (width <= 959) {
        reactiveState.isMobile = true
      }
    })

    return {
      ...toRefs(reactiveState)
    }
  }
})
</script>

<style>
.mypage {
  padding: 60px 0 !important;

  @media (--sm) {
    padding: 20px 0 30px !important;
  }
}

.mypage section {
  padding: 0 40px;

  @media (--sm) {
    padding: 0 20px;
  }
}

.mypage section.history {
  @media (--not-sm) {
    padding-right: 0;
  }
}

.mypage hr {
  margin: 0 40px;

  @media (--sm) {
    margin: 0 20px;
  }
}
</style>