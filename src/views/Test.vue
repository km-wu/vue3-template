<template>
  <div class="test no-rem" v-bind="$attrs">{{ count }}</div>
  <van-button size="mini" type="primary" @click="add">按钮</van-button>
  <van-button size="mini" type="primary" @click="subtract">按钮1</van-button>
  <br />
  <router-link to="/">
    <van-button size="mini">返回首页</van-button>
  </router-link>
  <svg-icon name="wechat"></svg-icon>
</template>

<script lang="ts" setup="props">
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { onMounted, ref } from 'vue'

// import { Button as vanButton } from 'vant'
import { useStore } from 'vuex'
const count = ref(1)
const store = useStore()
console.log(store)
store.dispatch('test/testAction')
store.dispatch('deepTest/testAction')
onMounted(() => {
  const a = import.meta.env.VITE_API_URL
  console.log(a)
})

const add = () => {
  count.value++
}
const subtract = () => {
  count.value--
}
</script>

<style lang="scss" scoped>
.test {
  display: block;
  width: 100px;
  margin: 0 auto;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  background-color: $primary-color;
}

.no-rem {
  height: 50px;
  line-height: 50px;
}
</style>
