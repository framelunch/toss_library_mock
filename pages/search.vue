<template>
  <v-main class="search px-0">
    <v-container
      fluid
      class="pa-0"
    >
      <div v-if="!isMobile" class="pb-3 search__head">
        <v-row class="justify-space-between">
          <v-col
            class="d-flex justify-center menu all"
            @click="selectAll"
          >
            ALL
          </v-col>
          <v-col
            class="d-flex menu teacher"
            @click="showDetail('teacher')"
          >
            先生から探す
            <div class="icon" />
            <transition name="fade" appear>
              <div
                v-if="showDetailMenu.teacher"
                class="detailMenu -teacher"
              >
                <v-container class="pa-6">
                  <v-row wrap class="flex-column">
                    <v-col
                      v-for="(item, i) in teachers"
                      :key="i"
                      class="detailItem pa-2"
                      @click="selectTeacher"
                    >
                      {{ item.name }}
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </transition>
          </v-col>
          <v-col
            class="d-flex menu subject"
            @click="showDetail('subject')"
          >
            教科から探す
            <div class="icon" />
            <transition name="fade" appear>
              <div
                v-if="showDetailMenu.subject"
                class="detailMenu -subject"
              >
                <v-container class="pa-6">
                  <v-row wrap class="flex-column">
                    <v-col
                      v-for="(item, i) in subjects"
                      :key="i"
                      class="detailItem pa-2"
                      @click="selectSubject"
                    >
                      {{ item.name }}
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </transition>
          </v-col>
          <v-col
            class="d-flex menu category"
            @click="showDetail('category')"
          >
            カテゴリから探す
            <div class="icon" />
            <transition name="fade" appear>
              <div
                v-if="showDetailMenu.category"
                class="detailMenu -category"
              >
                <v-container class="pa-6">
                  <v-row wrap class="flex-column">
                    <v-col
                      v-for="(item, i) in categories"
                      :key="i"
                      class="detailItem pa-2"
                      @click="selectCategory"
                    >
                      {{ item.name }}
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </transition>
          </v-col>
          <v-col
            class="d-flex justify-center menu"
            @click="showDetail('plan')"
          >
            プラン
            <div class="icon" />
            <transition name="fade" appear>
              <div
                v-if="showDetailMenu.plan"
                class="detailMenu -plan"
              >
                <v-container class="pa-6">
                  <v-row wrap class="flex-column">
                    <v-col
                      v-for="(item, i) in plans"
                      :key="i"
                      class="detailItem pa-2"
                      @click="selectPlan"
                    >
                      {{ item.name }}
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </transition>
          </v-col>
        </v-row>
      </div>
      <div v-else class="pb-3 search__head">
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i"
          >
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div
        class="search__body"
        @click="hiddenDetail"
      >
        <div class="title">
          <h2>
            {{ title }}
            <span>の動画とセミナー</span>
          </h2>
          <p class="number">（全60件）</p>
        </div>
        <search-result />
      </div>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, SetupContext } from '@vue/composition-api'
import SearchResult from '@/components/pages/search/SearchResult.vue'

