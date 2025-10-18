import type { Meta, StoryObj } from '@storybook/vue3';
import Header from '../../components/atoms/Header.vue';

const meta: Meta<typeof Header> = {
  title: 'Atoms/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The font size of the header',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'The font weight of the header',
    },
    font: {
      control: 'select',
      options: ['lora', 'manrope'],
      description: 'The font family of the header',
    },
    color: {
      control: 'select',
      options: ['primary', 'white', 'muted'],
      description: 'The theme-based color of the header',
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
      description: 'The text content of the header',
    },
  },
  args: {
    size: 'h1',
    weight: 'bold',
    font: 'lora',
    color: 'white',
    underline: false,
    noWrap: false,
    breakWords: false,
    default: 'This is a header.',
  },
  render: (args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: `<Header v-bind="args">{{ args.default }}</Header>`,
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
    default: 'This header uses the primary color.',
  },
};

export const Muted: Story = {
  args: {
    color: 'muted',
    default: 'This is a muted header for secondary text.',
  },
};

export const BoldManrope: Story = {
  name: 'Bold Manrope Font',
  args: {
    size: 'h2',
    weight: 'bold',
    font: 'manrope',
    default: 'A bolded, larger header with the Manrope font.',
  },
};