<template>
  <v-app>
    <Header />
    <nuxt />
    <FootNavi v-if="isMobile" />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from '@vue/composition-api'
import Header from '@/components/layout/Header.vue'
import FootNavi from '@/components/layout/FootNavi.vue'
import Footer from '@/components/layout/Footer.vue'

export default defineComponent({
  components: {
    Header,
    FootNavi,
    Footer
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