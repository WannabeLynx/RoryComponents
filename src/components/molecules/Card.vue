<template>
  <div class="group relative rounded-xl overflow-hidden backdrop-blur-sm bg-popover/60 border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb)_/_0.3)] hover:-translate-y-2">
    <!-- Image Section -->
    <div class="relative h-48 overflow-hidden">
      <img 
        :src="imageUrl" 
        :alt="imageAlt" 
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-popover to-transparent opacity-60"></div>
      
      <!-- Hover Icons -->
      <div class="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener noreferrer" class="p-2 bg-popover/80 backdrop-blur-sm rounded-lg border border-primary/40 hover:bg-primary/20 transition-colors" aria-label="View GitHub repository">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
        <a v-if="demoUrl" :href="demoUrl" target="_blank" rel="noopener noreferrer" class="p-2 bg-popover/80 backdrop-blur-sm rounded-lg border border-primary/40 hover:bg-primary/20 transition-colors" aria-label="View live demo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
        </a>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-6 space-y-4">
      <h3 class="text-xl text-foreground group-hover:text-primary transition-colors">
        {{ title }}
      </h3>
      <p class="text-foreground/70 text-sm leading-relaxed">
        {{ description }}
      </p>
      
      <!-- Tags Section -->
      <div v-if="tags && tags.length" class="flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-transparent border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary transition-colors">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Hover Gradient Overlay -->
    <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-accent/5 pointer-events-none transition-all duration-300"></div>
  </div>
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
}

withDefaults(defineProps<Props>(), {
  imageAlt: 'Project image',
  tags: () => [],
});
</script>

