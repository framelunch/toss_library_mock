<template>
  <v-footer padless color="#28292a" class="d-print-none">
    <div class="links">
      <div class="logoFTR"></div>
      <span v-for="(item,i) in items" :key="i">
        {{ item.name }}
      </span>
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
import { defineComponent, reactive, toRefs } from "@vue/composition-api"

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

<style scoped>
.sysreq {
  font-size:1.3em;
  font-weight:bold;
  color:white;
  text-decoration: underline;
  margin-right:1em;
  cursor:pointer;
}

footer {
  display:flex;
  align-items:center;
  font-size:1em;
}

.links {
  flex-grow:1;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  align-content:flex-start;
}

.cpyrt {
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  margin-right:1.5em;
}

.cpy {
  color:white;
  font-size:10px;
  margin-bottom:1em;
}

.logoB {
  cursor:pointer;
  width:100%;
  height:2.2em;
  background-image: url('~@/assets/images/tossonline_foot_logo.png');
  background-size:contain;
  background-position:center right;
  margin: 1em 0;
}

.logoFTR {
  background-image: url('~@/assets/images/tosslibrary_logo_pc.png');
  background-size:contain;
  background-position:center left;
  margin:0 2em;
  height:2.2em;
  width:220px;
}

span {
  color:white;
  font-size: 0.8em;
  font-weight:700;
  text-decoration:none;
  margin-right:2em;
  white-space: nowrap;
}

@media (max-width: 1100px) {
  .sysreq {
    display:block;
  }

  footer {
    flex-direction:column;
    align-items:stretch;
  }

  .logoFTR {
    flex-basis:100%;
    margin-top:1.5em;
  }

  .cpyrt {
    margin-right:1em;
  }

  .logoB {
    height:2em;
  }

  .cpy {
    font-size:9px;
  }

  .library {
    height:1.4em;
  }

  span {
    margin-right:2em;
    margin-left: 1em;
    margin-top: 1.5em;
  }
}
</style>
