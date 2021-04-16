<template>
  <v-app>
    <Header />
    <Navi />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, onMounted, watch } from "@vue/composition-api"
import Header from '@/components/layout/Header.vue'
import Navi from '@/components/layout/Navi.vue'
import Footer from '@/components/layout/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Navi,
    Footer
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      position: 0
    })

    const methods = {
    }

    onMounted(() => {
      document.onscroll = (e) => {
        reactiveState.position = document.documentElement.scrollTop || document.body.scrollTop
      }
    })

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>