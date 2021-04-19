<template>
  <v-main class="search px-0 mt-15">
    <v-container fluid class="pa-0">
      <div class="pb-3 search__head not-sm-only">
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
                      v-for="teacher in teachers"
                      :key="teacher.id"
                      class="detailItem pa-2"
                      @click="selectTeacher(teacher)"
                    >
                      {{ teacher.name }}
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
                      v-for="subject in subjects"
                      :key="subject.id"
                      class="detailItem pa-2"
                      @click="selectSubject(subject)"
                    >
                      {{ subject.name }}
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
                      v-for="category in categories"
                      :key="category.id"
                      class="detailItem pa-2"
                      @click="selectCategory(category)"
                    >
                      {{ category.name }}
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
                      v-for="plan in plans"
                      :key="plan.id"
                      class="detailItem pa-2"
                      @click="selectPlan(plan)"
                    >
                      {{ plan.name }}
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </transition>
          </v-col>
        </v-row>
      </div>
      <div class="pb-8 search__head sm-only">
        <v-expansion-panels accordion>
          <v-expansion-panel class="teacher">
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              先生から探す
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="detailMenu -teacher pl-0">
                <li
                  v-for="teacher in teachers"
                  :key="teacher.id"
                  class="py-3 px-6"
                  @click="selectTeacher(teacher)"
                >
                  {{ teacher.name }}
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="subject">
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              教科から探す
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="detailMenu -subject pl-0">
                <li
                  v-for="subject in subjects"
                  :key="subject.id"
                  class="py-3 px-6"
                  @click="selectSubject(subject)"
                >
                  {{ subject.name }}
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="category">
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              カテゴリーから探す
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="detailMenu -category pl-0">
                <li
                  v-for="category in categories"
                  :key="category.id"
                  class="py-3 px-6"
                  @click="selectCategory(category)"
                >
                  {{ category.name }}
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="plan">
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              プランから探す
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="detailMenu -plan pl-0">
                <li
                  v-for="plan in plans"
                  :key="plan.id"
                  class="py-3 px-6"
                  @click="selectPlan(plan)"
                >
                  {{ plan.name }}
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div
        class="search__body"
        @click="hiddenDetail"
      >
        <h2>
          {{ title }}
          <span>の動画とセミナー</span>
        </h2>
        <p class="number">（全60件）</p>
        <search-all v-if="!isNoTab" />
        <search-result v-else ref="searchResultRef" />
      </div>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, SetupContext, ref } from '@vue/composition-api'
import SearchAll from '@/components/pages/search/SearchAll.vue'
import SearchResult from '@/components/pages/search/SearchResult.vue'

