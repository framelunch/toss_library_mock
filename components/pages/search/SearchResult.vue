<template>
  <div class="searchResult">
    <div class="selectBox -sort">
      <v-select
        :items="sortItems"
        :value="sortItems[0]"
        label=""
        placeholder=""
        hide-details=""
        dense
        outlined
        @change="changeValue"
      />
    </div>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
      color="#808080"
      class="tabs"
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="tabItems">
      <v-tab-item
        v-for="(item, i) in items"
        :key="i"
      >
        <search-list
          v-if="!isLoading"
          :is-loading="isLoading"
        />
        <loading
          v-else
          :is-loading="isLoading"
        />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from '@vue/composition-api'
import SearchList from '@/components/pages/search/parts/SearchList.vue'
import Loading from '@/components/pages/search/parts/Loading.vue'

export default defineComponent({
  components: {
    SearchList,
    Loading
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      isLoading: false,
      tab: null,
      items: [ 'すべて', '講座', 'セミナー' ],
      sortItems: [ '新着順', '閲覧が多い順', '閲覧が少ない順' ]
    })

    /* Methods */
    const methods = {
      load () {
        reactiveState.isLoading = true
        setTimeout(() => {
          reactiveState.isLoading = false
        }, 2000)
      },
      changeValue (value: any) {
        console.log('value', value)
        methods.load()
      }
    }

    onMounted(() => {
      methods.load()
    })

    return {
      ...toRefs(reactiveState),
      ...methods
    }
  }
})
</script>

<style lang="postcss">
.searchResult {
  position: relative;
}

.selectBox.-sort {
  position: absolute;
  top: -10px;
  right: 40px;
  width: 180px;

  @media (--sm) {
    top: -60px;
    right: auto;
    left: 12px;
    width: 160px;
  }
}

.selectBox.-sort .v-select__selection {
  font-size: .9em;

  @media (--sm) {
    font-size: .8em;
  }
}

.selectBox.-sort input::placeholder {
  color: #909090 !important;
}

.tabs {
  max-width: 300px !important;
  margin-left: 40px;

  @media (--sm) {
    max-width: 100% !important;
    margin-left: 0;
  }
}

.tabs .v-tab.v-tab--active {
  border-top: 1px solid #C3C3C3;
  border-left: 1px solid #C3C3C3;
  border-right: 1px solid #C3C3C3;
  position: relative;
}

.tabItems {
  border-top: 1px solid #C3C3C3;
}
</style>