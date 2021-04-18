<template>
  <!-- 先生から探す -->
  <section class="list teachers">
    <div class="list__head not-sm-only">
      <h2>先生から探す</h2>
      <div class="selectBox">
        <v-select
          :items="teachers"
          :value="teachers[0]"
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

    <div class="list__head sm-only">
      <h2>先生から探す</h2>
      <small @click="toSearch">一覧を見る</small>
    </div>
    <div class="selectBox sm-only">
      <v-select
        :items="teachers"
        :value="teachers[0]"
        label=""
        placeholder=""
        hide-details=""
        dense
        outlined
        class="rounded-0"
      />
    </div>

    <div v-if="!isMobile" class="list__body">
      <teacher-list />
    </div>
    <div v-else class="list__body">
      <teacher-list-sp />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, SetupContext, reactive, toRefs } from '@vue/composition-api'
import TeacherList from '@/components/pages/top/parts/TeacherList.vue'
import TeacherListSp from '@/components/pages/top/parts/TeacherListSp.vue'

export default defineComponent({
  components: {
    TeacherList,
    TeacherListSp
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  setup (_, context: SetupContext) {
    /* Reactive State */
    const reactiveState = reactive({
      teachers: [ '向山 洋一', '谷 和樹', '河田 孝文', '小嶋 悠紀', '小野 隆行', '長谷川 博之', '石坂 陽', '向山 行雄', '特別講師' ]
    })

    /* Methods */
    const methods = {
      toSearch () {
        context.root.$router.push({path: 'search', query: { teacher: 'my' } })
      }
    }

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>

<style lang="postcss">
.list.teachers {
  @media (--sm) {
    padding-right: 0;
  }
}
</style>