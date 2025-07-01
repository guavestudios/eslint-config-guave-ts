<template>
  <div>test{{ data.b }}</div>
</template>

<script setup lang="ts">
const a = 1

interface MyInterface {
  b: number
}

const data = ref<MyInterface>({ b: a })
</script>
