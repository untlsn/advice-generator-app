<script lang="ts" setup>
import { ref, watch } from 'vue';
import { PatternDivider, RandButton } from '~/components/atoms';

const data = ref({
  id: 0,
  advice: '',
});

const rand = () => {
  console.log('rand!');
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => data.slip)
    .then(adv => {
      data.value = adv;
    });
};
rand();

watch(() => data.value.id, (value, oldValue) => {
  if (value == oldValue) {
    console.log('same!');
    rand();
  }
});

</script>

<template>
  <article>
    <h1>advice #{{ data.id }}</h1>
    <p>"{{ data.advice }}"</p>
    <PatternDivider />
    <RandButton @rand="rand" />
  </article>
</template>


<style scoped>
article {
  @apply bg-gray-normal text-text max-w-[38rem] px-12 pt-8 pb-20 rounded-xl text-center font-bold relative;
}
h1 {
  @apply text-neon uppercase;
}
p {
  @apply text-3xl py-10;
}
</style>
