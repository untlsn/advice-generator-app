<script lang="ts" setup>
import { ref, watchEffect } from 'vue';

const emit = defineEmits<{
  (emit: 'rand'): void
}>();

const timeoutNum = ref(0);

watchEffect(() => {
  if (timeoutNum.value > 0) {
    setTimeout(() => timeoutNum.value--, 1000);
  }
});

const onClick = () => {
  if (timeoutNum.value == 0) {
    timeoutNum.value = 5;
    emit('rand');
  }
};
</script>

<template>
  <button @click="onClick">
    <svg
      v-if="timeoutNum === 0"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      class="inline"
    >
      <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
    </svg>
    <span v-else>{{ timeoutNum }}</span>
  </button>
</template>

<style scoped lang="scss">
button {
  @apply bg-neon w-16 h-16 rounded-full absolute mx-auto inset-x-0 -bottom-8 text-gray-dark font-bold text-2xl
  before:(content-[''] w-full h-full rounded-full absolute inset-0 opacity-0 transition-opacity)
  hover:before:opacity-100;

  &::before {
    box-shadow: 0 0 30px 15px rgba(83, 255, 171, 0.51);
  }
}

</style>
