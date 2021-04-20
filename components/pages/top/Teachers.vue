<template>
  <!-- 先生から探す -->
  <section class="list teacher">
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
          @change="changeValue"
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
        @change="changeValue"
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
      teachers: [ '向山 洋一', '谷 和樹', '河田 孝文', '小嶋 悠紀', '小野 隆行', '長谷川 博之', '石坂 陽', '向山 行雄', '特別講師' ],
      selectedValue: 'te01'
    })

    /* Methods */
    const methods = {
      changeValue (value: any) {
        // console.log('value', value)
        switch (value) {
          case '向山 洋一':
            reactiveState.selectedValue = 'te01'
            break

          case '谷 和樹':
            reactiveState.selectedValue = 'te02'
            break

          case '河田 孝文':
            reactiveState.selectedValue = 'te03'
            break

          case '小嶋 悠紀':
            reactiveState.selectedValue = 'te04'
            break

          case '小野 隆行':
            reactiveState.selectedValue = 'te05'
            break

          case '長谷川 博之':
            reactiveState.selectedValue = 'te06'
            break

          case '石坂 陽':
            reactiveState.selectedValue = 'te07'
            break

          case '向山 行雄':
            reactiveState.selectedValue = 'te08'
            break

          case '特別講師':
            reactiveState.selectedValue = 'te09'
            break

          default:
            break
        }
      },
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