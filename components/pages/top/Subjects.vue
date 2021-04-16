<template>
  <!-- 教科から探す -->
  <section class="list -subjects">
    <div class="list__head">
      <h2>教科から探す</h2>
      <div class="selectBox">
        <v-select
          :items="subjects"
          :value="subjects[0]"
          label=""
          placeholder=""
          hide-details=""
          dense
          outlined
          class="rounded-0"
        />
      </div>
      <nuxt-link to="/search">一覧を見る</nuxt-link>
    </div>
    <div class="list__body">
      <movie-list />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api"
import MovieList from '@/components/pages/top/list/MovieList.vue'

export default defineComponent({
  components: {
    MovieList
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      subjects: [ '国語', '算数', '社会', '理科', '生活', '音楽', '図画工作・美術', '体育' ]
    })

    return {
      ...toRefs(reactiveState)
    }
  }
})
</script>

<style>
.selectBox {
  margin-left: 20px;
  width: 180px;
}
</style>