<template>
  <v-main class="playbackHistory">
    <v-container fluid class="pa-0">
      <h2 class="mb-5">再生履歴</h2>
      <div class="searchAll">
        <v-container fluid class="pa-0">
          <history-list />
        </v-container>
      </div>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import HistoryList from '@/components/pages/history/parts/HistoryList.vue'

export default defineComponent({
  components: {
    HistoryList
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
    })

    /* Methods */
    const methods = {
    }

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>

<style lang="postcss">
.playbackHistory {
  margin-top: 108px;
  padding: 60px 40px !important;

  @media (--sm) {
    padding: 20px 20px 32px !important;
  }
}
</style>