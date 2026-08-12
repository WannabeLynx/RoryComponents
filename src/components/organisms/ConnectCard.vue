<template>
  <div class="border border-border bg-popover rounded-[2px] p-2">
    <h3 v-if="title" class="font-mono text-[0.66rem] tracking-[0.2em] uppercase text-foreground/40 px-3 pt-2 pb-1">
      {{ title }}
    </h3>
    <a
      v-for="link in links"
      :key="link.label"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="group flex items-center gap-3.5 px-4 py-3.5 rounded-[2px] transition-all duration-300 hover:bg-primary/[0.06] hover:translate-x-1"
    >
      <span class="flex-none w-5 h-5 text-primary [&_svg]:w-5 [&_svg]:h-5">
        <component :is="link.icon" />
      </span>
      <span class="text-foreground text-[0.95rem]">{{ link.label }}</span>
      <span class="ml-auto flex items-center gap-1.5 font-mono text-[0.62rem] tracking-[0.08em] text-foreground/40 transition-colors group-hover:text-primary">
        <span v-if="link.hint">{{ link.hint }}</span>
        <span aria-hidden="true">↗</span>
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';

interface SocialLink {
  label: string;
  url: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>;
  hint?: string;
}

interface Props {
  title?: string;
  links: SocialLink[];
}

defineProps<Props>();
</script>
