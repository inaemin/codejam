import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
  FieldDescription,
  FieldGroup,
  Switch,
} from '@codejam/ui';
import React from 'react';

const meta = {
  title: 'Base/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
];

const vegetables = [
  { label: 'Carrot', value: 'carrot' },
  { label: 'Broccoli', value: 'broccoli' },
  { label: 'Spinach', value: 'spinach' },
];

const fruitSelectItems = [{ label: 'Select a fruit', value: null }, ...fruits];

const groupedItems = [...fruitSelectItems, ...vegetables];

const northAmerica = [
  { label: 'Eastern Standard Time', value: 'est' },
  { label: 'Central Standard Time', value: 'cst' },
  { label: 'Mountain Standard Time', value: 'mst' },
  { label: 'Pacific Standard Time', value: 'pst' },
  { label: 'Alaska Standard Time', value: 'akst' },
  { label: 'Hawaii Standard Time', value: 'hst' },
];

const europeAfrica = [
  { label: 'Greenwich Mean Time', value: 'gmt' },
  { label: 'Central European Time', value: 'cet' },
  { label: 'Eastern European Time', value: 'eet' },
  { label: 'Western European Summer Time', value: 'west' },
  { label: 'Central Africa Time', value: 'cat' },
  { label: 'East Africa Time', value: 'eat' },
];

const asia = [
  { label: 'Moscow Time', value: 'msk' },
  { label: 'India Standard Time', value: 'ist' },
  { label: 'China Standard Time', value: 'cst_china' },
  { label: 'Japan Standard Time', value: 'jst' },
  { label: 'Korea Standard Time', value: 'kst' },
  { label: 'Indonesia Central Standard Time', value: 'ist_indonesia' },
];

const australiaPacific = [
  { label: 'Australian Western Standard Time', value: 'awst' },
  { label: 'Australian Central Standard Time', value: 'acst' },
  { label: 'Australian Eastern Standard Time', value: 'aest' },
  { label: 'New Zealand Standard Time', value: 'nzst' },
  { label: 'Fiji Time', value: 'fjt' },
];

const southAmerica = [
  { label: 'Argentina Time', value: 'art' },
  { label: 'Bolivia Time', value: 'bot' },
  { label: 'Brasilia Time', value: 'brt' },
  { label: 'Chile Standard Time', value: 'clt' },
];

const timezoneItems = [
  { label: 'Select a timezone', value: null },
  ...northAmerica,
  ...europeAfrica,
  ...asia,
  ...australiaPacific,
  ...southAmerica,
];

export const Demo: Story = {
  render: () => (
    <Select items={fruitSelectItems}>
      <SelectTrigger className="w-100 max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruitSelectItems.map((item) => (
            <SelectItem key={item.value ?? 'select-a-fruit'} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const AlignItemWithTrigger: Story = {
  render: () => {
    const [alignItemWithTrigger, setAlignItemWithTrigger] =
      React.useState(true);

    return (
      <FieldGroup className="w-100 max-w-xs">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="align-item">Align Item</FieldLabel>
            <FieldDescription>
              Toggle to align the item with the trigger.
            </FieldDescription>
          </FieldContent>
          <Switch
            id="align-item"
            checked={alignItemWithTrigger}
            onCheckedChange={setAlignItemWithTrigger}
          />
        </Field>
        <Field>
          <Select items={fruitSelectItems} defaultValue="banana">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={alignItemWithTrigger}>
              <SelectGroup>
                {fruitSelectItems.map((item) => (
                  <SelectItem
                    key={item.value ?? 'select-a-fruit'}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>
    );
  },
};

export const Groups: Story = {
  render: () => (
    <Select items={groupedItems}>
      <SelectTrigger className="w-100 max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruits.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          {vegetables.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Scrollable: Story = {
  render: () => (
    <Select items={timezoneItems}>
      <SelectTrigger className="w-100 max-w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          {northAmerica.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          {europeAfrica.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          {asia.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          {australiaPacific.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          {southAmerica.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => {
    const items = [
      { label: 'Select a fruit', value: null },
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Blueberry', value: 'blueberry' },
      { label: 'Grapes', value: 'grapes', disabled: true },
      { label: 'Pineapple', value: 'pineapple' },
    ];

    return (
      <Select items={items} disabled>
        <SelectTrigger className="w-100 max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem
                key={item.value ?? 'select-a-fruit'}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
};

export const Invalid: Story = {
  render: () => (
    <Field data-invalid className="w-100 max-w-48">
      <FieldLabel>Fruit</FieldLabel>
      <Select items={fruitSelectItems}>
        <SelectTrigger aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {fruitSelectItems.map((item) => (
              <SelectItem
                key={item.value ?? 'select-a-fruit'}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>Please select a fruit.</FieldError>
    </Field>
  ),
};
