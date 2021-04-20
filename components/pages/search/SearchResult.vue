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
        color="secondary"
        @change="changeValue"
      />
    </div>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
      hide-slider
      color="#909090"
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
        <v-container fluid class="pa-0">
          <transition-group name="fade" appear>
            <search-list
              v-if="!isLoading"
              key="list"
              :is-loading="isLoading"
            />
            <loading
              v-else
              key="loading"
              :is-loading="isLoading"
            />
          </transition-group>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from '@vue/composition-api'
import SearchList from '@/components/pages/search/parts/SearchList.vue'
import Loading from '@/components/parts/Loading.vue'

export default defineComponent({
  components: {
    SearchList,
    Loading
  },
  setup (_) {
    /* Reactive State */
    const reactiveState = reactive({
      items: [ 'すべて', '講座', 'セミナー' ],
      sortItems: [ '新着順', '閲覧が多い順', '閲覧が少ない順' ],
      isLoading: false,
      tab: null
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
.searchResult .container {
  position: relative;
}

.selectBox.-sort {
  margin-left: auto;
  margin-right: 40px;
  width: 180px;

  @media (--not-sm) {
    margin-bottom: -36px;
  }

  @media (--sm) {
    margin-left: 12px;
    margin-right: auto;
    width: 160px;
  }
}

.selectBox.-sort .v-select__selection {
  font-size: .9em;

  @media (--sm) {
    font-size: .8em;
  }
}

.selectBox.-sort input {
  color: #707070;
}

.selectBox.-sort input::placeholder {
  color: #909090 !important;
}

.v-list-item--link:before {
  background-color: #e764aa !important;
}

.v-list-item__title {
  color: #333 !important;
}

.tabs {
  max-width: 300px !important;
  margin-bottom: -1px;
  margin-left: 40px;
  position: relative;
  z-index: 1;

  @media (--sm) {
    max-width: 100% !important;
    margin-left: 0;
  }
}

.tabs .v-tab.v-tab--active {
  border-top: 1px solid #909090;
  border-left: 1px solid #909090;
  border-right: 1px solid #909090;
  border-bottom: 2px solid #909090;
  position: relative;
}

.tabs .v-tab {
  box-sizing: border-box;
  color: #333 !important;
}

.tabItems {
  border-top: 1px solid #909090;
}
</style>