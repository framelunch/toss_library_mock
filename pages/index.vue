<template>
  <v-main class="top px-0">
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
  padding-bottom: 60px !important;

  @media (--sm) {
    padding-top: 0 !important;
    padding-bottom: 30px !important;
  }
}

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
</style>