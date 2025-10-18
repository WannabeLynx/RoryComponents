<template>
  <div :class="styles">
    <!-- The 'skill' variant has a styled icon wrapper -->
    <div v-if="variant === 'skill'" class="p-2 rounded-lg transition-all duration-300 bg-primary/10 border border-primary/25">
      <slot name="icon" />
    </div>

    <!-- The 'principle' variant has a plain icon slot -->
    <slot v-else name="icon" />

    <!-- The text color change on hover is also variant-specific -->
    <span class="text-foreground transition-colors" :class="{ 'group-hover:text-primary': variant === 'skill' }">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  label: string;
  variant?: 'principle' | 'skill';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'principle',
});

const styles = computed(() => {
  // Base styles shared by both variants
  const baseStyles = [
    'group',
    'flex',
    'items-center',
    'p-4',
    'rounded-lg',
    'bg-popover/40',
    'border',
    'border-primary/20',
    'hover:border-primary/50',
    'transition-all',
    'duration-300',
    'hover:shadow-[0_0_15px_rgba(var(--primary-rgb)_/_0.2)]',
  ];

  // Styles specific to each variant
  const variantStyles = {
    principle: ['gap-3'],
    skill: ['gap-4', 'hover:translate-x-2'],
  };

  return [...baseStyles, ...variantStyles[props.variant]];
});
</script>
