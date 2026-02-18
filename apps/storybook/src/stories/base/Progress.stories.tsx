import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress, ProgressLabel, ProgressValue, Slider } from '@codejam/ui';
import React from 'react';

const meta = {
  title: 'Base/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    value: 13,
  },
  render: () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-100" />;
  },
};

export const Label: Story = {
  args: {
    value: 56,
  },
  render: () => (
    <Progress value={56} className="w-100 max-w-sm">
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
};

export const Controlled: Story = {
  args: {
    value: 50,
  },
  render: () => {
    const [value, setValue] = React.useState(50);

    return (
      <div className="flex w-100 max-w-sm flex-col gap-4">
        <Progress value={value} className="w-full" />
        <Slider
          value={value}
          onValueChange={(value) => setValue(value as number)}
          min={0}
          max={100}
          step={1}
        />
      </div>
    );
  },
};
