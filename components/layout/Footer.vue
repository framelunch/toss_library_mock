<template>
  <v-footer padless class="d-print-none">
    <p class="title pl-6 sm-only">TOSSオンライン</p>
    <div class="links">
      <div class="logoFTR not-sm-only"></div>
      <ul>
        <li v-for="(item,i) in items" :key="i">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="cpyrt">
      <div class="logoB"></div>
      <div class="cpy">
        <span class="sysreq">サイトの推奨環境はこちら</span>
        Copyright © 2005- TOSS, TOSS ONLINE All Rights Reserved.
      </div>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      items: [
        { name: 'お問い合わせ' },
        { name: '個人情報の取り扱い' },
        { name: '利用規約' },
        { name: '会社概要' },
        { name: '特定商取引法に基づく表記' }
      ]
    })

    /* Methods */
    const methods = {
    }

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>

<style scoped lang="postcss">
footer {
  align-items: center;
  display: flex;
  background-color: #28292a !important;
  font-size: 1em;
  padding: 40px 0;

  @media (--sm) {
    background-color: #F7F7F7 !important;
    padding-bottom: 100px;
  }
}

.links {
  align-items: center;
  align-content: flex-start;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
}

.sysreq {
  color: white;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: bold;
  margin-right: 1em;
  text-decoration: underline;

  @media (--sm) {
    color: #6F6F6F;
    display: block;
    font-size: 1.1em;
    margin-bottom: .5em;
    margin-right: 0;
  }
}

.cpyrt {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-right: 1.5em;
}

.cpy {
  color: white;
  font-size: 10px;
  margin: 1em 0;

  @media (--sm) {
    color: #6F6F6F;
    padding-left: 10px;
  }
}

.logoFTR {
  background-image: url('~@/assets/images/tosslibrary_logo_pc.png');
  background-size: contain;
  background-position: center left;
  margin: 0 2em;
  height: 2.2em;
  width: 220px;
}

.logoB {
  cursor: pointer;
  background-image: url('~@/assets/images/tossonline_foot_logo.png');
  background-size: contain;
  background-position: center right;
  margin: .5em 0;
  height: 2.2em;
  width: 100%;

  @media (--sm) {
    background-position: center left;
  }
}

ul {
  display: flex;

  @media (--sm) {
    flex-direction: column;
  }
}

li {
  color: white;
  font-size: 0.8em;
  font-weight: 700;
  margin-right: 2em;
  list-style-type: none;
  white-space: nowrap;

  @media (--sm) {
    color: #6F6F6F;
    margin-right: 0;
    line-height: 3;
  }
}

@media (max-width: 1100px) {
  footer {
    flex-direction: column;
    align-items: stretch;
  }

  .logoFTR {
    flex-basis: 100%;
    margin-top: 1.5em;
  }

  .cpyrt {
    align-items: flex-start;
    margin-left: 1em;
  }

  .logoB {
    height: 2em;
  }

  .cpy {
    font-size: 10px;
  }

  .library {
    height: 1.4em;
  }
}
</style>
