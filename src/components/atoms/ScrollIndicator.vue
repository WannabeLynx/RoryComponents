<template>
  <!-- Mouse Variant (No changes here) -->
  <div v-if="variant === 'mouse'" class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
    <div class="relative w-8 h-12 border-2 border-primary rounded-full flex items-center justify-center overflow-hidden">
      <div 
        class="absolute w-2 h-2 bg-primary rounded-full transition-all duration-700 ease-in-out"
        :class="{'top-2': scrollAnim, 'top-6': !scrollAnim}"
      />
      <div class="absolute w-2 h-2 bg-primary/20 rounded-full top-2 opacity-0 animate-pulse-fade" />
    </div>
  </div>

  <!-- Starfield Variant (Redesigned with new Orbit method) -->
  <div v-else-if="variant === 'starfield'">
		<Caption :breakWords="false" color="primary" font="lora" :noWrap="false" size="c1" :underline="false" weight="regular" class="absolute bottom-11 left-1/2 -translate-x-1/2">Scroll</Caption>
		<div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex items-end justify-center">
			<div class="relative w-16 h-16 flex items-center justify-center">
				<div class="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_theme(colors.primary)]"></div>
				
				<div class="absolute w-14 h-14 animate-spin-slow">
					<div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/70 rounded-full"></div>
				</div>
			</div>
		</div>
		
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import Caption from './Caption.vue';

const props = withDefaults(defineProps<{
  variant?: 'mouse' | 'starfield';
}>(), {
  variant: 'mouse',
});

// --- STATE FOR MOUSE VARIANT ---
const scrollAnim = ref(false);
let intervalId: ReturnType<typeof setInterval> | null = null;


// --- LIFECYCLE HOOKS ---
const setupAnimation = (variant: 'mouse' | 'starfield') => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  if (variant === 'mouse') {
    intervalId = setInterval(() => {
      scrollAnim.value = !scrollAnim.value;
    }, 1500);
  }
};

onMounted(() => {
  setupAnimation(props.variant);
});

watch(() => props.variant, (newVariant) => {
  setupAnimation(newVariant);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

