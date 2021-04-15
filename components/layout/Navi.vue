<template>
  <v-main>
    <v-layout wrap class="navi">
      <div class="plan">
        <v-chip class="ma-1" small dark color="#e764aa">フリープラン</v-chip>
      </div>

      <div class="searchbox">
        <v-input
          outlined
          dense
          append-icon="mdi-search"
          hide-details=""
          label=""
          placeholder="向山洋一, 雪国のくらし, ごんぎつね, etc"
        />
      </div>

      <div class="btn-wrap">
        <v-btn text>ホーム</v-btn>
        <v-btn text>探す</v-btn>
        <v-btn text>カート</v-btn>
        <v-btn text>マイページ</v-btn>
      </div>
    </v-layout>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api"

export default defineComponent({
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

<style scoped>
.navi {
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
}

.btn-wrap .v-btn {
  color: #fff;
}
</style>
