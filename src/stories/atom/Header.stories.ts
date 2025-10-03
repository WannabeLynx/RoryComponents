import type { Meta, StoryObj } from '@storybook/vue3';
import Header from '../../components/atoms/Header.vue';

const meta: Meta<typeof Header> = {
  title: 'Atoms/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold', 'bold'] },
    font: { control: 'select', options: ['lora', 'manrope'] },
    color: { control: 'color' },
    underline: { control: 'boolean' },
    noWrap: { control: 'boolean' },
    breakWords: { control: 'boolean' },
    default: { control: 'text' },
  },
  args: {
    default: 'This is a header.',
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    size: 'h1',
    weight: 'bold',
    font: 'lora',
    color: 'black',
  },
};

export const AllOptions: Story = {
  name: 'All Options',
  args: {
    size: 'h1',
    weight: 'regular',
    font: 'lora',
    color: 'black',
    underline: false,
    noWrap: false,
    breakWords: false,
    default: 'This is a header with all options.'
  },
  argTypes: {
    size: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold', 'bold'] },
    font: { control: 'select', options: ['lora', 'manrope'] },
    color: { control: 'color' },
    underline: { control: 'boolean' },
    noWrap: { control: 'boolean' },
    breakWords: { control: 'boolean' },
    default: { control: 'text' },
  }
};