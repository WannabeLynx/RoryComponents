import type { Meta, StoryObj } from '@storybook/vue3';

import Dropdown from '../../components/molecules/Dropdown.vue';

const meta = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
