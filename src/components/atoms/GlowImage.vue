<template>
  <div class="relative">
    <div class="relative group">
      <div class="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>   
      <div class="relative rounded-2xl overflow-hidden border-2 border-primary/30">
        <img :src="src" :alt="alt" class="w-full h-auto rounded-2xl">
        
        <div class="absolute inset-0 bg-primary/10 mix-blend-soft-light"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
}

defineProps<Props>();
</script>
