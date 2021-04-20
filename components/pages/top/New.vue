<template>
  <!-- 新着動画 -->
  <section class="list new">
    <div class="list__head">
      <h2>新着動画</h2>
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
import { defineComponent, SetupContext, reactive, toRefs } from '@vue/composition-api'
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
    /* Reactive State */
    const reactiveState = reactive({
    })

    /* Methods */
    const methods = {
      toSearch () {
        const slider = document.querySelectorAll('.slider')
        slider.forEach((item) => {
          item.classList.add('-hidden')
        })

        setTimeout(() => {
          context.root.$router.push({path: 'search', hash: 'new' })
        }, 110)

        setTimeout(() => {
          slider.forEach((item) => {
            item.classList.remove('-hidden')
          })
        }, 1000)
      }
    }

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>

<style lang="postcss">
.list.new {
  margin-top: 60px;

  @media (--sm) {
    margin-top: 32px;
  }
}

.list__body.-hidden {
  opacity: 0;
}
</style>