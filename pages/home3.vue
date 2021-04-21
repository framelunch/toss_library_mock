<template>
  <v-main class="top">
    <v-container fluid class="pa-0">
      <!-- MV -->
      <MV />
      <!-- 新着動画 -->
      <new :is-mobile="isMobile" />
      <!-- おすすめ -->
      <recomend :is-mobile="isMobile" />
      <!-- 再生履歴 -->
      <history :is-mobile="isMobile" />
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
import New from '~/components/pages/top/New.vue'
import Recomend from '@/components/pages/top/Recomend.vue'
import History from '@/components/pages/top/History.vue'
import Teachers from '~/components/pages/top/Teachers.vue'
import Subjects from '~/components/pages/top/Subjects.vue'

export default defineComponent({
  components: {
    MV,
    New,
    Recomend,
    History,
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
.top {
  margin-top: 48px;
  padding-bottom: 60px !important;

  @media (--sm) {
    margin-top: 108px;
    padding-top: 0 !important;
    padding-bottom: 32px !important;
  }
}

.top .list.-type01 {
  @media (--sm) {
    padding-right: 0;
  }
}

.top .movieList.-type02 {
  @media (--sm) {
    margin: auto;
    width: 95%;
  }
}

.selectBox {
  margin-left: 20px;
  width: 180px;

  @media (--sm) {
    margin-bottom: 24px;
    margin-left: 0;
    width: 160px;
  }
}

.selectBox .v-select__selection {
  @media (--sm) {
    font-size: 12px;
  }
}
</style>
