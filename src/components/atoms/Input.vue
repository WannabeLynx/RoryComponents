<template>
  <input :class="classes" :placeholder="placeholder" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    /**
     * The placeholder of the input
     */
    placeholder?: string;
    /**
     * size of the input
     */
    size?: 'small' | 'medium' | 'large';
  }>(),
  { placeholder: '' }
);

const classes = computed(() => {
  const baseClasses = [
    'font-sans',
    'leading-normal',
    'inline-block',
    'rounded',
    'border',
    'border-gray-300',
    'focus:outline-none',
    'focus:border-blue-500',
    'focus:ring-2',
    'focus:ring-blue-200',
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
