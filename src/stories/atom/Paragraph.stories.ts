import type { Meta, StoryObj } from '@storybook/vue3';
import Paragraph from '../../components/atoms/Paragraph.vue';

const meta: Meta<typeof Paragraph> = {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['p1', 'p2', 'p3'],
      description: 'The font size of the paragraph',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'The font weight of the paragraph',
    },
    font: {
      control: 'select',
      options: ['lora', 'manrope'],
      description: 'The font family of the paragraph',
    },
    color: {
      control: 'select',
      options: ['primary', 'white', 'muted'],
      description: 'The theme-based color of the paragraph',
    },
    underline: {
      control: 'boolean'
    },
    noWrap: {
      control: 'boolean'
    },
    breakWords: {
      control: 'boolean'
    },
    default: {
      control: 'text',
      name: 'content',
      description: 'The text content of the paragraph',
    },
  },
  args: {
    size: 'p1',
    weight: 'regular',
    font: 'lora',
    color: 'white',
    underline: false,
    noWrap: false,
    breakWords: false,
    default: 'This is a paragraph.',
  },
  render: (args) => ({
    components: { Paragraph },
    setup() {
      return { args };
    },
    template: `<Paragraph v-bind="args">{{ args.default }}</Paragraph>`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const White: Story = {
  args: {
    color: 'white',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    default: 'This paragraph uses the primary color.',
  },
};

export const Muted: Story = {
  args: {
    color: 'muted',
    default: 'This is a muted paragraph for secondary text.',
  },
};

export const BoldManrope: Story = {
  name: 'Bold Manrope Font',
  args: {
    size: 'p2',
    weight: 'bold',
    font: 'manrope',
    default: 'A bolded, larger paragraph with the Manrope font.',
  },
};