<template>
  <v-container style="height: 100vh;">
    <div class="loading">
      <div class="mainspin">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
        </svg>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style>
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
}

.mainspin {
  animation: spin_frames 2s linear 0s infinite;
  fill: #e4e4e4;
	height: 10vw;
	width: 10vw;
}

@keyframes spin_frames {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>