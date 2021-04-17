<template>
  <!-- 先生から探す -->
  <section class="list -teachers">
    <div class="list__head">
      <h2>先生から探す</h2>
      <nuxt-link to="/search">一覧を見る</nuxt-link>
    </div>
    <div class="list__body">
      <teacher-list />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import TeacherList from '@/components/pages/top/parts/TeacherList.vue'

export default defineComponent({
  components: {
    TeacherList
  }
})
</script>