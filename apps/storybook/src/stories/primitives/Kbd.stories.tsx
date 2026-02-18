import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Kbd,
  KbdGroup,
  Button,
  ButtonGroup,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@codejam/ui';
import { SearchIcon } from 'lucide-react';

const meta = {
  title: 'Primitives/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Button variant="outline">
      Accept{' '}
      <Kbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger
            render={(props) => (
              <Button variant="outline" {...props}>
                Save
              </Button>
            )}
          />
          <TooltipContent className="pr-1.5">
            <div className="flex items-center gap-2">
              Save Changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={(props) => (
              <Button variant="outline" {...props}>
                Print
              </Button>
            )}
          />
          <TooltipContent className="pr-1.5">
            <div className="flex items-center gap-2">
              Print Document{' '}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  ),
};

export const WithInputGroup: Story = {
  render: () => (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};
