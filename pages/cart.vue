<template>
  <v-main class="pa-0">
    <transition-group name="fade" appear>
      <v-container
        v-if="cartItem"
        key="item"
        fluid
        class="cart"
      >
        <h2 class="pb-3 mb-10">カート</h2>
        <section class="cartItem">
          <v-card class="pa-5" style="box-shadow: none !important;">
            <v-row class="flex-row">
              <v-col width="40%">
                <img src="~/assets/images/cart_image.png" alt="" width="90%">
              </v-col>
              <v-col class="pt-10">
                <v-card-title class="px-0">
                  雪国のくらし
                </v-card-title>
                <v-card-text class="px-0">
                <p class="text">
                  伸びやかでダイナミックでしかも高度。それは、超高段の芸である谷 和樹 (玉川大学教職大学院　教授) 1時間目 テープ起こし 解説　子ども達はいったい何のことで討論しているのか根本 直樹 解説　築地氏への提言「強い指導無しに子どもだけで自然に討論は進むことの証明」川原 雅樹 解説　討論が始まるまでに向山型指導のエッセンスがある小貫 義智 解説　圧巻!! 向山洋一氏の特別支援対応術島村 雄次郎 解説　日本中の教師が憧れる授業の姿がここにある手塚 美和 ※解説書はPDFファイルにてのご提供です。冊子の郵送はありません。A4判28ページ
                </p>
                <p class="price">
                  ¥20,000
                </p>
                <small
                  class="delete"
                  @click="cartItem = false"
                >
                  カートから削除
                </small>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </section>

        <hr class="mt-12" color="#f0f0f0" />

        <p
          v-if="cartItem"
          class="price -total ma-5"
        >
          合計：¥{{ totalPrice }}
        </p>

        <section class="payment mt-15">
          <div class="payment__inner">
            <h3 class="pb-3 mb-2">
              お支払い方法
            </h3>
            <v-radio-group v-model="defaultSelected">
              <v-radio
                label="クレジットカード"
                value="credit"
                color="#838383"
                class="mainRadio"
              />
              <v-radio-group
                v-model="defaultCreditSelected"
                class="creditRadios pl-8 mt-2"
              >
                <v-radio
                  v-for="(radio, i) in creditRadios"
                  :key="i"
                  :label="`${radio.label}`"
                  :value=radio.id
                  color="#838383"
                  class="subRadio py-1"
                  @click="test(radio.id)"
                />
              </v-radio-group>

              <transition v-if="showForm" name="fade" apper>
                <form class="pl-8 mb-10">
                  <div class="d-flex flex-column mb-5">
                    <span class="overline grey--text text--darken-1">ご利用可能なカード</span>
                    <img src="~/assets/images/cards.png" alt="" width="200">
                  </div>
                  <v-row>
                    <v-col>
                      <h4>カード番号</h4>
                      <v-text-field
                        outlined
                        hide-details=""
                        dense
                        maxlength="16"
                        required
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h4>有効期限</h4>
                      <v-text-field
                        placeholder="YYYY/MM"
                        dense
                        outlined
                        hide-details
                      />
                    </v-col>
                    <v-col>
                      <h4>セキュリティコード</h4>
                      <v-text-field
                        dense
                        outlined
                        hide-details
                        maxlength="4"
                      />
                    </v-col>
                  </v-row>
                </form>
              </transition>

              <v-radio
                label="銀行振り込み"
                value="bank"
                color="#838383"
                class="mainRadio py-5"
                style="border-top: 2px solid #E9E9E9; border-bottom: 2px solid #E9E9E9"
              />
            </v-radio-group>

            <v-btn
              class="d-flex mx-auto my-5 pa-6"
              outlined
              color="primary darken-2"
              width="300"
            >
              購入する
            </v-btn>
          </div>
        </section>
      </v-container>

      <v-container
        v-else
        key="nothing"
        fluid
        class="cart"
      >
        <h2 class="pb-3 mb-10">カート</h2>
        <p>カートにアイテムはありません。</p>
      </v-container>
    </transition-group>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api"
import SearchList from '@/components/pages/search/list/SearchList.vue'

export default defineComponent({
  components: {
    SearchList
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      cartItem: true,
      totalPrice: '20,000',
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
      ],
      defaultSelected: 'credit',
      creditRadios: [
        {
          id: 1,
          label: 'カード番号：・・・・ ・・・・ ・・・・ 8686'
        },
        {
          id: 2,
          label: '新しいクレジットカードを使う'
        }
      ],
      defaultCreditSelected: 1,
      showForm: false
    })

    /* Methods */
    const methods = {
      showDetail (menuId: string) {
        console.log(menuId)
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
      test (labelId: number) {
        if (labelId === 2) {
          reactiveState.showForm = true
        } else {
          reactiveState.showForm = false
        }
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
.cart {
  padding: 60px 40px;
  width: 100%;
}

.cart h2,
.payment h3 {
  border-bottom: 2px solid #E9E9E9;
}

.price {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: .05em;
  text-align: right;
}

.price.-total {
  font-size: 26px;
}

.delete {
  cursor: pointer;
  display: block;
  text-align: right;
  text-decoration: underline;
}

label {
  color: #333 !important;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: opacity .3s;
}
</style>