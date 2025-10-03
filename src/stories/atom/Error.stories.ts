import type { Meta, StoryObj } from '@storybook/vue3';
import Error from '../../components/atoms/Error.vue';

const meta: Meta<typeof Error> = {
  title: 'Atoms/Error',
  component: Error,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    default: 'This is an error message.',
  },
};
