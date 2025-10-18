<template>
  <div class="backdrop-blur-sm bg-popover/60 border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb)_/_0.15)]">
    <h3 class="text-2xl text-foreground mb-6">{{ title }}</h3>
    <div class="space-y-4">
      <a 
        v-for="link in links" 
        :key="link.label" 
        :href="link.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="block"
      >
        <Badge variant="skill" :label="link.label">
          <template #icon>
            <component :is="link.icon" />
          </template>
        </Badge>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';
import Badge from '../atoms/Badge.vue';

interface SocialLink {
  label: string;
  url: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>;
}

interface Props {
  title: string;
  links: SocialLink[];
}

defineProps<Props>();
</script>
