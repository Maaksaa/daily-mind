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
  justify-content: space-around;
  width: 600px;
  height: 200px;
  border-radius: 10px;
  border: dashed 1px darkolivegreen;
}
</style>
