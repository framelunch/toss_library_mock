<template>
  <div class="teacherList -sp">
    <swiper :options="swiperOptionSp">
      <swiper-slide
        v-for="teacher in teachers"
        :key="teacher.id"
      >
        <div
          class="slide__inner"
          @click="toSearch(teacher)"
        >
          <figure class="image"></figure>
          <p class="name">
            {{ teacher.name }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext, toRefs, onMounted } from '@vue/composition-api'

export default defineComponent({
  setup (_, context: SetupContext) {
    /* Reactive State */
    const reactiveState = reactive({
      swiperOptionSp: {
        delay: 1000,
        slidesPerView: 3.5,
        spaceBetween: 25,
        freemode: true
      },
      teachers: [
        {
          id: 1,
          name: '向山 洋一',
          value: 'te01'
        },
        {
          id: 2,
          name: '谷 和樹',
          value: 'te02'
        },
        {
          id: 3,
          name: '河田 孝文',
          value: 'te03'
        },
        {
          id: 4,
          name: '小嶋 悠紀',
          value: 'te04'
        },
        {
          id: 5,
          name: '小野 隆行',
          value: 'te05'
        },
        {
          id: 6,
          name: '長谷川 博之',
          value: 'te06'
        },
        {
          id: 7,
          name: '石坂 陽',
          value: 'te07'
        },
        {
          id: 8,
          name: '向山 行雄',
          value: 'te08'
        },
        {
          id: 9,
          name: '特別講師',
          value: 'te09'
        }
      ]
    })

    /* Methods */
    const methods = {
      toSearch (teacher: any) {
        context.root.$router.push({path: 'search', query: { teacher: `${ teacher.value }` } })
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
.teacherList.-sp .slide__inner {
  cursor: pointer;
  transition: .3s;
}

.teacherList.-sp .slide__inner .image {
  background-color: #E9E9E9;
  border-radius: 50%;
  margin: auto;
  height: 80px;
  width: 80px;
}

.teacherList.-sp .slide__inner .name {
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
}
</style>