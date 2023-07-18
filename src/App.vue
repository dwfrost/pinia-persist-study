<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { count } = storeToRefs(store)
console.log(count.value)
const { increment } = store

// todo
// 自定义持久化插件
</script>
<template>
    <!-- 直接从 store 中访问 state -->
    <div>Current Count: {{ count }}</div>
    <button @click="increment">increment</button>
</template>
