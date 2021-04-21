<template>
  <!-- 再生履歴 -->
  <section class="list history">
    <div class="list__head">
      <h2>再生履歴</h2>
      <small @click="toSearch">一覧を見る</small>
    </div>
    <v-container v-if="!isMobile" fluid class="pa-0 list__body">
      <slide-movie-list />
    </v-container>
    <v-container v-else fluid class="list__body">
      <movie-list />
    </v-container>
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
        const slider = document.querySelectorAll('.slider')
        slider.forEach((item) => {
          item.classList.add('-hidden')
        })

        setTimeout(() => {
          context.root.$router.push({path: 'search', hash: 'history' })
        }, 110)

        setTimeout(() => {
          slider.forEach((item) => {
            item.classList.remove('-hidden')
          })
        }, 1000)
      }
    }

    return {
      ...methods
    }
  }
})
</script>