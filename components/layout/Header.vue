<template>
  <v-app-bar app dense elevation="0" dark height="60">
    <div class="logo">
      <nuxt-link class="anc-target" style="text-decoration: none; color: inherit;" to="/">
        <img src="~/assets/images/tosslibrary_logo_pc.png" alt="" class="not-sm-only">
        <img src="~/assets/images/tosslibrary_logo_sp.png" alt="" class="sm-only">
      </nuxt-link>
    </div>
    <v-spacer />

    <template>
      <v-menu>
        <template #activator="{ on, attrs }">
          <v-btn fab small elevation="0" color="primary" v-bind="attrs" v-on="on">
            TOSS
          </v-btn>
        </template>
        <v-list dense min-width="100">
          <v-list-item>
            <v-list-item-title>
              <v-icon class="mr-2">mdi-account-circle</v-icon>
              TOSS USER NAME
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="">
            <v-list-item-title>アカウント設定</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-title>サインアウト</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

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

<style scoped lang="postcss">
header {
  position: relative;
}

header .logo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

header .logo img {
  display: block;
  margin: auto;
  object-fit: contain;
  height: 100%;
  width: 240px;

  @media (--sm) {
    width: 80px;
  }
}
</style>
