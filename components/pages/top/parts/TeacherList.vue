<template>
  <div class="teacherList">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(teacher, i) in teachers"
        :key="i"
      >
        <div class="slide__inner">
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
import { defineComponent, reactive, toRefs } from "@vue/composition-api"

export default defineComponent({
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      swiperOption: {
        delay: 1000,
        slidesPerView: 5.5,
        spaceBetween: 0,
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

    return {
      ...toRefs(reactiveState)
    }
  }
})
</script>

<style>
.teacherList .slide__inner .image {
  background-color: #E9E9E9;
  border-radius: 50%;
  margin: auto;
  height: 200px;
  width: 200px;
}

.teacherList .slide__inner .name {
  margin-top: 20px;
  text-align: center;
}
</style>