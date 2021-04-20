<template>
  <div class="slideMovieList -sp slider">
    <swiper :options="swiperOptionSp">
      <swiper-slide
        v-for="(item, i) in items"
        :key="i"
      >
        <div class="slide__inner">
          <figure class="image">
            <img :src="item.image" alt="">
          </figure>
          <p class="title mb-0">
            {{ item.title }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      swiperOptionSp: {
        delay: 1000,
        slidesPerView: 2.5,
        spaceBetween: 20,
        freemode: true
      },
      items: [
        {
          image: require('@/assets/images/movie01.png'),
          title: '①音声：ALL谷和樹セミナーin横浜　ベーシックスキル習得講座(01)「谷先生の飛び込み授業を自身が解説」'
        },
        {
          image: require('@/assets/images/movie02.png'),
          title: '⑥河田孝文ゼミナール第７回講義「６時間目」'
        },
        {
          image: require('@/assets/images/movie03.png'),
          title: '①河田孝文ゼミナール第6回講義「3時間目：理科」'
        },
        {
          image: require('@/assets/images/movie04.png'),
          title: '⑦谷和樹教授研修会「Q＆A」'
        },
        {
          image: require('@/assets/images/movie05.png'),
          title: '①ALL谷和樹セミナーin横浜　ベーシックスキル習得講座(01)「谷先生の飛び込み授業を自身が解説」'
        },
        {
          image: require('@/assets/images/movie06.png'),
          title: '谷和樹セレクションシリーズ 黄金の３日間（実践・その後編）番宣'
        },
        {
          image: require('@/assets/images/movie07.png'),
          title: '谷和樹セレクション2　特別支援'
        },
        {
          image: require('@/assets/images/movie01.png'),
          title: '音声：⑦向山型算数セミナーin東京2017「第7講座：向山洋一氏講演」'
        }
      ]
    })

    return {
      ...toRefs(reactiveState)
    }
  }
})
</script>

<style lang="postcss">
.slideMovieList.-sp .slide__inner {
  cursor: pointer;
}

.slideMovieList.-sp .slide__inner .image img {
  width: 100%;
}

.slideMovieList.-sp .slide__inner .title {
  font-size: 12px !important;
  font-weight: bold;
  line-height: 1.7;
}
</style>