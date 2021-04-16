/*
** vue-awesome-swiper(カルーセル)
*/

import Vue from 'vue'
import 'swiper/swiper-bundle.css'
// @ts-ignore
import Swiper from 'swiper/swiper-bundle.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
Vue.use(getAwesomeSwiper(Swiper))