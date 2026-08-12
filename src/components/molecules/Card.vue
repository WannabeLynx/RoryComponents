<template>
  <article class="group relative flex flex-col rounded-[2px] overflow-hidden bg-popover border border-border transition-all duration-[350ms] hover:border-primary/45 hover:-translate-y-1">
    <div class="relative aspect-[16/9] overflow-hidden border-b border-border">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
      />
      <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]">
        <span class="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-primary/50"></span>
        <span class="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-primary/50"></span>
      </div>

      <span
        v-if="designation"
        class="absolute top-2.5 left-2.5 z-10 font-mono text-[0.58rem] tracking-[0.18em] text-primary bg-background/70 border border-primary/30 rounded-[2px] px-1.5 py-0.5"
      >
        {{ designation }}
      </span>

      <div class="absolute top-2.5 right-2.5 z-10 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener noreferrer" class="w-7 h-7 grid place-items-center rounded-[2px] border border-border bg-background/75 text-foreground hover:text-primary hover:border-primary transition-colors" aria-label="View GitHub repository">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
        <a v-if="demoUrl" :href="demoUrl" target="_blank" rel="noopener noreferrer" class="w-7 h-7 grid place-items-center rounded-[2px] border border-border bg-background/75 text-foreground hover:text-secondary hover:border-secondary transition-colors" aria-label="View live demo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
        </a>
      </div>
    </div>

    <div class="flex flex-col gap-1.5 p-4 flex-grow">
      <span v-if="type" class="font-mono text-[0.56rem] tracking-[0.16em] uppercase text-foreground/40">{{ type }}</span>
      <h3 class="font-lora text-lg text-foreground transition-colors group-hover:text-primary leading-snug">
        {{ title }}
      </h3>
      <p class="text-foreground/60 text-[0.8rem] leading-relaxed line-clamp-2" style="text-wrap:pretty">
        {{ description }}
      </p>

      <div v-if="tags && tags.length" class="flex flex-wrap gap-1.5 mt-auto pt-2.5">
        <span
          v-for="tag in tags"
          :key="tag"
          class="font-mono text-[0.58rem] tracking-[0.08em] uppercase text-foreground/55 border border-border rounded-[2px] px-1.5 py-0.5"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
  demoUrl?: string;
  designation?: string;
  type?: string;
}

withDefaults(defineProps<Props>(), {
  imageAlt: 'Project image',
  tags: () => [],
});
</script>
