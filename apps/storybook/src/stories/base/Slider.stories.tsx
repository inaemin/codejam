import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider, Label } from '@codejam/ui';
import React from 'react';

const meta = {
  title: 'Base/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    defaultValue: [75],
    max: 100,
    step: 1,
    disabled: false,
  },
  argTypes: {
    defaultValue: {
      control: 'object',
    },
    max: {
      control: {
        type: 'number',
        min: 0,
        step: 1,
      },
    },
    step: {
      control: {
        type: 'number',
        min: 0.1,
        step: 0.1,
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
  render: (args) => <Slider {...args} className="mx-auto w-100 max-w-xs" />,
};

export const Range: Story = {
  render: () => (
    <Slider
      defaultValue={[25, 50]}
      max={100}
      step={5}
      className="mx-auto w-100 max-w-xs"
    />
  ),
};

export const Multiple: Story = {
  render: () => (
    <Slider
      defaultValue={[10, 20, 70]}
      max={100}
      step={10}
      className="mx-auto w-100 max-w-xs"
    />
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="mx-auto flex w-100 max-w-xs items-center justify-center gap-6">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        orientation="vertical"
        className="h-40"
      />
      <Slider
        defaultValue={[25]}
        max={100}
        step={1}
        orientation="vertical"
        className="h-40"
      />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState([0.3, 0.7]);

    return (
      <div className="mx-auto grid w-100 max-w-xs gap-3">
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="slider-demo-temperature">Temperature</Label>
          <span className="text-muted-foreground text-sm">
            {value.join(', ')}
          </span>
        </div>
        <Slider
          id="slider-demo-temperature"
          value={value}
          onValueChange={(value) => setValue(value as number[])}
          min={0}
          max={1}
          step={0.1}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      disabled
      className="mx-auto w-100 max-w-xs"
    />
  ),
};
