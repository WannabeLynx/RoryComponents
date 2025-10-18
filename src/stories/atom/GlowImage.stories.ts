import type { Meta, StoryObj } from '@storybook/vue3';
import GlowImage from '../../components/atoms/GlowImage.vue';

const meta: Meta<typeof GlowImage> = {
  title: 'Atoms/Glow Image',
  component: GlowImage,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'The source URL for the image.',
    },
    alt: {
      control: 'text',
      description: 'The alt text for the image.',
    },
  },
  decorators: [
    () => ({
      template: '<div class="bg-background p-20 h-120 w-120"><story/></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default Glow Image',
  args: {
    src: 'https://picsum.photos/seed/picsum/800/800',
    alt: 'Developer workspace with code on a screen',
  },
};
