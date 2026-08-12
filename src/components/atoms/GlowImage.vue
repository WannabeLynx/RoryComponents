<template>
  <div class="relative group">
    <div class="absolute -inset-2 bg-primary/10 blur-2xl rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <div class="relative border border-border bg-popover p-2.5 rounded-[2px]">
      <span class="pointer-events-none absolute -top-px -left-px w-3 h-3 border-l border-t border-primary/60"></span>
      <span class="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-r border-b border-primary/60"></span>

      <div class="relative overflow-hidden rounded-[1px]">
        <img :src="src" :alt="alt" class="w-full h-auto block rounded-[1px]" />
        <div class="absolute inset-0 bg-primary/5 mix-blend-soft-light pointer-events-none"></div>
      </div>

      <div
        v-if="caption || tag"
        class="flex justify-between items-center pt-2.5 px-1 font-mono text-[0.6rem] tracking-[0.14em] uppercase text-foreground/40"
      >
        <span>{{ caption }}</span>
        <span v-if="tag" class="text-primary">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

defineProps<Props>();
</script>
