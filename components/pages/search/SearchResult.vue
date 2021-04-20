<template>
  <div class="searchResult">
    <div class="sorts">
      <p class="sorts__title mb-1">並び順</p>
      <div class="d-flex flex-row align-center">
        <v-btn
          v-for="item in sortItems"
          :key="item.id"
          small
          text
          class="btn"
          :class="[
            { '-default': item.default },
            { '-selected': item.default || (item.id === 1 && isChangeOrder.new) || (item.id === 2 && isChangeOrder.show) }
          ]"
          width="88"
          @click="onClicksort(item.id)"
        >
          {{ item.name }}
          <v-icon v-if="!arrowUpIcon">mdi-arrow-down</v-icon>
          <v-icon v-else>mdi-arrow-up</v-icon>
        </v-btn>
      </div>
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
import { defineComponent, reactive, computed, toRefs, onMounted } from '@vue/composition-api'
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
      sortItems: [
        {
          id: 1,
          name:'新着',
          default: true
        },
        {
          id: 2,
          name:'閲覧数',
          default: false
        }
      ],
      isLoading: false,
      tab: null,
      isChangeOrder: {
        new: false,
        show: false
      },
      arrowUpIcon: false
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
      },
      onClicksort (id: number) {
        if (id === 1) {
          reactiveState.isChangeOrder.new = true
          reactiveState.isChangeOrder.show = false
        } else if (id === 2) {
          reactiveState.isChangeOrder.show = true
          reactiveState.isChangeOrder.new = false
          reactiveState.sortItems[0].default = false
        }
        reactiveState.arrowUpIcon = !reactiveState.arrowUpIcon
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

.sorts {
  margin-left: auto;
  margin-right: 40px;
  max-width: 204px;

  @media (--not-sm) {
    margin-bottom: -36px;
  }

  @media (--sm) {
    margin: 16px 0 16px 16px;
    width: 160px;
  }
}

.sorts .btn {
  border-radius: 4px;
  color: #707070;
}

.sorts .btn:not(:last-child) {
  margin-right: 20px;
}

.sorts .btn.-default,
.sorts .btn.-selected {
  border: 1px solid #e764aa;
  color: #e764aa;
}

.sorts .btn:not(.-default, .-selected) .v-icon {
  display: none;
}

.sorts .btn:before {
  background-color: #e764aa;
}

.sorts__title {
  font-size: 14px;
  letter-spacing: .05em;
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