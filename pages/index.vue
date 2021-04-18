<template>
  <v-main class="mb-10 pa-0">
    <v-container fluid class="top pa-0">
      <!-- MV -->
      <MV />
      <!-- 新着動画 -->
      <new-movies />
      <!-- おすすめ -->
      <recomend-movies />
      <!-- 再生履歴 -->
      <playback-history />
      <!-- 先生から探す -->
      <teachers />
      <!-- 教科から探す -->
      <subjects />
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api"
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
  }
})
</script>

<style>
section.list {
  margin-top: 40px;
  padding-left: 40px;
  width: 100%;
}

section.list .list__head {
  align-items: center;
  display: flex;
  margin-bottom: 20px;
}

section.list .list__head h2 {
  font-weight: normal;
}

section.list .list__head small {
  color: #64b5f6;
  cursor: pointer;
  font-size: 14px;
  margin-left: 20px;
  transition: .15s;
}
</style>