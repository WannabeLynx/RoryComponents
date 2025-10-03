<template>
  <div class="relative">
    <select :class="classes">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg class="w-4 h-4 fill-current text-gray-400" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    /**
     * The options for the dropdown
     */
    options?: string[];
    /**
     * The size of the dropdown
     */
    size?: 'small' | 'medium' | 'large';
  }>(),
  {
    options: () => [],
    size: 'medium',
  }
);

const classes = computed(() => {
  const baseClasses = [
    'inline-block',
    'w-full',
    'border',
    'border-gray-300',
    'rounded',
    'font-sans',
    'leading-normal',
    'appearance-none',
    'bg-white',
    'focus:outline-none',
    'focus:border-blue-500',
    'focus:ring-2',
    'focus:ring-blue-200',
  ];

  const sizeClasses = {
    small: ['py-2', 'pl-3', 'pr-7', 'text-sm'],
    medium: ['py-2.5', 'pl-4', 'pr-8', 'text-base'],
    large: ['py-3', 'pl-5', 'pr-9', 'text-lg'],
  };

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
  ];
});
</script>