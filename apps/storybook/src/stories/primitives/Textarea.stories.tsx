import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button as ButtonPrimitive,
  Field as FieldPrimitive,
  FieldDescription,
  FieldLabel,
  Textarea,
} from '@codejam/ui';

const meta = {
  title: 'Primitives/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => (
    <Textarea placeholder="Type your message here." className="w-100" />
  ),
};

export const Field: Story = {
  render: () => (
    <FieldPrimitive className="w-100">
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </FieldPrimitive>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FieldPrimitive className="w-100" data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="Type your message here."
        disabled
      />
    </FieldPrimitive>
  ),
};

export const Invalid: Story = {
  render: () => (
    <FieldPrimitive className="w-100" data-invalid>
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea
        id="textarea-invalid"
        placeholder="Type your message here."
        aria-invalid
      />
      <FieldDescription>Please enter a valid message.</FieldDescription>
    </FieldPrimitive>
  ),
};

export const Button: Story = {
  render: () => (
    <div className="grid w-100 gap-2">
      <Textarea placeholder="Type your message here." />
      <ButtonPrimitive>Send message</ButtonPrimitive>
    </div>
  ),
};
