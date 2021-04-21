<template>
  <div class="historyList">
    <v-row
      v-for="i in 15"
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
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

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
          title: '⑥河田孝文ゼミナール第７回講義「６時間目」'
        },
        {
          image: require('@/assets/images/movie03.png'),
          title: '①河田孝文ゼミナール第6回講義「3時間目：理科」'
        },
        {
          image: require('@/assets/images/movie04.png'),
          title: '⑦谷和樹教授研修会「Q＆A」'
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
.historyList .item {
  cursor: pointer;
  transition: .3s;

  @media (--sm) {
    display: flex;
    flex-basis: 100%;
    padding: 8px !important;
  }
}

.historyList .item .image {
  @media (--sm) {
    flex-basis: 45%;
  }
}

.historyList .item .image img {
  width: 100%;
}

.historyList .item .title {
  font-size: 14px !important;
  font-weight: bold;
  margin: 0 !important;
  line-height: 1.8;

  @media (--sm) {
    flex-basis: 65%;
    font-size: 12px !important;
    line-height: 1.6;
    padding-top: 4px;
    padding-left: 12px;
  }
}
</style>