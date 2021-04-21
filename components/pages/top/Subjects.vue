<template>
  <!-- 教科から探す -->
  <section class="list subject">
    <div class="list__head">
      <h2>教科から探す</h2>
      <div class="selectBox not-sm-only">
        <v-select
          :items="subjects"
          :value="subjects[0]"
          label=""
          placeholder=""
          hide-details=""
          dense
          outlined
          class="rounded-0"
          @change="changeValue"
        />
      </div>
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
import { defineComponent, reactive, toRefs, SetupContext } from '@vue/composition-api'
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
      subjects: [ '国語', '算数', '社会', '理科', '生活', '音楽', '図画工作・美術', '体育' ],
      selectedValue: 'lang',
    })

    /* Methods */
    const methods = {
      changeValue (value: any) {
        switch (value) {
          case '国語':
            reactiveState.selectedValue = 'lang'
            break

          case '算数':
            reactiveState.selectedValue = 'math'
            break

          case '社会':
            reactiveState.selectedValue = 'society'
            break

          case '理科':
            reactiveState.selectedValue = 'science'
            break

          case '生活':
            reactiveState.selectedValue = 'le'
            break

          case '音楽':
            reactiveState.selectedValue = 'music'
            break

          case '図画工作・美術':
            reactiveState.selectedValue = 'ca'
            break

          case '体育':
            reactiveState.selectedValue = 'pe'
            break

          default:
            break
        }
      },
      toSearch () {
        const slider = document.querySelectorAll('.slider')
        slider.forEach((item) => {
          item.classList.add('-hidden')
        })

        setTimeout(() => {
          context.root.$router.push({path: 'search', query: { subject: `${ reactiveState.selectedValue }` } })
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