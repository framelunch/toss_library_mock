<template>
  <!-- 先生から探す -->
  <section class="list teacher">
    <div class="list__head">
      <h2>先生から探す</h2>
      <small @click="toSearch">一覧を見る</small>
    </div>

    <v-container v-if="!isMobile" fluid class="list__body pa-0">
      <teacher-list />
    </v-container>
    <v-container v-else fluid class="list__body pa-0">
      <teacher-list-sp />
    </v-container>
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
      selectedValue: 'te01'
    })

    /* Methods */
    const methods = {
      toSearch () {
        const slider = document.querySelectorAll('.slider')
        slider.forEach((item) => {
          item.classList.add('-hidden')
        })

        setTimeout(() => {
          context.root.$router.push({path: 'search', query: { teacher: `${ reactiveState.selectedValue }` } })
        }, 110)

        setTimeout(() => {
          slider.forEach((item) => {
            item.classList.remove('-hidden')
          })
        }, 1000)
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
.list.teacher {
  @media (--sm) {
    padding-right: 0;
  }
}
</style>