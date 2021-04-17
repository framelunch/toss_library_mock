<template>
  <v-main class="px-15 py-10">
    <h2 class="pb-3 mb-6">カート</h2>
    <v-stepper
      v-model="stepper"
      alt-labels
      class="elevation-0"
    >
      <v-stepper-items class="elevation-0">
        <v-stepper-content step="1" class="pa-0">
          <transition-group name="fade" appear>
            <v-container
              v-if="cartItem"
              key="item"
              fluid
              class="cart"
            >
              <section class="cartItem">
                <v-card class="pa-5" style="box-shadow: none !important;">
                  <v-row class="flex-row align-start">
                    <v-col width="40%">
                      <img src="~/assets/images/cart_image.png" alt="" width="90%">
                    </v-col>
                    <v-col>
                      <v-card-title class="px-0">
                        雪国のくらし
                      </v-card-title>
                      <v-card-text class="px-0">
                      <div class="toggleBox">
                        <input id="leer2" type="checkbox"/>
                        <label
                          for="leer2"
                          :class="{ '-open':isOpenTextBox }"
                          @click="openTextBox"
                        >
                          もっと見る
                        </label>
                        <div class="expand">
                          <p class="text mb-0">
                            伸びやかでダイナミックでしかも高度。それは、超高段の芸である谷 和樹 (玉川大学教職大学院　教授) 1時間目 テープ起こし 解説　子ども達はいったい何のことで討論しているのか根本 直樹 解説　築地氏への提言「強い指導無しに子どもだけで自然に討論は進むことの証明」川原 雅樹 解説　討論が始まるまでに向山型指導のエッセンスがある小貫 義智 解説　圧巻!! 向山洋一氏の特別支援対応術島村 雄次郎 解説　日本中の教師が憧れる授業の姿がここにある手塚 美和 ※解説書はPDFファイルにてのご提供です。冊子の郵送はありません。A4判28ページ<br>
                            伸びやかでダイナミックでしかも高度。それは、超高段の芸である谷 和樹 (玉川大学教職大学院　教授) 1時間目 テープ起こし 解説　子ども達はいったい何のことで討論しているのか根本 直樹 解説　築地氏への提言「強い指導無しに子どもだけで自然に討論は進むことの証明」川原 雅樹 解説　討論が始まるまでに向山型指導のエッセンスがある小貫 義智 解説　圧巻!! 向山洋一氏の特別支援対応術島村 雄次郎 解説　日本中の教師が憧れる授業の姿がここにある手塚 美和 ※解説書はPDFファイルにてのご提供です。冊子の郵送はありません。A4判28ページ
                            <br>
                          </p>
                        </div>
                      </div>
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

              <hr class="mt-10" color="#f0f0f0" />

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
                        label="カード番号：・・・・ ・・・・ ・・・・ 8686"
                        value="existing"
                        color="#838383"
                        class="subRadio py-1"
                        @click="defaultSelected = 'credit'; paymentType = 'credit'"
                      />
                      <v-expansion-panels accordion>
                        <v-expansion-panel>
                          <v-expansion-panel-header class="pa-0">
                            <v-radio
                              label="新しいクレジットカードを使う"
                              value="new"
                              color="#838383"
                              class="subRadio py-1"
                              @click="defaultSelected = 'credit'; showForm = true"
                            />
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <form class="pl-3 mb-3">
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
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-radio-group>

                    <v-expansion-panels
                      accordion
                      style="border-top: 2px solid #E9E9E9; border-bottom: 2px solid #E9E9E9"
                    >
                      <v-expansion-panel>
                        <v-expansion-panel-header class="pa-0">
                          <v-radio
                            label="銀行振り込み"
                            value="bank"
                            color="#838383"
                            class="mainRadio py-5 mb-0"
                            @click="paymentType = 'bank'; defaultCreditSelected = ''"
                          />
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <small>
                            ※当法人指定の口座にお客様自身でお振り込みいただきます。<br>
                            お申し込み完了後、ご登録いただいているアドレスに口座が記載されたメールをお送りいたします。<br>
                            ※お申込み日より2週間以内にお振込みがない場合は、自動的にキャンセルさせて頂きますのでご了承下さい。<br>
                            ※ご入金確認後のサービス開始となります。
                          </small>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-radio-group>

                  <v-btn
                    class="d-flex mx-auto my-5 pa-6"
                    outlined
                    color="primary darken-2"
                    width="300"
                    :loading="loading"
                    @click="complete"
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
              class="cart pa-0"
            >
              <p class="ml-3">カートにアイテムはありません。</p>
            </v-container>
          </transition-group>
        </v-stepper-content>

        <v-stepper-content step="2" class="pa-0">
          <v-container
            fluid
            class="complete"
          >
            <section class="text-center">
              <h4>お買い上げありがとうございます！</h4>
              <p class="text">{{ complete_text }}</p>
              <v-btn
                v-if="paymentType === 'credit'"
                class="d-flex mx-auto pa-4"
                outlined
                rounded
                color="#707070"
                width="150"
              >
                今すぐ見る
              </v-btn>
            </section>
            <section class="mt-15">
              <h4 class="mb-5">あなたへのおすすめ動画</h4>
              <movie-list />
            </section>
          </v-container>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-main>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext, toRefs, computed } from "@vue/composition-api"
