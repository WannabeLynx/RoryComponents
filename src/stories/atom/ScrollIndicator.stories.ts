import type { Meta, StoryObj } from '@storybook/vue3';
import ScrollIndicator from '../../components/atoms/ScrollIndicator.vue';

const meta = {
  title: 'Atoms/ScrollIndicator',
  component: ScrollIndicator,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['mouse', 'starfield'],
      description: 'Switches between the two indicator styles.',
    },
  },
  args: {
    variant: 'mouse',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#050810' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    layout: 'fullscreen',
  },
  decorators: [
    () => ({
      template: `
        <div class="relative w-full h-48 flex items-center justify-center p-4">
          <story />
        </div>
      `,
    }),
  ],
} satisfies Meta<typeof ScrollIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ModernMouse: Story = {
  args: {
    variant: 'mouse',
  },
};

export const CelestialStarfield: Story = {
  args: {
    variant: 'starfield',
  },
};

