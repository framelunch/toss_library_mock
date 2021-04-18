<template>
  <div wrap class="navi">
    <div class="navi__inner">
      <div class="plan not-sm-only">
        <v-chip class="ma-1" small dark color="#e764aa">フリープラン</v-chip>
      </div>

      <div class="searchbox">
        <v-text-field
          outlined
          dense
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
import { defineComponent, reactive, toRefs, onMounted } from '@vue/composition-api'

export default defineComponent({
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      isMobile: false,
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
  width: 400px;

  @media (--sm) {
    width: 90%;
  }
}

.navi .searchbox .v-text-field .v-input__slot {
  background-color: #fff;
  border-radius: 10px;
  min-height: 32px !important;
  padding: 0 12px 0 20px !important;
}

.navi .searchbox .v-text-field input {
  font-size: 14px;
}

.navi .searchbox .v-text-field .v-input__append-inner {
  margin-top: 4px !important;
}

.navi .v-btn {
  color: #fff;
}

.navi .v-btn:before {
  content: none;
}
</style>
