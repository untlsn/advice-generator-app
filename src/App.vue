<script setup lang="ts">
import { ref } from 'vue';

const text = ref('Hello World!');
</script>

<template>
  <div class="flex items-center justify-center">
    {{ text }}
  </div>
</template>
