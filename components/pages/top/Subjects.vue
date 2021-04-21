<template>
  <!-- 教科から探す -->
  <section
    class="list subject"
    :class="{ '-type01':spLayout.type01 }"
  >
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
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from '@vue/composition-api'
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
      subjects: [ '国語', '算数', '社会', '理科', '生活', '音楽', '図画工作・美術', '体育' ],
      selectedValue: 'lang',
      spLayout: {
        type01: false,
        type02: false,
        type03: false
      }
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