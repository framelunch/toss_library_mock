<template>
  <div class="movieList">
    <v-row
      v-for="i in 2"
      :key="i"
    >
      <v-col
        v-for="(item, i) in items"
        :key="i"
        class="item"
      >
        <figure class="image">
          <img :src="item.image" alt="">
        </figure>
        <p class="title">
          {{ item.title }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api"

export default defineComponent({
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      items: [
        {
          image: require('@/assets/images/movie01.png'),
          title: '①音声：ALL谷和樹セミナーin横浜　ベーシックスキル習得講座(01)「谷先生の飛び込み授業を自身が解説」'
        },
        {
          image: require('@/assets/images/movie02.png'),
          title: '向山セレクション2 国語算数番宣'
        },
        {
          image: require('@/assets/images/movie03.png'),
          title: '向山洋一セレクション（番宣）'
        },
        {
          image: require('@/assets/images/movie04.png'),
          title: '伴一孝セレクション'
        }
      ]
    })

    return {
      ...toRefs(reactiveState)
    }
  }
})
</script>

<style>
.movieList .item {
  cursor: pointer;
  transition: .3s;
}

.movieList .item .image img {
  width: 100%;
}

.movieList .item .title {
  font-size: 14px !important;
  font-weight: bold;
  line-height: 1.8;
}
</style>