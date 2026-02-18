import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Button,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Switch,
  Textarea,
} from '@codejam/ui';

const months = [
  { label: 'MM', value: 'MM' },
  { label: '01', value: '01' },
  { label: '02', value: '02' },
  { label: '03', value: '03' },
  { label: '04', value: '04' },
  { label: '05', value: '05' },
  { label: '06', value: '06' },
  { label: '07', value: '07' },
  { label: '08', value: '08' },
  { label: '09', value: '09' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
];

const years = [
  { label: 'YYYY', value: 'YYYY' },
  { label: '2024', value: '2024' },
  { label: '2025', value: '2025' },
  { label: '2026', value: '2026' },
  { label: '2027', value: '2027' },
  { label: '2028', value: '2028' },
  { label: '2029', value: '2029' },
];

const departmentItems = [
  { label: 'Choose department', value: 'choose-department' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Sales', value: 'sales' },
  { label: 'Customer Support', value: 'support' },
  { label: 'Human Resources', value: 'hr' },
  { label: 'Finance', value: 'finance' },
  { label: 'Operations', value: 'operations' },
];

const meta = {
  title: 'Base/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="max-w-md w-[600px]">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field orientation={args.orientation}>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field orientation={args.orientation}>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field orientation={args.orientation}>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Month
                  </FieldLabel>
                  <Select defaultValue="MM">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {months.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field orientation={args.orientation}>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Year
                  </FieldLabel>
                  <Select defaultValue="YYYY">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {years.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field orientation={args.orientation}>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field orientation={args.orientation}>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Comments
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  ),
};

export const InputField: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Input 예시입니다. 사용자명과 비밀번호 입력 필드를 FieldSet으로 묶어 문서 예제를 그대로 보여줍니다.',
      },
    },
  },
  render: () => (
    <FieldSet className="w-[600px] max-w-xs ">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" type="text" placeholder="Max Leiter" />
          <FieldDescription>
            Choose a unique username for your account.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
          <Input id="password" type="password" placeholder="••••••••" />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

export const TextareaField: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Textarea 예시입니다. 긴 피드백 입력에서도 라벨과 설명이 일관된 구조로 유지됩니다.',
      },
    },
  },
  render: () => (
    <FieldSet className="w-[600px] max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
          <Textarea
            id="feedback"
            placeholder="Your feedback helps us improve..."
            rows={4}
          />
          <FieldDescription>
            Share your thoughts about our service.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

export const SelectField: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Select 예시입니다. 부서 선택과 안내 문구를 Field 패턴에 맞춰 구성합니다.',
      },
    },
  },
  render: () => (
    <Field className="w-[600px] max-w-xs">
      <FieldLabel>Department</FieldLabel>
      <Select defaultValue="choose-department">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {departmentItems.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>
        Select your department or area of work.
      </FieldDescription>
    </Field>
  ),
};

export const SliderField: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Slider 예시입니다. 선택한 예산 범위를 실시간으로 표시하는 문서 패턴을 반영했습니다.',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState<readonly number[]>([200, 800]);

    return (
      <Field className="w-[600px] max-w-xs">
        <FieldTitle>Price Range</FieldTitle>
        <FieldDescription>
          Set your budget range ($
          <span className="font-medium tabular-nums">{value[0]}</span> -{' '}
          <span className="font-medium tabular-nums">{value[1]}</span>).
        </FieldDescription>
        <Slider
          value={value}
          onValueChange={(nextValue) => {
            if (Array.isArray(nextValue)) {
              setValue(nextValue);
            }
          }}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-[600px]"
          aria-label="Price Range"
        />
      </Field>
    );
  },
};

export const FieldsetExample: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Fieldset 예시입니다. 주소 입력을 하나의 섹션으로 묶어 의미적으로 구성합니다.',
      },
    },
  },
  render: () => (
    <FieldSet className="w-[600px] max-w-sm">
      <FieldLegend>Address Information</FieldLegend>
      <FieldDescription>
        We need your address to deliver your order.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="street">Street Address</FieldLabel>
          <Input id="street" type="text" placeholder="123 Main St" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input id="city" type="text" placeholder="New York" />
          </Field>
          <Field>
            <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
            <Input id="zip" type="text" placeholder="90502" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  ),
};

export const CheckboxField: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox 예시입니다. 항목 그룹과 상세 설명을 FieldSeparator로 구분해 문서 구조를 반영합니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="w-[600px] max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">
          Show these items on the desktop
        </FieldLegend>
        <FieldDescription>
          Select the items you want to show on the desktop.
        </FieldDescription>
        <FieldGroup className="gap-3">
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-hard-disks-ljj" defaultChecked />
            <FieldLabel
              htmlFor="finder-pref-9k2-hard-disks-ljj"
              className="font-normal"
            >
              Hard disks
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-external-disks-1yg" defaultChecked />
            <FieldLabel
              htmlFor="finder-pref-9k2-external-disks-1yg"
              className="font-normal"
            >
              External disks
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
            <FieldLabel
              htmlFor="finder-pref-9k2-cds-dvds-fzt"
              className="font-normal"
            >
              CDs, DVDs, and iPods
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
            <FieldLabel
              htmlFor="finder-pref-9k2-connected-servers-6l2"
              className="font-normal"
            >
              Connected servers
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
            Sync Desktop & Documents folders
          </FieldLabel>
          <FieldDescription>
            Your Desktop & Documents folders are being synced with iCloud Drive.
            You can access them from other devices.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const SwitchField: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Switch 예시입니다. 단일 설정 항목을 가로 배치로 보여주는 기본 문서 패턴입니다.',
      },
    },
  },
  render: () => (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  ),
};

export const FieldGroupExample: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Field Group 예시입니다. 알림 설정 섹션을 분리해 체크박스 그룹을 단계적으로 구성합니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="w-[600px] max-w-xs">
      <FieldSet>
        <FieldLabel>Responses</FieldLabel>
        <FieldDescription>
          Get notified when ChatGPT responds to requests that take time, like
          research or image generation.
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="push" defaultChecked disabled />
            <FieldLabel htmlFor="push" className="font-normal">
              Push notifications
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLabel>Tasks</FieldLabel>
        <FieldDescription>
          Get notified when tasks you&apos;ve created have updates.{' '}
          <a href="#">Manage tasks</a>
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="push-tasks" />
            <FieldLabel htmlFor="push-tasks" className="font-normal">
              Push notifications
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="email-tasks" />
            <FieldLabel htmlFor="email-tasks" className="font-normal">
              Email notifications
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  ),
};

export const ResponsiveLayout: Story = {
  args: {
    orientation: 'responsive',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Responsive Layout 예시입니다. 컨테이너 너비에 따라 필드가 세로/가로로 자동 전환됩니다.',
      },
    },
  },
  render: (args) => (
    <div className="w-[600px] max-w-lg">
      <form>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldGroup>
            <Field orientation={args.orientation}>
              <FieldContent>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <FieldDescription>
                  Provide your full name for identification
                </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="Evil Rabbit" required />
            </Field>
            <Field orientation={args.orientation}>
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  ),
};

export const ValidationAndErrors: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Validation and Errors 예시입니다. data-invalid, aria-invalid, FieldError를 함께 사용해 오류 상태를 명확히 표현합니다.',
      },
    },
  },
  render: () => (
    <Field data-invalid className="w-[600px] max-w-xs">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" aria-invalid />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  ),
};
