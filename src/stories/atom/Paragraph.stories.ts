import type { Meta, StoryObj } from '@storybook/vue3';
import Paragraph from '../../components/atoms/Paragraph.vue';

const meta: Meta<typeof Paragraph> = {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['p1', 'p2', 'p3'] },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold', 'bold'] },
    font: { control: 'select', options: ['lora', 'manrope'] },
    color: { control: 'color' },
    underline: { control: 'boolean' },
    noWrap: { control: 'boolean' },
    breakWords: { control: 'boolean' },
    default: { control: 'text' },
  },
  args: {
    default: 'This is a paragraph.',
  }
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    size: 'p2',
    weight: 'regular',
    font: 'lora',
    color: 'black',
  },
};

export const AllOptions: Story = {
  name: 'All Options',
  args: {
    size: 'p1',
    weight: 'regular',
    font: 'lora',
    color: 'black',
    underline: false,
    noWrap: false,
    breakWords: false,
    default: 'This is a paragraph with all options.'
  },
  argTypes: {
    size: { control: 'select', options: ['p1', 'p2', 'p3'] },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold', 'bold'] },
    font: { control: 'select', options: ['lora', 'manrope'] },
    color: { control: 'color' },
    underline: { control: 'boolean' },
    noWrap: { control: 'boolean' },
    breakWords: { control: 'boolean' },
    default: { control: 'text' },
  }
};