export default defineComponent({
  components: {
    SearchAll,
    SearchResult
  },
  setup (_, context: SetupContext) {
    const searchResultRef = ref()

    /* Reactive State */
    const reactiveState = reactive({
      query: {},
      hash: '',
      isNoTab: true,
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
      ],
      subjects: [
        {
          id: 1,
          name: '国語',
          value: 'lang'
        },
        {
          id: 2,
          name: '算数',
          value: 'math'
        },
        {
          id: 3,
          name: '社会',
          value: 'society'
        },
        {
          id: 4,
          name: '理科',
          value: 'science'
        },
        {
          id: 5,
          name: '生活',
          value: 'le'
        },
        {
          id: 6,
          name: '音楽',
          value: 'music'
        },
        {
          id: 7,
          name: '図画工作・美術',
          value: 'ca'
        },
        {
          id: 8,
          name: '体育',
          value: 'pe'
        }
      ],
      categories: [
        {
          id: 1,
          name: '特別支援教育',
          value: 'cat01'
        },
        {
          id: 2,
          name: '学級経営',
          value: 'cat02'
        },
        {
          id: 3,
          name: '音声のみ',
          value: 'cat03'
        },
        {
          id: 4,
          name: '学校づくり',
          value: 'cat04'
        },
        {
          id: 5,
          name: '向井洋一千葉大学講義シリーズ',
          value: 'cat05'
        },
        {
          id: 6,
          name: 'おしえて！谷先生シリーズ',
          value: 'cat06'
        }
      ],
      plans: [
        {
          id: 1,
          name: 'フリープラン',
          value: 'free'
        },
        {
          id: 2,
          name: 'ライトプラン',
          value: 'lite'
        },
        {
          id: 3,
          name: 'ベーシックプラン',
          value: 'basic'
        },
        {
          id: 4,
          name: 'プレミアムプラン',
          value: 'premium'
        }
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
        reactiveState.isNoTab = true
        context.root.$router.push('search')
        reactiveState.title = '全て'

        reactiveState.showDetailMenu.teacher = false
        reactiveState.showDetailMenu.subject = false
        reactiveState.showDetailMenu.category = false
        reactiveState.showDetailMenu.plan = false

        if (searchResultRef.value) {
          return searchResultRef.value.load()
        }
      },
      selectTeacher (teacher: any) {
        reactiveState.isNoTab = true
        context.root.$router.push({path: 'search', query: { category: `${ teacher.value }` } })
        reactiveState.title = `${ teacher.name }先生`

        if (searchResultRef.value) {
          return searchResultRef.value.load()
        }
      },
      selectSubject (subject: any) {
        reactiveState.isNoTab = true
        context.root.$router.push({path: 'search', query: { category: `${ subject.value }` } })
        reactiveState.title = `${ subject.name }`

        if (searchResultRef.value) {
          return searchResultRef.value.load()
        }
      },
      selectCategory (category: any) {
        reactiveState.isNoTab = true
        context.root.$router.push({path: 'search', query: { category: `${ category.value }` } })
        reactiveState.title = `${ category.name }`

        if (searchResultRef.value) {
          return searchResultRef.value.load()
        }
      },
      selectPlan (plan: any) {
        reactiveState.isNoTab = true
        context.root.$router.push({path: 'search', query: { plan: `${ plan.value }` } })
        reactiveState.title = `${ plan.name }`

        if (searchResultRef.value) {
          return searchResultRef.value.load()
        }
      }
    }

    onMounted(() => {
      const query = context.root.$route.query
      const hash = context.root.$route.hash
      reactiveState.query = query
      reactiveState.hash = hash

      if (query) { // URLにqueryがある場合
        switch (query.teacher) {
          case 'te01':
            reactiveState.title = '向山 洋一先生'
            break

          case 'te02':
            reactiveState.title = '谷 和樹先生'
            break

          case 'te03':
            reactiveState.title = '河田 孝文先生'
            break

          case 'te04':
            reactiveState.title = '小嶋 悠紀先生'
            break

          case 'te05':
            reactiveState.title = '小野 隆行先生'
            break

          case 'te06':
            reactiveState.title = '長谷川 博之先生'
            break

          case 'te07':
            reactiveState.title = '石坂 陽先生'
            break

          case 'te08':
            reactiveState.title = '向山 行雄先生'
            break

          case 'te09':
            reactiveState.title = '特別講師'
            break

          default:
            break
        }

        switch (query.subject) {
          case 'lang':
            reactiveState.title = '国語'
            break

          case 'math':
            reactiveState.title = '算数'
            break

          case 'society':
            reactiveState.title = '社会'
            break

          case 'science':
            reactiveState.title = '理科'
            break

          case 'le':
            reactiveState.title = '生活'
            break

          case 'music':
            reactiveState.title = '音楽'
            break

          case 'ca':
            reactiveState.title = '図画工作・美術'
            break

          case 'pe':
            reactiveState.title = '体育'
            break

          default:
            break
        }

        switch (query.category) {
          case 'cat01':
            reactiveState.title = '特別支援教育'
            break

          case 'cat02':
            reactiveState.title = '学級経営'
            break

          case 'cat03':
            reactiveState.title = '音声のみ'
            break

          case 'cat04':
            reactiveState.title = '学校づくり'
            break

          case 'cat05':
            reactiveState.title = '向井洋一千葉大学講義シリーズ'
            break

          case 'cat06':
            reactiveState.title = 'おしえて！谷先生シリーズ'
            break

          default:
            break
        }

        switch (query.plan) {
          case 'free':
            reactiveState.title = 'フリープラン'
            break

          case 'lite':
            reactiveState.title = 'ライトプラン'
            break

          case 'basic':
            reactiveState.title = 'ベーシックプラン'
            break

          case 'premium':
            reactiveState.title = 'プレミアムプラン'
            break

          default:
            break
        }
      }

      if (hash) { // URLにhashがある場合
        if (hash.includes('new')) {
          reactiveState.title = '新着'

        } else if (hash.includes('recomend')) {
          reactiveState.title = 'あなたへのおすすめ'

        } else if (hash.includes('history')) {
          reactiveState.title = '再生履歴'
          reactiveState.isNoTab = false
        }
      }
    })

    return {
      ...toRefs(reactiveState),
      ...methods,
      searchResultRef
    }
  }
})
</script>

