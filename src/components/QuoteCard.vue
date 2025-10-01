<script setup lang="ts">
const { text } = defineProps<{ text: string }>()
</script>

<template>
  <div class="quote-card">
    <div class="quote-card__text">
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.quote-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 200px;
  border-radius: 10px;
  border: dashed 1px darkolivegreen;
}
</style>
