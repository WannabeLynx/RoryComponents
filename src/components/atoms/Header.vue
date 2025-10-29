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
  color?: 'primary' | 'white' | 'muted'
  underline?: boolean
  noWrap?: boolean
  breakWords?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'h1',
  weight: 'bold',
  font: 'lora',
  color: 'white',
  underline: false,
  noWrap: false,
  breakWords: false,
})

const sizeMap = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
  h6: 'text-base',
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