<template>
  <button ref="buttonRef" type="button" :class="classes" @click="onClick" :style="style">
    <Paragraph :color="primary ? 'text-white' : 'text-gray-800'" font="manrope" weight="bold" size="p2">{{ label }}</Paragraph>
  </button>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Paragraph from './Paragraph.vue';

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * Whether the button is primary or not
     */
    primary?: boolean;
    /**
     * Whether the button is rounded or not
     */
    rounded?: boolean;
    /**
     * The size of the button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * The background color of the button
     */
    backgroundColor?: string;
    /**
     * Whether the button has a glow effect or not
     */
    glow?: boolean;
  }>(),
  { primary: false, glow: false, rounded: false, size: 'medium' }
);

const emit = defineEmits<{
  /**
   * The click event
   * @param {number} id The id of the button
   */
  (e: 'click', id: number): void;
}>();

const buttonRef = ref<HTMLButtonElement | null>(null);
let animationFrameId: number;

const classes = computed(() => {
  // Base classes are shared by all variants
  const baseClasses = ['font-sans', 'font-bold', 'leading-none', 'inline-block', 'cursor-pointer', 'border-2'];

  // Size-specific classes
  const sizeClasses = {
    small: ['h-10 px-2.5'],
    medium: ['h-11 px-2.5'],
    large: ['h-12 px-3'],
  };

  // Shape-specific classes
  const roundedClasses = props.rounded ? ['rounded-full'] : ['rounded-lg'];

  // Glow effect classes
  if (props.glow) {
    return [
      ...baseClasses,
      ...sizeClasses[props.size],
      ...roundedClasses,
      'relative',
      'text-gray-300',
      'border-transparent',
      '[--angle:0deg]',
      '[background:linear-gradient(theme(colors.black),theme(colors.gray.900))_padding-box,conic-gradient(from_var(--angle),transparent_80%,theme(colors.purple.800),theme(colors.purple.500))_border-box]',
    ];
  }

  // Primary and secondary classes
  const primaryClasses = props.primary
    ? ['bg-blue-500', 'border-transparent']
    : ['bg-transparent', 'border-gray-800'];

  return [
    ...baseClasses,
    ...primaryClasses,
    ...sizeClasses[props.size],
    ...roundedClasses,
  ];
});

const style = computed(() => ({
  backgroundColor: props.glow ? undefined : props.primary ? props.backgroundColor : 'transparent',
}));

const onClick = () => {
  emit('click', 1);
};

onMounted(() => {
  if (props.glow && buttonRef.value) {
    let angle = 0;
    const rotate = () => {
      angle = (angle + 1) % 360;
      buttonRef.value?.style.setProperty('--angle', `${angle}deg`);
      animationFrameId = requestAnimationFrame(rotate);
    };
    rotate();
  }
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>