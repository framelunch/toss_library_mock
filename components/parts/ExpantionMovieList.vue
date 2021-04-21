<template>
  <div class="movieList -expantion">
    <transition-group name="fade" appear>
      <v-row
        v-for="i in number"
        :key="i"
      >
        <!-- pc用 (8ずつ表示) -->
        <v-col
          v-for="(item, i) in items_pc"
          :key="i"
          class="item not-sm-only"
        >
          <figure class="image">
            <img :src="item.image" alt="">
          </figure>
          <p class="title mb-0">
            {{ item.title }}
          </p>
        </v-col>

        <!-- sp用 (10ずつ表示) -->
        <v-col
          v-for="(item, i) in items_sp"
          :key="i"
          class="item sm-only"
        >
          <figure class="image">
            <img :src="item.image" alt="">
          </figure>
          <p class="title mb-0">
            {{ item.title }}
          </p>
        </v-col>
      </v-row>
    </transition-group>

    <v-btn
      text
      plain
      large
      color="#333"
      class="moreBtn d-flex mx-auto"
      @click="number += 2"
    >
      もっと見る
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      items_pc: [
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
      ],
      items_sp: [
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
        }
      ],
      number: 2 // デフォルトで表示する列数
    })

    return {
      ...toRefs(reactiveState)
    }
  }
})
</script>

<style lang="postcss">
/* もっと見るボタン */
.moreBtn {
  @media (--sm) {
    margin-top: 8px;
  }
}

.moreBtn .v-btn__content {
  font-size: 15px;
  opacity: 1 !important;

  @media (--sm) {
    font-size: 13px;
  }
}

.moreBtn:hover .v-btn__content {
  opacity: .7 !important;
}
</style>