<template>
  <v-container style="height: 100vh;">
    <div class="loading">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style lang="postcss">
/* ローディングアニメーション */
.loading {
  align-items: center;
  display: flex;
  justify-content: center;
  top: 5vw;
  left: 0;
  position: absolute;
  height: 10vw;
  width: 100%;
  z-index: 0;

  @media (--sm) {
    height: 8vw;
    top: 15vw;
  }
}

.spinner {
  text-align: center;
  width: 70px;
}

.spinner > div {
  animation: sk-bouncedelay 1.2s infinite ease-in-out both;
  background-color: #e4e4e4;
  border-radius: 100%;
  display: inline-block;
  margin: 0 4px;
  height: 12px;
  width: 12px;
}

.spinner .bounce1 {
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  animation-delay: -0.16s;
}
</style>