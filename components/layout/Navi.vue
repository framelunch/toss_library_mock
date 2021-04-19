<template>
  <div wrap class="navi">
    <div class="navi__inner">
      <div class="plan not-sm-only">
        <v-chip class="ma-1" small dark color="#e764aa">フリープラン</v-chip>
      </div>

      <div class="searchbox">
        <v-text-field
          dense
          color="#e764aa"
          hide-details=""
          label=""
          placeholder="向山洋一, 雪国のくらし, ごんぎつね, etc"
          append-icon="mdi-magnify"
        />
      </div>

      <div class="btn-wrap not-sm-only">
        <v-btn
          v-for="(btn, i) in btns"
          :key="i"
          text
          :to="btn.to"
          nuxt
        >
          {{ btn.name }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      btns: [
        {
          name: 'ホーム',
          to: '/'
        },
        {
          name: '探す',
          to: '/search'
        },
        {
          name: 'カート',
          to: '/cart'
        },
        {
          name: 'マイページ',
          to: '/mypage'
        }
      ]
    })

    return {
      ...toRefs(reactiveState)
    }
  }
})
</script>

<style lang="postcss">
.navi {
  background-color: #333333;
  margin-top: 60px;
  position: sticky;
  top: 60px;
  height: 48px;
  width: 100%;
  z-index: 2;
}

.navi .navi__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: relative;
}

.navi .searchbox {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 360px;

  @media (--sm) {
    width: 85%;
  }
}

.navi .searchbox .v-input {
  margin-top: 0;
}

.navi .searchbox .v-text-field .v-input__slot {
  background-color: #fff;
  border-radius: 8px;
  min-height: 32px !important;
  padding: 0 12px 0 16px !important;
}

.navi .searchbox .v-text-field input {
  font-size: 14px;

  @media (--sm) {
    font-size: 12px;
  }
}

.navi .searchbox .v-text-field .v-input__append-inner {
  margin-top: 4px !important;
}

.navi .searchbox .v-text-field > .v-input__control > .v-input__slot:after {
  content: none;
}

.navi .v-btn {
  color: #fff;
}

.navi .v-btn:before {
  content: none;
}
</style>
