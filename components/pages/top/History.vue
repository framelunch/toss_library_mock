<template>
  <!-- 再生履歴 -->
  <section
    class="list history"
    :class="{ '-type01':spLayout.type01 }"
  >
    <div class="list__head">
      <h2>再生履歴</h2>
      <small @click="toSearch">一覧を見る</small>
    </div>

    <v-container v-if="!isMobile" fluid class="list__body pa-0">
      <slide-movie-list />
    </v-container>
    <v-container v-if="isMobile && spLayout.type01" fluid class="list__body pa-0">
      <slide-movie-list-sp />
    </v-container>
    <v-container v-if="isMobile && (spLayout.type02 || spLayout.type03)" fluid class="list__body pa-0">
      <movie-list :class="{ '-type02':spLayout.type02 }" />
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent, SetupContext, reactive, toRefs, onMounted } from '@vue/composition-api'
import SlideMovieList from '@/components/parts/SlideMovieList.vue'
import SlideMovieListSp from '@/components/parts/SlideMovieListSp.vue'
import MovieList from '@/components/parts/MovieList.vue'

export default defineComponent({
  components: {
    SlideMovieList,
    SlideMovieListSp,
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
      spLayout: {
        type01: false,
        type02: false,
        type03: false
      }
    })

    /* Methods */
    const methods = {
      toSearch () {
        const slider = document.querySelectorAll('.slider')
        slider.forEach((item) => {
          item.classList.add('-hidden')
        })

        setTimeout(() => {
          context.root.$router.push('/history')
        }, 110)

        setTimeout(() => {
          slider.forEach((item) => {
            item.classList.remove('-hidden')
          })
        }, 1000)
      }
    }

    onMounted(() => {
      const route_name = context.root.$route.name
      if (route_name === 'index') {
        reactiveState.spLayout.type01 = true
      } else if (route_name === 'home2') {
        reactiveState.spLayout.type02 = true
      } else if (route_name === 'home3') {
        reactiveState.spLayout.type03 = true
      }
    })

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>