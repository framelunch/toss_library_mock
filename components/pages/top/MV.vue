<template>
  <!-- MV -->
  <div class="mv">
    <v-carousel
      cycle
      :show-arrows="false"
      height="100%"
    >
      <v-carousel-item
        v-for="i in 5"
        :key="i"
      >
        <v-sheet
          color="#D3D3D3"
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

<style lang="postcss">
.mv {
  height: 500px;
  position: relative;

  @media (--sm) {
    height: 300px;
  }
}

.mv .v-carousel__controls {
  background: transparent;
}

.mv__index {
  height: fit-content;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80px;
  line-height: 1.8;

  @media (--sm) {
    color: #fff;
    top: auto;
    bottom: 40px;
    left: 20px;
  }
}

.mv__index .title {
  font-size: 1.6rem !important;

  @media (--sm) {
    font-size: 1.2rem !important;
  }
}

.mv__index .text {
  font-size: .85rem;

  @media (--sm) {
    font-size: .6rem;
    margin-bottom: 4px !important;
  }
}
</style>