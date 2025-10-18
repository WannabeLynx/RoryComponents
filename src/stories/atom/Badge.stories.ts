import type { Meta, StoryObj } from '@storybook/vue3';
import { h } from 'vue';
import Badge from '../../components/atoms/Badge.vue';

// --- Icon Components for the story ---
const CodeXmlIcon = (props: any) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'w-6 h-6 text-primary transition-all duration-300' }, [
  h('path', { d: 'm18 16 4-4-4-4' }),
  h('path', { d: 'm6 8-4 4 4 4' }),
  h('path', { d: 'm14.5 4-5 16' }),
]);

const SkillIcon = (props: any) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'w-5 h-5 text-primary' }, [
    h('path', { d: 'M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z' }),
    h('path', { d: 'M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z' }),
    h('path', { d: 'M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z' }),
    h('path', { d: 'M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z' }),
]);


const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the badge.',
    },
    variant: {
      control: 'select',
      options: ['principle', 'skill'],
      description: 'The visual variant of the badge.',
    },
    icon: {
      description: 'The icon slot for the badge. Should be an SVG.',
    },
  },
  decorators: [
    () => ({
      template: '<div class="bg-background p-8 w-full max-w-xs mx-auto"><story/></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Principle: Story = {
  name: 'Principle Variant',
  args: {
    variant: 'principle',
    label: 'Clean Code',
  },
  render: (args) => ({
    components: { Badge, CodeXmlIcon },
    setup() { return { args }; },
    template: `
      <Badge :label="args.label" :variant="args.variant">
        <template #icon><CodeXmlIcon /></template>
      </Badge>
    `,
  }),
};

export const Skill: Story = {
  name: 'Skill Variant',
  args: {
    variant: 'skill',
    label: 'Vue.js',
  },
  render: (args) => ({
    components: { Badge, SkillIcon },
    setup() { return { args }; },
    template: `
      <Badge :label="args.label" :variant="args.variant">
        <template #icon><SkillIcon /></template>
      </Badge>
    `,
  }),
};
