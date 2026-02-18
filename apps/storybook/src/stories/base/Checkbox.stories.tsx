import type { Meta, StoryObj, StoryContext } from '@storybook/react-vite';
import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
  Label,
} from '@codejam/ui';

const meta = {
  title: 'Base/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked by default',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    defaultChecked: false,
  },
  render: (args) => (
    <Label className="flex items-center gap-2">
      <Checkbox {...args} />
      Accept terms and conditions
    </Label>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '기본 Checkbox. Controls에서 disabled, defaultChecked 속성을 변경할 수 있습니다.',
      },
      source: {
        transform: (_: string, storyContext: StoryContext) => {
          const { disabled, defaultChecked } = storyContext.args;
          const props = [
            disabled && 'disabled',
            defaultChecked && 'defaultChecked',
          ]
            .filter(Boolean)
            .join(' ');
          return `<Label className="flex items-center gap-2">
  <Checkbox${props ? ` ${props}` : ''} />
  Accept terms and conditions
</Label>`;
        },
      },
    },
  },
};

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Field와 함께 사용하는 Checkbox. horizontal orientation으로 라벨을 옆에 배치합니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  ),
};

export const WithDescription: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '설명이 포함된 Checkbox. FieldDescription으로 라벨 아래에 부가 설명을 표시합니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="mx-auto w-72">
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-desc"
          name="terms-checkbox-desc"
          defaultChecked
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-desc">
            Accept terms and conditions
          </FieldLabel>
          <FieldDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: '비활성화 상태의 Checkbox. 클릭할 수 없으며 흐리게 표시됩니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-disabled>
        <Checkbox
          id="toggle-checkbox-disabled"
          name="toggle-checkbox-disabled"
          disabled
        />
        <FieldLabel htmlFor="toggle-checkbox-disabled">
          Enable notifications
        </FieldLabel>
      </Field>
    </FieldGroup>
  ),
};

export const Invalid: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '유효성 검사 실패 상태의 Checkbox. `aria-invalid`로 에러 스타일을 표시합니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-invalid>
        <Checkbox
          id="terms-checkbox-invalid"
          name="terms-checkbox-invalid"
          aria-invalid
        />
        <FieldLabel htmlFor="terms-checkbox-invalid">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  ),
};

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox의 다양한 구성 데모. 기본, 설명 포함, 비활성화, 제목+설명 조합을 한눈에 보여줍니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="max-w-sm w-80">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox" name="terms-checkbox" />
        <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-2"
          name="terms-checkbox-2"
          defaultChecked
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-2">
            Accept terms and conditions
          </FieldLabel>
          <FieldDescription>
            By clicking this checkbox, you agree to the terms.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
        <FieldLabel htmlFor="toggle-checkbox">Enable notifications</FieldLabel>
      </Field>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              You can enable or disable notifications at any time.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>
  ),
};

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox 그룹. FieldSet과 FieldLegend를 사용해 관련 항목을 묶고, 여러 개를 선택할 수 있습니다.',
      },
    },
  },
  render: () => (
    <FieldSet>
      <FieldLegend variant="label">
        Show these items on the desktop:
      </FieldLegend>
      <FieldDescription>
        Select the items you want to show on the desktop.
      </FieldDescription>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-hard-disks-ljj-checkbox"
            name="finder-pref-9k2-hard-disks-ljj-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
            className="font-normal"
          >
            Hard disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-external-disks-1yg-checkbox"
            name="finder-pref-9k2-external-disks-1yg-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
            className="font-normal"
          >
            External disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-cds-dvds-fzt-checkbox"
            name="finder-pref-9k2-cds-dvds-fzt-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-cds-dvds-fzt-checkbox"
            className="font-normal"
          >
            CDs, DVDs, and iPods
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-connected-servers-6l2-checkbox"
            name="finder-pref-9k2-connected-servers-6l2-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
            className="font-normal"
          >
            Connected servers
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};
