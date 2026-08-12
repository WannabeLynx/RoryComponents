<template>
  <component :is="asChild ? 'slot' : 'button'" type="button" :class="buttonClasses">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const baseClasses = [
  'group',
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'whitespace-nowrap',
  'rounded-[2px]',
  'font-mono',
  'uppercase',
  'tracking-[0.18em]',
  'text-xs',
  'transition-all',
  'duration-300',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
  'outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-ring/50',
  'aria-invalid:ring-destructive/20',
  'aria-invalid:border-destructive',
];

const variantClasses = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20',
  outline:
    'border border-border bg-transparent text-foreground hover:border-primary/50 hover:text-primary',
  secondary: 'border border-secondary/40 bg-secondary/10 text-secondary hover:bg-secondary/20',
  ghost: 'text-foreground/70 hover:text-primary',
  link: 'text-primary underline-offset-4 hover:underline tracking-normal normal-case',
  glow: 'border border-primary/50 bg-transparent text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(var(--ring-rgb)_/_0.22)]',
};

const sizeClasses = {
  default: 'h-10 px-5 has-[>svg]:px-4',
  sm: 'h-8 gap-1.5 px-3.5 has-[>svg]:px-3',
  lg: 'h-11 px-7 has-[>svg]:px-6',
  icon: 'size-10',
  hero: 'h-12 px-8',
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