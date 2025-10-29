<template>
  <component :is="asChild ? 'slot' : 'button'" type="button" :class="buttonClasses">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const baseClasses = [
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'whitespace-nowrap',
  'rounded-md',
  'text-sm',
  'font-medium',
  'transition-all',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
  'outline-none',
  'focus-visible:border-ring',
  'focus-visible:ring-ring/50',
  'focus-visible:ring-[3px]',
  'aria-invalid:ring-destructive/20',
  'dark:aria-invalid:ring-destructive/40',
  'aria-invalid:border-destructive',
];

const variantClasses = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
  outline:
    'border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
  link: 'text-primary underline-offset-4 hover:underline',
  glow: 'group bg-transparent border-2 border-primary text-primary rounded-lg hover:bg-primary/10 duration-300 hover:shadow-[0_0_20px_rgba(var(--ring-rgb)_/_0.5)]',
};

const sizeClasses = {
  default: 'h-9 px-4 py-2 has-[>svg]:px-3',
  sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
  lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
  icon: 'size-9 rounded-md',
  hero: 'px-8 py-6',
};

// --- Props ---
const props = withDefaults(
  defineProps<{
    variant?:
      | 'default'
      | 'destructive'
      | 'outline'
      | 'secondary'
      | 'ghost'
      | 'link'
      | 'glow';
    size?: 'default' | 'sm' | 'lg' | 'icon' | 'hero';
    asChild?: boolean;
  }>(),
  {
    variant: 'default',
    size: 'default',
    asChild: false,
  }
);

const buttonClasses = computed(() => {
  return [
    ...baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
  ];
});
</script>