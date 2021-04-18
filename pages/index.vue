<template>
  <v-main class="mb-10 pa-0">
    <v-container fluid class="top pa-0">
      <!-- MV -->
      <MV />
      <!-- 新着動画 -->
      <new-movies :is-mobile="isMobile" />
      <!-- おすすめ -->
      <recomend-movies :is-mobile="isMobile" />
      <!-- 再生履歴 -->
      <playback-history :is-mobile="isMobile" />
      <!-- 先生から探す -->
      <teachers :is-mobile="isMobile" />
      <!-- 教科から探す -->
      <subjects :is-mobile="isMobile" />
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from '@vue/composition-api'
import MV from '@/components/pages/top/MV.vue'
import NewMovies from '@/components/pages/top/NewMovies.vue'
import RecomendMovies from '@/components/pages/top/RecomendMovies.vue'
import PlaybackHistory from '@/components/pages/top/PlaybackHistory.vue'
import Teachers from '~/components/pages/top/Teachers.vue'
import Subjects from '~/components/pages/top/Subjects.vue'

export default defineComponent({
  components: {
    MV,
    NewMovies,
    RecomendMovies,
    PlaybackHistory,
    Teachers,
    Subjects
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

<style lang="postcss">
section.list {
  margin-top: 40px;
  padding-left: 40px;
  width: 100%;

  @media (--sm) {
    padding: 0 20px;
  }
}

section.list .list__head:not(.sm-only) {
  align-items: center;
  display: flex;
  margin-bottom: 24px;
}

section.list .list__head.sm-only {
  align-items: center;
  display: flex;
  margin-bottom: 8px;
}

.selectBox {
  margin-left: 20px;
  width: 180px;

  @media (--sm) {
    margin-left: 10px;
    width: 160px;
  }
}

.selectBox.sm-only {
  margin-left: 0;
  margin-bottom: 24px;
}

.selectBox .v-select__selection {
  @media (--sm) {
    font-size: 12px;
  }
}

section.list .list__head h2 {
  @media (--sm) {
    font-size: 18px;
  }
}

section.list .list__head small {
  color: #64b5f6;
  cursor: pointer;
  font-size: 14px;
  margin-left: 20px;
  transition: .15s;

  @media (--sm) {
    font-size: 12px;
  }
}
</style>