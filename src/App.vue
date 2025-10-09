<script setup lang="ts">
import QuoteCard from '@/components/QuoteCard.vue'
import { getRandomQuote } from '@/api.ts'
import { onMounted, ref } from 'vue'
import type { Quote } from '@/interfaces/quote.interface.ts'

const quote = ref<Quote>({
  author: '',
  quote: '',
  category: '',
})


async function loadQuote() {
  try {
    const temp = await getRandomQuote()
    quote.value = temp[0];
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  loadQuote()
})
</script>

<template>
  <main class="main">
    <h1>Daily Mind</h1>
    <QuoteCard :author="quote.author" :quote="quote.quote" :category="quote.category" />
    <div>
      <button @click="loadQuote">refresh</button>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
