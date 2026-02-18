import type { Meta, StoryObj } from '@storybook/react-vite';
import { SidebarHeader } from '@codejam/ui';
import { Settings } from 'lucide-react';

const meta: Meta<typeof SidebarHeader> = {
  title: 'Primitives/SidebarHeader',
  component: SidebarHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-72 border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-black">
        <Story />
        <div className="mt-4 text-xs text-gray-400">
          (Content Area Simulation)
        </div>
      </div>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
    count: { control: 'number' },
    action: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarHeader>;

export const Default: Story = {
  args: {
    title: 'MORE',
  },
};

export const WithCount: Story = {
  args: {
    title: 'PARTICIPANTS',
    count: 12,
  },
};

export const WithAction: Story = {
  args: {
    title: 'FILES',
    count: 5,
    action: (
      <div className="flex items-center gap-1">
        <div className="h-2 w-16 rounded-full bg-gray-200">
          <div className="h-full w-1/2 rounded-full bg-blue-500" />
        </div>
        <span className="text-[10px] text-gray-500">50%</span>
      </div>
    ),
  },
};

export const WithIconAction: Story = {
  args: {
    title: 'SETTINGS',
    action: (
      <button className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-800">
        <Settings size={16} className="text-gray-500" />
      </button>
    ),
  },
};
