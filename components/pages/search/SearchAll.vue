<template>
  <div class="searchAll">
    <search-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import SearchList from '@/components/pages/search/parts/SearchList.vue'

export default defineComponent({
  components: {
    SearchList
  }
})
</script>