export default defineComponent({
  components: {
    SearchResult
  },
  setup (_, context: SetupContext) {
    /* Reactive State */
    const reactiveState = reactive({
      isMobile: false,
      query: {},
      hash: '',
      all: true,
      title: '全て',
      headMenu: [
        {
          id: 'all',
          name: 'ALL',
          detail: false
        },
        {
          id: 'teacher',
          name: '先生から探す',
          detail: true
        },
        {
          id: 'subject',
          name: '教科から探す',
          detail: true
        },
        {
          id: 'category',
          name: 'カテゴリから探す',
          detail: true
        },
        {
          id: 'plan',
          name: 'プラン',
          detail: true
        }
      ],
      showDetailMenu: {
        teacher: false,
        subject: false,
        category: false,
        plan: false
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
      ],
      subjects: [
        { name: '国語' },
        { name: '算数' },
        { name: '社会' },
        { name: '理科' },
        { name: '生活' },
        { name: '音楽' },
        { name: '図画工作・美術' },
        { name: '体育' }
      ],
      categories: [
        { name: '特別支援教育' },
        { name: '学級経営' },
        { name: '音声のみ' },
        { name: '学校づくり' },
        { name: '向井洋一千葉大学講義シリーズ' },
        { name: 'おしえて！谷先生シリーズ' }
      ],
      plans: [
        { name: 'フリー' },
        { name: 'ライト' },
        { name: 'ベーシック' },
        { name: 'プレミアム' },
        { name: 'パッケージ' }
      ]
    })

    /* Methods */
    const methods = {
      showDetail (menuId: string) {
        if (menuId !== 'all') {
          switch (menuId) {
            case 'teacher':
              reactiveState.showDetailMenu.teacher = !reactiveState.showDetailMenu.teacher
              reactiveState.showDetailMenu.subject = false
              reactiveState.showDetailMenu.category = false
              reactiveState.showDetailMenu.plan = false
              break;
            case 'subject':
              reactiveState.showDetailMenu.subject = !reactiveState.showDetailMenu.subject
              reactiveState.showDetailMenu.teacher = false
              reactiveState.showDetailMenu.category = false
              reactiveState.showDetailMenu.plan = false
              break;
            case 'category':
              reactiveState.showDetailMenu.category = !reactiveState.showDetailMenu.category
              reactiveState.showDetailMenu.teacher = false
              reactiveState.showDetailMenu.subject = false
              reactiveState.showDetailMenu.plan = false
              break;
            case 'plan':
              reactiveState.showDetailMenu.plan = !reactiveState.showDetailMenu.plan
              reactiveState.showDetailMenu.teacher = false
              reactiveState.showDetailMenu.subject = false
              reactiveState.showDetailMenu.category = false
              break;
            default:
              break;
          }
        } else {
          return
        }
      },
      hiddenDetail () {
        reactiveState.showDetailMenu.plan = false
        reactiveState.showDetailMenu.teacher = false
        reactiveState.showDetailMenu.subject = false
        reactiveState.showDetailMenu.category = false
      },
      selectAll () {
        context.root.$router.push('search')
        reactiveState.title = '全て'
      },
      selectTeacher () {
        context.root.$router.push({path: 'search', query: { teacher: 'my' } })
        reactiveState.title = '向山 洋一先生'
      },
      selectSubject () {
        context.root.$router.push({path: 'search', query: { subject: 'lang' } })
        reactiveState.title = '国語'
      },
      selectCategory () {
        context.root.$router.push({path: 'search', query: { category: 'special' } })
        reactiveState.title = '特別支援教育'
      },
      selectPlan () {
        context.root.$router.push({path: 'search', query: { plan: 'free' } })
        reactiveState.title = 'フリープラン'
      }
    }

    onMounted(() => {
      const width = window.outerWidth
      if (width <= 959) {
        reactiveState.isMobile = true
      }

      const query = context.root.$route.query
      const hash = context.root.$route.hash
      reactiveState.query = query
      reactiveState.hash = hash

      if (query) {
        if (query.teacher) {
          reactiveState.title = '向山 洋一先生'

        } else if (query.subject) {
          reactiveState.title = '国語'
        }
      }

      if (hash) {
        if (hash.includes('new')) {
          reactiveState.title = '新着動画'

        } else if (hash.includes('recomend')) {
          reactiveState.title = 'あなたへのおすすめ'

        } else if (hash.includes('history')) {
          reactiveState.title = '再生履歴'
        }
      }
    })

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>

<style lang="postcss">
.search {
  @media (--sm) {
    padding-top: 0 !important;
  }
}

.search h2 {
  @media (--sm) {
    font-size: 20px;
  }
}

.search h2 span {
  font-weight: normal;
}

.search .search__body .title {
  margin-bottom: 20px;
  margin-left: 40px;

  @media (--sm) {
    margin-bottom: 80px;
    margin-left: 10px;
  }
}

.search .number {
  margin-top: 4px;

  @media (--sm) {
    font-size: 14px;
    margin-top: 0;
    line-height: 1.6;
  }
}

.search__head {
  border-bottom: 2px solid #E9E9E9;
  margin: 0 auto 40px;
  max-width: 900px;
}

.search__head .menu {
  cursor: pointer;
  position: relative;
  transition: .3s;
  width: 25%;
}

.search__head .menu.plan {
  justify-content: flex-end;
}

.search__head .icon {
  background-color: #707070;
  cursor: pointer;
  margin-left: 10px;
  position: relative;
  height: 20px;
  width: 20px;
}

.search__head .icon::after {
  content: '';
  display: block;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  margin: auto;
  top: -4px;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  transform: rotate(45deg);
  transition: .3s;
  height: 8px;
  width: 8px;
}

.search__head .menu:hover .icon::after {
  top: -2px;
}

.detailMenu {
  background-color: #fff;
  border: 1px solid #909090;
  border-radius: 20px;
  margin: auto;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  max-width: 640px;
  z-index: 99;
}

.detailMenu .container {
  position: relative;
}

.detailMenu .container::before,
.detailMenu .container::after {
  content: '';
  display: block;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  width: 0;
}

.detailMenu .container::before {
  border-color: transparent transparent #fff transparent;
  border-style: solid;
  border-width: 0 12px 20px 12px;
  top: -20px;
  z-index: 1;
}

.detailMenu .container::after {
  border-color: transparent transparent #909090 transparent;
  border-style: solid;
  border-width: 0 13px 21px 13px;
  top: -22px;
}

.detailItem {
  cursor: pointer;
  flex-basis: 100% !important;
  transition: .15s;
}
</style>