import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Badge as BadgePrimitive,
  Button,
  ButtonGroup as ButtonGroupPrimitive,
  Field as FieldPrimitive,
  FieldDescription,
  FieldGroup as FieldGroupPrimitive,
  FieldLabel,
  Input,
  InputGroup as InputGroupPrimitive,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@codejam/ui';
import { InfoIcon } from 'lucide-react';

const meta = {
  title: 'Base/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'API Key 입력 예제입니다. 비밀번호 타입과 보안 안내 문구를 함께 보여줍니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive>
      <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
      <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
      <FieldDescription>
        Your API key is encrypted and stored securely.
      </FieldDescription>
    </FieldPrimitive>
  ),
};

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '가장 단순한 Input 예제입니다. 텍스트 플레이스홀더만 표시합니다.',
      },
    },
  },
  render: () => <Input placeholder="Enter text" />,
};

export const Field: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Field와 함께 사용하는 Input 예제입니다. 라벨과 설명 문구를 함께 구성합니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive>
      <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="Enter your username"
      />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </FieldPrimitive>
  ),
};

export const FieldGroup: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '여러 입력 필드를 FieldGroup으로 묶은 예제입니다. 하단에 Reset과 Submit 액션을 배치합니다.',
      },
    },
  },
  render: () => (
    <div className="w-[400px]">
      <FieldGroupPrimitive>
        <FieldPrimitive>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input id="fieldgroup-name" placeholder="Jordan Lee" />
        </FieldPrimitive>
        <FieldPrimitive>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            placeholder="name@example.com"
          />
          <FieldDescription>
            We'll send updates to this address.
          </FieldDescription>
        </FieldPrimitive>
        <FieldPrimitive orientation="horizontal">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </FieldPrimitive>
      </FieldGroupPrimitive>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '비활성화된 Input 상태 예제입니다. 입력이 잠긴 상태와 안내 텍스트를 보여줍니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive data-disabled>
      <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
      <Input
        id="input-demo-disabled"
        type="email"
        placeholder="Email"
        disabled
      />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </FieldPrimitive>
  ),
};

export const Invalid: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '유효성 검사 실패 상태 예제입니다. aria-invalid와 에러 설명 문구를 함께 표시합니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive data-invalid>
      <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
      <Input id="input-invalid" placeholder="Error" aria-invalid />
      <FieldDescription>
        This field contains validation errors.
      </FieldDescription>
    </FieldPrimitive>
  ),
};

export const File: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '파일 업로드 Input 예제입니다. 라벨과 함께 업로드 안내 문구를 제공합니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </FieldPrimitive>
  ),
};

export const Inline: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '가로 정렬된 검색 입력 예제입니다. Input과 버튼을 한 줄로 구성합니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </FieldPrimitive>
  ),
};

export const Grid: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '2열 그리드 레이아웃 입력 예제입니다. 이름과 성 입력 필드를 나란히 배치합니다.',
      },
    },
  },
  render: () => (
    <FieldGroupPrimitive className="grid max-w-sm grid-cols-2 w-100">
      <FieldPrimitive>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Input id="first-name" placeholder="Jordan" />
      </FieldPrimitive>
      <FieldPrimitive>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Input id="last-name" placeholder="Lee" />
      </FieldPrimitive>
    </FieldGroupPrimitive>
  ),
};

export const Required: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '필수 입력 필드 예제입니다. required 속성과 필수 표시 문구를 함께 보여줍니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive className="w-100">
      <FieldLabel htmlFor="input-required">
        Required Field <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="This field is required"
        required
      />
      <FieldDescription>This field must be filled out.</FieldDescription>
    </FieldPrimitive>
  ),
};

export const Badge: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '라벨 우측에 Badge를 함께 사용하는 예제입니다. 베타 상태를 시각적으로 표시합니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive className="w-100">
      <FieldLabel htmlFor="input-badge">
        Webhook URL{' '}
        <BadgePrimitive variant="secondary" className="ml-auto">
          Beta
        </BadgePrimitive>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </FieldPrimitive>
  ),
};

export const InputGroup: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'InputGroup 조합 예제입니다. URL 접두사와 정보 아이콘 애드온을 함께 표시합니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive className="w-100">
      <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
      <InputGroupPrimitive>
        <InputGroupInput id="input-group-url" placeholder="example.com" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InfoIcon />
        </InputGroupAddon>
      </InputGroupPrimitive>
    </FieldPrimitive>
  ),
};

export const ButtonGroup: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'ButtonGroup과 Input을 결합한 검색 예제입니다. 입력과 실행 버튼을 한 그룹으로 묶습니다.',
      },
    },
  },
  render: () => (
    <FieldPrimitive>
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroupPrimitive>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroupPrimitive>
    </FieldPrimitive>
  ),
};

export const Form: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '폼 전체에서 Input을 사용하는 종합 예제입니다. 다양한 필드와 제출 액션을 함께 구성합니다.',
      },
    },
  },
  render: () => {
    const countries = [
      { label: 'United States', value: 'us' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Canada', value: 'ca' },
    ];

    return (
      <form className="w-100 max-w-sm">
        <FieldGroupPrimitive>
          <FieldPrimitive>
            <FieldLabel htmlFor="form-name">Name</FieldLabel>
            <Input
              id="form-name"
              type="text"
              placeholder="Evil Rabbit"
              required
            />
          </FieldPrimitive>
          <FieldPrimitive>
            <FieldLabel htmlFor="form-email">Email</FieldLabel>
            <Input
              id="form-email"
              type="email"
              placeholder="john@example.com"
            />
            <FieldDescription>
              We'll never share your email with anyone.
            </FieldDescription>
          </FieldPrimitive>
          <div className="grid grid-cols-2 gap-4">
            <FieldPrimitive>
              <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
              <Input
                id="form-phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
              />
            </FieldPrimitive>
            <FieldPrimitive>
              <FieldLabel htmlFor="form-country">Country</FieldLabel>
              <Select items={countries} defaultValue="us">
                <SelectTrigger id="form-country">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FieldPrimitive>
          </div>
          <FieldPrimitive>
            <FieldLabel htmlFor="form-address">Address</FieldLabel>
            <Input id="form-address" type="text" placeholder="123 Main St" />
          </FieldPrimitive>
          <FieldPrimitive orientation="horizontal">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </FieldPrimitive>
        </FieldGroupPrimitive>
      </form>
    );
  },
};
