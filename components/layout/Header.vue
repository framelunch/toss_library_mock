<template>
  <v-app-bar app dense elevation="0" dark height="60">
    <div class="logo">
      <nuxt-link class="anc-target" style="text-decoration: none; color: inherit;" to="/#top">
        <img src="~/assets/images/tosslibrary_logo_pc.png" alt="">
      </nuxt-link>
    </div>
    <v-spacer />

    <template v-if="!isAuth">
      <v-btn text @click="isSignin = true">ログイン</v-btn>
      <v-divider vertical class="mx-3" />
      <v-btn text>新規登録</v-btn>
    </template>

    <template v-else>
      <v-menu>
        <template #activator="{ on, attrs }">
          <v-btn fab x-small elevation="0" color="primary" v-bind="attrs" v-on="on">
            TOSS
          </v-btn>
        </template>
        <v-list dense min-width="100">
          <v-list-item>
            <v-list-item-title>
              <v-icon class="mr-2">mdi-account-circle</v-icon>
              TOSS USER NAME
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="/settings">
            <v-list-item-title>アカウント設定</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item @click="signout()">
            <v-list-item-title>サインアウト</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

    <v-dialog
      v-model="isSignin"
      max-width="500"
      persistent
    >
      <v-card>
        <div class="text-right pa-2">
          <v-btn icon elevation="0" @click="isSignin = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card-title class="justify-center mb-3 pt-0">ログイン</v-card-title>
        <v-card-text class="px-10">
          <v-text-field outlined dense placeholder="" label="email" />
          <v-text-field outlined dense placeholder="" label="password" />

          <v-divider class="my-5" />

          <v-btn
            block
            color="primary"
            class="mb-2"
            elevation="0"
            :loading="isLoading"
            :disabled="isLoading"
            @click="signin()"
          >
            ログイン
          </v-btn>
          <nuxt-link to="/forget-password" style="display: block; text-align: center;">パスワードをお忘れですか？</nuxt-link>

          <div class="d-flex align-center mt-8 mb-1">
            <v-divider class="my-5" />
            <span class="px-2 caption">アカウントをお持ちではない方</span>
            <v-divider class="my-5" />
          </div>

          <v-btn color="accent" block elevation="0">アカウント作成</v-btn>
        </v-card-text>
        <v-card-actions class="px-10 pb-10">

        </v-card-actions>

      </v-card>
    </v-dialog>

  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watchEffect } from "@vue/composition-api"

export default defineComponent({
  setup (_, ctx) {
    const router = ctx.root.$router

    /* Reactive State */
    const reactiveState = reactive({
      isAuth: false,
      isLoading: false,
      isSignin: false,
    })

    watchEffect(() => {
      if (/videoplan|settings/.test(router.currentRoute.name || '')) {
        reactiveState.isAuth = true
      }
    })

    /* Methods */
    const methods = {
      signin () {
        reactiveState.isLoading = true
        setTimeout(() => {
          reactiveState.isAuth = true
          reactiveState.isLoading = false
          reactiveState.isSignin = false
        }, 2000)
      },

      signout () {
        router.push('/')
        setTimeout(() => {
          reactiveState.isAuth = false
        }, 500)
      }
    }

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>

<style scoped>
header {
  position: relative;
}

header .logo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

header .logo img {
  display: block;
  margin: auto;
  object-fit: contain;
  height: 100%;
  width: 240px;
}
</style>
