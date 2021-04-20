<template>
  <div class="slideMovieList slider">
    <swiper :options="swiperOption">
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
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <div class="swiper-button-next" slot="button-next"></div>
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
      swiperOption: {
        speed: 300,
        slidesPerView: 4.5,
        spaceBetween: 24,
        freemode: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
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
.slideMovieList .slide__inner {
  cursor: pointer;
  transition: .3s;
  width: 100%;
}

.slideMovieList .slide__inner .image img {
  width: 100%;
}

.slideMovieList .slide__inner .title {
  font-size: 14px !important;
  font-weight: bold;
  line-height: 1.8;
}

/* Swiper */
.swiper-slide {
  width: 100%;
}

.swiper-button-prev,
.swiper-button-next {
  top: 40%;
}

.swiper-button-prev {
  left: 2%;
}

.swiper-button-next {
  right: 2%;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  content: '';
  border-top: 5px solid #fff;
  border-right: 5px solid #fff;
  height: 28px;
  width: 44px;
  transform: rotate(45deg);
}
</style>