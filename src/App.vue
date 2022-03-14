<script setup lang="ts">
import { ref } from 'vue';
import AdviceGenerator from '~/components/organisms/AdviceGenerator.vue';

const text = ref('Hello World!');
</script>

<template>
  <main class="flex items-center justify-center h-screen bg-gray-dark">
    <AdviceGenerator />
  </main>
</template>
