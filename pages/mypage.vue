<template>
  <v-main class="mypage">
    <v-container fluid class="pa-0">
      <section class="history">
        <div class="list__head">
          <h2>再生履歴</h2>
        </div>
        <div v-if="!isMobile" class="list__body">
          <slide-movie-list />
        </div>
        <div v-else class="list__body">
          <slide-movie-list-sp />
        </div>
      </section>

      <hr class="my-10 not-sm-only" color="#C8C8C8" />

      <section class="favorite not-sm-only">
        <div class="list__head">
          <h2>お気に入り</h2>
          <small>（全8件）</small>
        </div>
        <movie-list />
      </section>

      <hr class="my-10 not-sm-only" color="#C8C8C8" />

      <section class="buy not-sm-only">
        <div class="list__head">
          <h2>購入動画</h2>
          <small>（全8件）</small>
        </div>
        <movie-list />
      </section>

      <section class="sm-only">
        <v-expansion-panels accordion multiple>
          <v-expansion-panel class="favorite">
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              お気に入り
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <movie-list />
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="buy">
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              購入動画
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <movie-list />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </section>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext, toRefs, onMounted } from '@vue/composition-api'
import SlideMovieList from '@/components/parts/SlideMovieList.vue'
import SlideMovieListSp from '@/components/parts/SlideMovieListSp.vue'
import MovieList from '@/components/parts/MovieList.vue'

export default defineComponent({
  components: {
    SlideMovieList,
    SlideMovieListSp,
    MovieList
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      isMobile: false
    })

    onMounted(() => {
      const width = window.outerWidth
      if (width <= 959) {
        reactiveState.isMobile = true
      }
    })

    return {
      ...toRefs(reactiveState)
    }
  }
})
</script>

<style lang="postcss">
.mypage {
  padding: 60px 0 !important;

  @media (--sm) {
    padding: 20px 0 100px 0 !important;
  }
}

.mypage section {
  padding: 0 40px;

  @media (--sm) {
    padding: 0;
  }
}

.mypage .list__head {
  margin-bottom: 20px;

  @media (--sm) {
    margin-bottom: 12px;
  }
}

.mypage .history {
  @media (--sm) {
    margin-bottom: 20px;
    padding-left: 20px;
  }
}

.mypage hr {
  margin: 0 40px;
}

.mypage .v-expansion-panel-content__wrap {
  padding: 20px !important;
}

.mypage .v-expansion-panels {
  border-radius: 0 !important;
}

.mypage .v-expansion-panel .v-expansion-panel-header {
  font-weight: bold;
}

.mypage .v-expansion-panel.favorite .v-expansion-panel-header {
  border-top: 1px solid #C0C0C0;
}

.mypage .v-expansion-panel.buy .v-expansion-panel-header {
  border-top: 1px solid #C0C0C0;
  border-bottom: 1px solid #C0C0C0;
}

.mypage .v-expansion-panel--active > .v-expansion-panel-header {
  background-color: #F5F5F5 !important;
  min-height: auto;
}

.mypage .v-expansion-panel--active.favorite > .v-expansion-panel-header {
  border-bottom: 1px solid #C0C0C0;
}
</style>