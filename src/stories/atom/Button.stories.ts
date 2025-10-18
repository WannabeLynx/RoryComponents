import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '../../components/atoms/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Atoms/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  
  // --- UPDATED ARGS ---
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a slot to wrap a child component (e.g., NuxtLink)',
    },
    disabled: { 
      control: 'boolean' 
    },
    default: {
      control: 'text',
      description: 'Default slot content',
      name: 'content',
    },
    onClick: { action: 'clicked' },
  },

  args: {
    variant: 'default',
    size: 'default',
    asChild: false,
    disabled: false,
    default: 'Button',
  },

  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center w-40 h-20">
        <Button v-bind="args" v-html="args.default"></Button>
      </div>`,
  }),

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    default: 'Delete',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Glow: Story = {
  args: {
    variant: 'glow',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    default: 'Learn more',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    default: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    default: 'Small Button',
  },
};

export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    default: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M12 2v10" /><path d="M18 8l-6 6-6-6" /></svg>',
  },
};

export const AsChild: Story = {
  name: 'AsChild (wrapping <a> tag)',
  args: {
    asChild: true,
    default: 'This is an <a> tag',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">
                 <a href="#" @click.prevent="args.onClick">{{ args.default }}</a>
               </Button>`,
  }),
};