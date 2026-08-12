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
    designation: { control: 'text', description: 'Catalog designation, e.g. OBJ-01' },
    type: { control: 'text', description: 'Small type/category label above the title' },
  },
  decorators: [
    () => ({ template: '<div class="bg-background p-8"><story/></div>' }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// constrain a single card to a realistic carousel-slide width
const slide = () => ({ template: '<div style="width:340px"><story/></div>' });

export const Default: Story = {
  name: 'Default Project Card',
  decorators: [slide],
  args: {
    designation: 'OBJ-01',
    type: 'Chrome Extension · DX',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'Code on a screen',
    title: 'GraphQL Viewer',
    description: 'A Chrome extension I built for work to help better visualize GraphQL data across large schemas.',
    tags: ['HTML', 'JavaScript'],
    githubUrl: '#',
    demoUrl: '#',
  },
};

export const WithoutLinks: Story = {
  name: 'Card Without Links',
  decorators: [slide],
  args: {
    ...Default.args,
    githubUrl: '',
    demoUrl: '',
  },
};

export const CarouselRow: Story = {
  name: 'Carousel Row',
  render: () => ({
    components: { Card },
    setup() {
      const items = [
        { designation: 'OBJ-01', type: 'Game · Geography', title: "Rory's Flag & Domain Quiz", description: 'Identify countries by their flags or domain extensions on an interactive world map.', tags: ['HTML', 'CSS', 'JavaScript'], demoUrl: '#' },
        { designation: 'OBJ-02', type: 'Chrome Extension · DX', title: 'GraphQL Viewer', description: 'A Chrome extension I built for work to help better visualize GraphQL data.', tags: ['HTML', 'JavaScript'], githubUrl: '#', demoUrl: '#' },
        { designation: 'OBJ-03', type: 'Library · Open Source', title: 'rory-components', description: 'My small components library, published to npm. Still adding more.', tags: ['Vue', 'CSS', 'TypeScript'], githubUrl: '#', demoUrl: '#' },
      ];
      const img = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1170&q=80';
      return { items, img };
    },
    template: `
      <div class="flex gap-5 overflow-x-auto pb-3" style="scroll-snap-type:x mandatory">
        <div v-for="it in items" :key="it.designation" style="flex:0 0 320px; scroll-snap-align:start">
          <Card v-bind="it" :image-url="img" />
        </div>
      </div>
    `,
  }),
};
