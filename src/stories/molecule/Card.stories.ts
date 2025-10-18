import type { Meta, StoryObj } from '@storybook/vue3';
import Card from '../../components/molecules/Card.vue';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text', description: 'URL for the main card image' },
    imageAlt: { control: 'text', description: 'Alt text for the image' },
    title: { control: 'text', description: 'The main title of the card' },
    description: { control: 'text', description: 'The body text of the card' },
    tags: { control: 'object', description: 'An array of strings for the technology tags' },
    githubUrl: { control: 'text', description: 'Optional URL to the GitHub repository' },
    demoUrl: { control: 'text', description: 'Optional URL to the live demo' },
  },
  decorators: [
    () => ({
      template: '<div class="bg-background p-8 w-full max-w-sm mx-auto"><story/></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default Project Card',
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'Code on a screen',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Nuxt 3, Pinia for state management, and Stripe integration.',
    tags: ['Nuxt 3', 'Pinia', 'Tailwind', 'Stripe'],
    githubUrl: '#',
    demoUrl: '#',
  },
};

export const WithoutLinks: Story = {
  name: 'Card Without Links',
  args: {
    ...Default.args,
    githubUrl: '',
    demoUrl: '',
  },
};
