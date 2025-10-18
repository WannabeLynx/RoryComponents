<template>
  <caption :class="styles">
    <slot />
  </caption>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'c1' | 'c2'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  font?: 'lora' | 'manrope'
  color?: 'primary' | 'white' | 'muted'
  underline?: boolean
  noWrap?: boolean
  breakWords?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'c1',
  weight: 'regular',
  font: 'lora',
  color: 'white',
  underline: false,
  noWrap: false,
  breakWords: false,
})

// --- COMPUTED PROPERTIES ---
const sizeMap = {
  c1: 'text-xs',
  c2: 'text-sm',
}

const weightMap = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const fontMap = {
  lora: 'font-lora',
  manrope: 'font-manrope',
}

const colorMap = {
  primary: 'text-primary',
  white: 'text-white',
  muted: 'text-foreground/60',
}

const styles = computed(() => {
  const classes = [
    sizeMap[props.size],
    'leading-tight',
    weightMap[props.weight],
    fontMap[props.font],
    colorMap[props.color],
  ]

  if (props.underline) classes.push('underline')
  if (props.noWrap) classes.push('whitespace-nowrap')
  if (props.breakWords) classes.push('break-words')

  return classes
})
</script>