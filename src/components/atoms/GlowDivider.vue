<template>
  <div :class="styles"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  color?: 'white' | 'primary' | 'secondary' | 'accent';
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
});

const styles = computed(() => {
  const baseStyles = [
    'absolute',
    'top-0',
    'left-0',
    'right-0',
    'h-px',
    'bg-gradient-to-r',
    'from-transparent',
    'to-transparent',
  ];

  const colorMap = {
    white: 'via-white/50',
    primary: 'via-primary/50',
    secondary: 'via-secondary/50',
    accent: 'via-accent/50',
  };

  return [...baseStyles, colorMap[props.color]];
});
</script>
