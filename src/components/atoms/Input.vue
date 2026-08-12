<template>
  <input :class="classes" :placeholder="placeholder" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
  }>(),
  { placeholder: '' }
);

const classes = computed(() => {
  const baseClasses = [
    'font-sans',
    'leading-normal',
    'block',
    'w-full',
    'rounded-[2px]',
    'bg-background',
    'border',
    'border-border',
    'text-foreground',
    'placeholder:text-foreground/40',
    'focus:outline-none',
    'focus:border-primary/60',
    'focus:ring-[3px]',
    'focus:ring-primary/15',
    'transition-colors',
  ];

  const sizeClasses = {
    small: ['text-sm', 'py-2', 'px-3'],
    medium: ['text-base', 'py-2.5', 'px-4'],
    large: ['text-lg', 'py-3', 'px-5'],
  };

  return [
    ...baseClasses,
    ...(sizeClasses[props.size || 'medium']),
  ];
});
</script>