import MovieList from '@/components/parts/MovieList.vue'

export default defineComponent({
  components: {
    MovieList
  },
  setup (_, context: SetupContext) {
    /* Reactive State */
    const reactiveState = reactive({
      stepper: 1,
      loading: false,
      paymentType: 'credit',
      cartItem: true,
      totalPrice: '20,000',
      isOpenTextBox: false,
      defaultSelected: 'credit',
      defaultCreditSelected: 'existing',
      showForm: false,
      complete_text: computed(() => {
        if (reactiveState.paymentType === 'credit') {
          return '引き続きTOSS動画ライブラリーをお楽しみください。'
        } else if (reactiveState.paymentType === 'bank') {
          return 'ご登録いただいているメールアドレスに振り込み口座情報をお送りいたしました。\nご入金確認後に動画をご視聴いただけます。'
        }
      }),
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

    /* Methods */
    const methods = {
      openTextBox () {
        reactiveState.isOpenTextBox = !reactiveState.isOpenTextBox
      },

      complete () {
        reactiveState.loading = true

        setTimeout(() => {
          reactiveState.stepper = 2
          reactiveState.loading = false
        }, 3000)

        console.log(reactiveState.paymentType)
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
h2,
h3 {
  border-bottom: 2px solid #E9E9E9;
}

/* step1 */
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

form {
  max-width: 600px;
}

.v-expansion-panel::before {
  box-shadow: none !important;
}

.toggleBox {
  display: table;
  position: relative;
}

.expand {
  margin-top: -20px;
  margin-bottom: 40px;
  max-height: 130px;
  overflow: hidden;
  position: relative;
  transition: .8s;
}

.expand::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 20%;
  bottom: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0), white);
  pointer-events: none;
}

.toggleBox input {
  visibility: hidden;
}

.toggleBox label {
  background-color: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  display: block;
  font-size: 12px;
  margin: auto;
  bottom: 10px;
  left: 0;
  right: 0;
  position: absolute;
  text-align: left;
  text-decoration: underline;
  text-transform: uppercase;
  z-index: 15;
}

input[type=checkbox]:checked ~ .expand {
  max-height: 1000px;
}

input[type=checkbox]:checked ~ .expand::before {
  opacity: 0
}

/* step2 */
.complete .text {
  font-size: 14px;
  margin-top: 20px;
  letter-spacing: .02em;
  line-height: 1.8;
  white-space: pre;
}

/* animation */
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