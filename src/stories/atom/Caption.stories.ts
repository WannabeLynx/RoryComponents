import type { Meta, StoryObj } from '@storybook/vue3';
import Caption from '../../components/atoms/Caption.vue';

const meta: Meta<typeof Caption> = {
  title: 'Atoms/Caption',
  component: Caption,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['c1', 'c2'],
      description: 'The font size of the caption',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'The font weight of the caption',
    },
    font: {
      control: 'select',
      options: ['lora', 'manrope'],
      description: 'The font family of the caption',
    },
    color: {
      control: 'select',
      options: ['primary', 'white', 'muted'],
      description: 'The theme-based color of the caption',
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
      description: 'The text content of the caption',
    },
  },
  args: {
    size: 'c1',
    weight: 'regular',
    font: 'lora',
    color: 'white',
    underline: false,
    noWrap: false,
    breakWords: false,
    default: 'This is a caption.',
  },
  render: (args) => ({
    components: { Caption },
    setup() {
      return { args };
    },
    template: `<Caption v-bind="args">{{ args.default }}</Caption>`,
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
    default: 'This caption uses the primary color.',
  },
};

export const Muted: Story = {
  args: {
    color: 'muted',
    default: 'This is a muted caption for secondary text.',
  },
};

export const BoldManrope: Story = {
  name: 'Bold Manrope Font',
  args: {
    size: 'c2',
    weight: 'bold',
    font: 'manrope',
    default: 'A bolded, larger caption with the Manrope font.',
  },
};
