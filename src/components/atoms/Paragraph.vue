<template>
  <p :class="styles">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'p1' | 'p2' | 'p3'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  font?: 'lora' | 'manrope'
  color?: string
  underline?: boolean
  noWrap?: boolean
  breakWords?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'p1',
  weight: 'regular',
  font: 'lora',
  color: 'text-white',
  underline: false,
  noWrap: false,
  breakWords: false,
})

const styles = computed(() => ({
  'text-sm leading-[18px]': props.size === 'p1',
  'text-base leading-normal': props.size === 'p2',
  'text-lg leading-snug': props.size === 'p3',

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