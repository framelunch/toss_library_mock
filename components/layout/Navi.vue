<template>
  <div wrap class="navi">
    <div class="navi__inner">
      <div class="plan">
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

      <div class="btn-wrap">
        <v-btn
          text
          to="/"
          nuxt
          :ripple="false"
        >
          ホーム
        </v-btn>
        <v-btn
          text
          to="/search"
          nuxt
          :ripple="false"
        >
          探す
        </v-btn>
        <v-btn
          text
          to="/cart"
          nuxt
          :ripple="false"
        >
          カート
        </v-btn>
        <v-btn
          text
          to="/mypage"
          nuxt
          :ripple="false"
        >
          マイページ
        </v-btn>
      </div>
    </div>
  </div>
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

<style>
.navi {
  background-color: #333333;
  margin-top: 60px;
  position: sticky;
  top: 60px;
  height: 48px;
  width: 100%;
  z-index: 100;
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

.btn-wrap .v-btn {
  color: #fff;
}
</style>
