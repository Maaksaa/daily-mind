<script setup lang="ts">
import QuoteCard from '@/components/QuoteCard.vue'
import { getRandomQuote } from '@/api.ts'
import { onMounted, ref } from 'vue'

const quotes = ref()

async function loadQuote() {
  try {
    quotes.value = await getRandomQuote()
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  loadQuote()
})
</script>

<template>
  <h1>Daily Mind</h1>
  <QuoteCard  >
    <slot v-if="quotes">
      {{ quotes[0].quote }}
    </slot>
    <div>
      <button @click="loadQuote">refresh</button>
    </div>

  </QuoteCard>
</template>

<style scoped></style>
