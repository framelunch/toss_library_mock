<template>
  <div class="teacherList -sp">
    <swiper :options="swiperOptionSp">
      <swiper-slide
        v-for="(teacher, i) in teachers"
        :key="i"
      >
        <div
          class="slide__inner"
          @click="toSearch(teacher.name)"
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
        spaceBetween: 25
      },
      teachers: [
        { name: '向山 洋一' },
        { name: '谷 和樹' },
        { name: '河田 孝文' },
        { name: '小嶋 悠紀' },
        { name: '小野 隆行' },
        { name: '長谷川 博之' },
        { name: '石坂 陽' },
        { name: '向山 行雄' },
        { name: '特別講師' }
      ]
    })

    /* Methods */
    const methods = {
      toSearch (name: string) {
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