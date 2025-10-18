import type { Meta, StoryObj } from '@storybook/vue3';
import GlowDivider from '../../components/atoms/GlowDivider.vue';

const meta: Meta<typeof GlowDivider> = {
  title: 'Atoms/Glow Divider',
  component: GlowDivider,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['white', 'primary', 'secondary', 'accent'],
      description: 'The central color of the gradient glow.',
    },
  },
  decorators: [
    () => ({
      template: `
        <div class="relative bg-background p-8 h-16">
          <story class="relative" />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const Accent: Story = {
  args: {
    color: 'accent',
  },
};

export const White: Story = {
  args: {
    color: 'white',
  },
};
