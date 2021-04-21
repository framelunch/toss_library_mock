<template>
  <v-app-bar
    id="header"
    app
    dense
    elevation="0"
    dark
    height="60"
  >
    <div class="logo">
      <span
        class="anc-target"
        @click="toTop"
      >
        <img src="~/assets/images/tosslibrary_logo_pc.png" alt="TOSS" class="not-sm-only">
        <img src="~/assets/images/tosslibrary_logo_sp.png" alt="TOSS" class="sm-only">
      </span>
    </div>
    <v-spacer />
    <template>
      <v-menu>
        <template #activator="{ on, attrs }">
          <v-btn
            fab
            small
            elevation="0"
            color="accent"
            v-bind="attrs"
            v-on="on"
          >
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

    <navi />

  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from '@vue/composition-api'
import Navi from '@/components/layout/Navi.vue'

export default defineComponent({
  components: {
    Navi
  },
  setup (_, context: SetupContext) {
    /* Reactive State */
    const reactiveState = reactive({
    })

    /* Methods */
    const methods = {
      toTop () {
        const slider = document.querySelectorAll('.slider')
        slider.forEach((item) => {
          item.classList.add('-hidden')
        })

        setTimeout(() => {
          context.root.$router.push('/')
        }, 110)

        setTimeout(() => {
          slider.forEach((item) => {
            item.classList.remove('-hidden')
          })
        }, 1000)
      }
    }

    onMounted(() => {
      const target = document.getElementsByTagName('html')[0]
      const header = document.getElementById('header')
      window.onscroll = () => {
        if (target!.scrollTop > 60 ) {
          header!.classList.add('-hide')
        }
      }
    })

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
  transition: .3s;
}

header.-hide {
  transform: translateY(-60px) !important;
}

header .logo {
  border-bottom: 2px solid #43ac8c;
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

.anc-target {
  cursor: pointer;
}
</style>
