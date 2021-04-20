<template>
  <div class="searchAll">
    <v-container fluid class="pa-0">
      <transition-group name="fade" appear>
        <search-list
          v-if="!isLoading"
          key="list"
          :is-loading="isLoading"
        />
        <loading
          v-else
          key="loading"
          :is-loading="isLoading"
        />
      </transition-group>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from '@vue/composition-api'
import SearchList from '@/components/pages/search/parts/SearchList.vue'
import Loading from '@/components/parts/Loading.vue'

export default defineComponent({
  components: {
    SearchList,
    Loading
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      isLoading: false
    })

    /* Methods */
    const methods = {
      load () {
        reactiveState.isLoading = true
        setTimeout(() => {
          reactiveState.isLoading = false
        }, 2000)
      }
    }

    onMounted(() => {
      methods.load()
    })

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>

<style lang="postcss">
.searchAll .container {
  position: relative;
}
</style>