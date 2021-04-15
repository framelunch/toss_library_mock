<template>
  <v-app>
    <Header />
    <Navi />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Header from '@/components/layout/Header.vue'
import Navi from '@/components/layout/Navi.vue'
import Footer from '@/components/layout/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Navi,
    Footer
  },
})
</script>