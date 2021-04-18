<template>
  <div class="footNavi pa-2">
    <div class="footNavi__inner">
      <v-row>
        <v-col
          v-for="(menu, i) in menus"
          :key="i"
        >
          <nuxt-link
            :to="menu.to"
            class="d-flex flex-column justify-center"
          >
            <v-icon
              large
              color="white"
              class="mb-1"
            >
              mdi-{{ menu.icon }}
            </v-icon>
            {{ menu.name }}
          </nuxt-link>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      menus: [
        {
          name: 'ホーム',
          icon: 'home',
          to: '/'
        },
        {
          name: '探す',
          icon: 'magnify',
          to: '/search'
        },
        {
          name: 'カート',
          icon: 'cart',
          to: '/cart'
        },
        {
          name: 'マイページ',
          icon: 'account-circle',
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
.footNavi {
  background-color: #1A1A1A;
  color: #fff;
  font-size: 10px;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  z-index: 1000;
}

.footNavi a {
  color: #fff !important;
  text-decoration: none;
}
</style>
