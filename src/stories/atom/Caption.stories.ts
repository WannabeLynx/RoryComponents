import type { Meta, StoryObj } from '@storybook/vue3';
import Caption from '../../components/atoms/Caption.vue';

const meta: Meta<typeof Caption> = {
  title: 'Atoms/Caption',
  component: Caption,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['c1', 'c2'] },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold', 'bold'] },
    font: { control: 'select', options: ['lora', 'manrope'] },
    color: { control: 'color' },
    underline: { control: 'boolean' },
    noWrap: { control: 'boolean' },
    breakWords: { control: 'boolean' },
    default: { control: 'text' },
  },
  args: {
    default: 'This is a caption.',
  }
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {
    size: 'c1',
    weight: 'regular',
    font: 'lora',
    color: 'black',
  },
};

export const AllOptions: Story = {
  name: 'All Options',
  args: {
    size: 'c1',
    weight: 'regular',
    font: 'lora',
    color: 'black',
    underline: false,
    noWrap: false,
    breakWords: false,
    default: 'This is a caption with all options.'
  },
  argTypes: {
    size: { control: 'select', options: ['c1', 'c2'] },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold', 'bold'] },
    font: { control: 'select', options: ['lora', 'manrope'] },
    color: { control: 'color' },
    underline: { control: 'boolean' },
    noWrap: { control: 'boolean' },
    breakWords: { control: 'boolean' },
    default: { control: 'text' },
  }
};