import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  Label,
  Switch,
} from '@codejam/ui';

const meta = {
  title: 'Base/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '기본 Switch 예시입니다. 라벨과 스위치를 가로로 배치해 단일 설정 토글을 표현합니다.',
      },
    },
  },
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Description: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '설명이 포함된 Switch 예시입니다. FieldDescription으로 토글 목적을 함께 안내합니다.',
      },
    },
  },
  render: () => (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode">
          Share across devices
        </FieldLabel>
        <FieldDescription>
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-focus-mode" />
    </Field>
  ),
};

export const ChoiceCard: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '카드 형태의 선택 UI입니다. FieldLabel로 전체 영역을 클릭 가능하게 구성한 Switch 패턴입니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="w-100 max-w-sm">
      <FieldLabel htmlFor="switch-share">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-share" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="switch-notifications">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              Receive notifications when focus mode is enabled or disabled.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-notifications" defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '비활성화 상태의 Switch 예시입니다. 사용자 입력을 막고 비활성 스타일을 보여줍니다.',
      },
    },
  },
  render: () => (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  ),
};

export const Invalid: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '유효성 오류 상태의 Switch 예시입니다. `aria-invalid`로 에러 스타일을 적용합니다.',
      },
    },
  },
  render: () => (
    <Field orientation="horizontal" className="max-w-sm" data-invalid>
      <FieldContent>
        <FieldLabel htmlFor="switch-terms">
          Accept terms and conditions
        </FieldLabel>
        <FieldDescription>
          You must accept the terms and conditions to continue.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-terms" aria-invalid />
    </Field>
  ),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Switch 크기 변형 예시입니다. 기본 크기와 `sm` 크기를 동일한 패턴으로 비교합니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="w-100 max-w-[10rem]">
      <Field orientation="horizontal">
        <Switch id="switch-size-sm" size="sm" />
        <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="switch-size-default" size="default" />
        <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
      </Field>
    </FieldGroup>
  ),
};
