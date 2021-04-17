<template>
  <!-- MV -->
  <div class="mv">
    <v-carousel
      cycle
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="i in 5"
        :key="i"
      >
        <v-sheet
          color="#E9E9E9"
          height="100%"
        >
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div class="mv__index">
      <p class="text">
        学び続ける教師のためのTOSSセミナーを<br>
        オンラインで受けられる動画配信サイト
      </p>
      <p class="title">TOSS 動画ライブラリー</p>
    </div>
  </div>
</template>

<style>
.mv {
  position: relative;
}

.mv .v-carousel__controls {
  background: transparent;
}

.mv .mv__index {
  height: fit-content;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80px;
  line-height: 1.8;
}

.mv .mv__index .text {
  font-size: .85rem;
}

.mv .mv__index .title {
  font-size: 1.6rem !important;
}
</style>