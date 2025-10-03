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
  color?: string
  underline?: boolean
  noWrap?: boolean
  breakWords?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'c1',
  weight: 'regular',
  font: 'lora',
  color: 'text-white',
  underline: false,
  noWrap: false,
  breakWords: false,
})

const styles = computed(() => ({
  'text-xs leading-tight': props.size === 'c1',
  'text-sm leading-tight': props.size === 'c2',

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