<style lang="postcss">
.search {
  padding-bottom: 60px !important;

  @media (--sm) {
    padding-top: 0 !important;
    padding-bottom: 32px !important;
  }
}

.search h2 {
  margin-left: 40px;

  @media (--sm) {
    margin-bottom: 0 !important;
    margin-left: 12px;
  }
}

.search h2 span {
  font-size: .8em;
  font-weight: normal;
}

.search .number {
  margin-bottom: 20px;
  margin-left: 40px;

  @media (--sm) {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 12px;
    margin-left: 12px;
    line-height: 1.6;
  }
}

.search__head {
  @media (--not-sm) {
    margin: 0 auto 40px;
    max-width: 900px;
    position: relative;
  }
}

.search__head::after {
  @media (--not-sm) {
    content: '';
    display: block;
    background-color: #909090;
    margin: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    width: 95%;
  }
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
  margin-left: 12px;
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
  transition: .15s;
  height: 8px;
  width: 8px;
}

.search__head .menu:hover .icon::after {
  top: -2px;
}

.detailMenu {
  @media (--not-sm) {
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

  @media (--sm) {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
}

.detailMenu li {
  border-bottom: 1px solid #C0C0C0;
  font-size: 13px;
  flex-basis: 50%;
  list-style-type: none;
  position: relative;
}

.detailMenu li:nth-child(odd) {
  border-right: 1px solid #C0C0C0;
}

.detailMenu.-teacher li:last-child,
.detailMenu.-subject li:nth-child(7),
.detailMenu.-subject li:last-child,
.detailMenu.-category li:nth-child(5),
.detailMenu.-category li:last-child {
  border-bottom: none;
}

.detailMenu li::after {
  content: '';
  display: block;
  border-top: 1px solid #707070;
  border-right: 1px solid #707070;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 16px;
  position: absolute;
  transform: rotate(45deg);
  height: 6px;
  width: 6px;
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

.search .v-expansion-panels .v-expansion-panel:not(:first-child)::after {
  border-color: #C0C0C0;
}

.search .v-expansion-panels {
  border-radius: 0 !important;
}

.search .v-expansion-panel-content__wrap {
  padding: 0 !important;
}

.search .v-expansion-panel .v-expansion-panel-header {
  font-size: 14px;
  max-height: 40px;
  min-height: 40px;
}

.search .v-expansion-panel:not(.v-expansion-panel--active).plan .v-expansion-panel-header {
  border-bottom: 1px solid #C0C0C0;
}

.search .v-expansion-panel--active > .v-expansion-panel-header {
  background-color: #F5F5F5 !important;
  min-height: auto;
}
</style>