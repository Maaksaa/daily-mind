<script setup lang="ts">
import type { Quote } from '@/interfaces/quote.interface.ts'

const { author, quote, category } = defineProps<Quote>()
</script>

<template>
  <div class="quote-card">
    <div class="quote-card__header">
      {{ author }}
    </div>
    <div class="quote-card__main">
      {{ quote }}
    </div>
    <div class="quote-card__footer">
      {{ category }}
    </div>
  </div>
</template>

<style scoped>
.quote-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 50px 30px;
  width: 906px;
  gap: 30px;
  background: var(--color-quote);
}

.quote-card__header {
  font-style: italic;
  font-size: 20px;
}

.quote-card__main {
  font-size: 36px;
}
</style>
