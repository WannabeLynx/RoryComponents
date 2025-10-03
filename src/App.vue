<script setup lang="ts">
import Button from './components/atoms/Button.vue';
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-screen gap-4">
    <div class="flex items-center gap-4">
      <Button label="Primary" primary />
      <Button label="Secondary" />
      <Button label="Glow" glow />
    </div>
    <div class="flex items-center gap-4">
      <Button label="Small" size="small" />
      <Button label="Medium" size="medium" />
      <Button label="Large" size="large" />
    </div>
    <div class="flex items-center gap-4">
      <Button label="Rounded" rounded />
      <Button label="Rounded Glow" rounded glow />
    </div>
  </main>
</template>