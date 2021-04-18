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
      <small @click="toSearch">一覧を見る</small>
    </div>
    <div class="list__body">
      <slide-movie-list />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "@vue/composition-api"
import SlideMovieList from '@/components/parts/SlideMovieList.vue'

export default defineComponent({
  components: {
    SlideMovieList
  },
  setup (_, context: SetupContext) {
    /* Reactive State */
    const reactiveState = reactive({
      subjects: [ '国語', '算数', '社会', '理科', '生活', '音楽', '図画工作・美術', '体育' ]
    })

    /* Methods */
    const methods = {
      toSearch () {
        context.root.$router.push({path: 'search', query: { subject: 'lang' } })
      }
    }

    return {
      ...toRefs(reactiveState),
      ...methods
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