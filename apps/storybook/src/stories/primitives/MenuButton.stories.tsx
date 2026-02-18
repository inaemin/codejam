import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuButton, Toaster, toast } from '@codejam/ui';

const meta = {
  title: 'Primitives/MenuButton',
  component: MenuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label',
    },
  },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Menu',
    onClick: () => alert('Clicked'),
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toaster />
      <MenuButton label="⋮" onClick={() => toast('Vertical Menu Clicked')} />
      <MenuButton label="⋯" onClick={() => toast('Horizontal Menu Clicked')} />
      <MenuButton label="⚙️" onClick={() => toast('Settings Clicked')} />
      <MenuButton label="✕" onClick={() => toast('Close Clicked')} />
    </div>
  ),
};

export const DifferentLabels: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toaster />
      <MenuButton label="Edit" onClick={() => toast('Edit Clicked')} />
      <MenuButton label="Delete" onClick={() => toast('Delete Clicked')} />
      <MenuButton label="Share" onClick={() => toast('Share Clicked')} />
      <MenuButton label="Save" onClick={() => toast('Save Clicked')} />
    </div>
  ),
};

export const WithCustomClass: Story = {
  render: () => (
    <div className="flex gap-2">
      <MenuButton
        label="⋮"
        className="hover:bg-blue-100 dark:hover:bg-blue-900 rounded p-2"
        onClick={() => alert('Custom Style')}
      />
      <MenuButton
        label="⚙️"
        className="hover:bg-red-100 dark:hover:bg-red-900 rounded p-2"
        onClick={() => alert('Custom Style')}
      />
    </div>
  ),
};
