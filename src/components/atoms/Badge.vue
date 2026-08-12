<template>
  <div :class="styles">
    <div class="flex-none w-9 h-9 grid place-items-center rounded-[2px] border border-border text-primary [&_svg]:w-[18px] [&_svg]:h-[18px]">
      <slot name="icon" />
    </div>
    <div class="flex flex-col gap-0.5 leading-tight min-w-0">
      <span v-if="designation" class="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-foreground/40">
        {{ designation }}
      </span>
      <span class="text-foreground text-[0.95rem] transition-colors group-hover:text-primary truncate">
        {{ label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  label: string;
  variant?: 'principle' | 'skill';
  designation?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'principle',
});

const styles = computed(() => {
  const baseStyles = [
    'group',
    'flex',
    'items-center',
    'gap-3',
    'p-3.5',
    'rounded-[2px]',
    'bg-transparent',
    'border',
    'border-border',
    'hover:border-primary/40',
    'hover:bg-primary/[0.04]',
    'transition-all',
    'duration-300',
  ];

  const variantStyles = {
    principle: [] as string[],
    skill: ['hover:translate-x-1'],
  };

  return [...baseStyles, ...variantStyles[props.variant]];
});
</script>
