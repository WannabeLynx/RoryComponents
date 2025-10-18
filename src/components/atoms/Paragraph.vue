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
  color?: 'primary' | 'white' | 'muted'
  underline?: boolean
  noWrap?: boolean
  breakWords?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'p1',
  weight: 'regular',
  font: 'lora',
  color: 'white',
  underline: false,
  noWrap: false,
  breakWords: false,
})

// --- COMPUTED PROPERTIES ---
const sizeMap = {
  p1: 'text-sm leading-[18px]',
  p2: 'text-base leading-normal',
  p3: 'text-lg leading-snug',
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