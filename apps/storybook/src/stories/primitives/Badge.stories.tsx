import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@codejam/ui';
import {
  ArrowUpRightIcon,
  BadgeCheck,
  BookmarkIcon,
  Loader2,
} from 'lucide-react';

const meta = {
  title: 'Primitives/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => (
    <div className="flex w-full flex-wrap justify-center gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-full flex-wrap justify-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">
        <BadgeCheck data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="outline">
        Bookmark
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  ),
};

export const WithSpinner: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="destructive">
        <Loader2 data-icon="inline-start" className="animate-spin" />
        Deleting
      </Badge>
      <Badge variant="secondary">
        Generating
        <Loader2 data-icon="inline-end" className="animate-spin" />
      </Badge>
    </div>
  ),
};

export const Link: Story = {
  render: () => (
    <Badge render={<a href="#link" />}>
      Open Link <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
        Blue
      </Badge>
      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
        Green
      </Badge>
      <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
        Sky
      </Badge>
      <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
        Purple
      </Badge>
      <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
        Red
      </Badge>
    </div>
  ),
};
