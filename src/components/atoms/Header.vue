<template>
  <component :is="size" :class="styles">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  font?: 'lora' | 'manrope'
  color?: string
  underline?: boolean
  noWrap?: boolean
  breakWords?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'h1',
  weight: 'bold',
  font: 'lora',
  color: 'text-white',
  underline: false,
  noWrap: false,
  breakWords: false,
})

const styles = computed(() => ({
  'text-4xl': props.size === 'h1',
  'text-3xl': props.size === 'h2',
  'text-2xl': props.size === 'h3',
  'text-xl': props.size === 'h4',
  'text-lg': props.size === 'h5',
  'text-base': props.size === 'h6',

  'font-normal': props.weight === 'regular',
  'font-medium': props.weight === 'medium',
  'font-semibold': props.weight === 'semibold',
  'font-bold': props.weight === 'bold',

  'font-lora': props.font === 'lora',
  'font-manrope': props.font === 'manrope',

  [props.color]: true,
  'underline': props.underline,
  'whitespace-nowrap': props.noWrap,
  'break-words': props.breakWords,
}))
</script>