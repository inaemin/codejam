import type { Meta, StoryObj, StoryContext } from '@storybook/react-vite';
import * as React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Field,
  FieldDescription,
  FieldLabel,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@codejam/ui';
import {
  MinusIcon,
  PlusIcon,
  SearchIcon,
  AudioLinesIcon,
  ArrowRightIcon,
  BotIcon,
  ChevronDownIcon,
} from 'lucide-react';

const meta = {
  title: 'Base/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the button group',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args: Story['args']) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '기본 ButtonGroup. Controls에서 orientation을 변경할 수 있습니다.',
      },
      source: {
        transform: (_: string, storyContext: StoryContext) => {
          const { orientation } = storyContext.args;
          const orientationProp =
            orientation !== 'horizontal' ? ` orientation="${orientation}"` : '';
          return `<ButtonGroup${orientationProp}>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>`;
        },
      },
    },
  },
};

export const Orientation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '세로 방향 ButtonGroup. `orientation="vertical"`로 버튼을 세로로 배치합니다.',
      },
    },
  },
  render: () => (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const Size: Story = {
  parameters: {
    docs: {
      description: {
        story: 'ButtonGroup의 다양한 크기. sm, default, lg 사이즈를 비교합니다.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="outline" size="sm">
          Group
        </Button>
        <Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Group
        </Button>
        <Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  ),
};

export const Separator: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '구분선이 포함된 ButtonGroup. ButtonGroupSeparator로 버튼 사이에 구분선을 추가합니다.',
      },
    },
  },
  render: () => (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  ),
};

export const Split: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Split Button 패턴. 메인 액션 버튼과 추가 옵션 버튼을 구분선으로 나눕니다.',
      },
    },
  },
  render: () => (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="icon">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const WithInput: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input과 Button을 결합한 ButtonGroup. 검색 UI 등에 활용합니다.',
      },
    },
  },
  render: () => (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const Nested: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '중첩된 ButtonGroup. ButtonGroup 안에 ButtonGroup과 InputGroup을 배치하여 복합 UI를 구성합니다.',
      },
    },
  },
  render: () => (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <Tooltip>
            <TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
              <AudioLinesIcon />
            </TooltipTrigger>
            <TooltipContent>Voice Mode</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  ),
};

const CURRENCIES = [
  { label: 'US Dollar', value: '$' },
  { label: 'Euro', value: '€' },
  { label: 'British Pound', value: '£' },
];

export const SelectUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Select와 결합한 ButtonGroup. 통화 선택 드롭다운과 금액 입력을 하나의 그룹으로 묶습니다.',
      },
    },
  },
  render: () => {
    const [currency, setCurrency] = React.useState('$');

    return (
      <ButtonGroup>
        <ButtonGroup>
          <Select
            items={CURRENCIES}
            value={currency}
            onValueChange={(value) => setCurrency(value as string)}
          >
            <SelectTrigger className="font-mono">{currency}</SelectTrigger>
            <SelectContent alignItemWithTrigger={false} align="start">
              <SelectGroup>
                {CURRENCIES.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.value}{' '}
                    <span className="text-muted-foreground">{item.label}</span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input placeholder="10.00" pattern="[0-9]*" />
        </ButtonGroup>
        <ButtonGroup>
          <Button aria-label="Send" size="icon" variant="outline">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    );
  },
};

export const PopoverUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Popover와 결합한 ButtonGroup. 메인 버튼 옆에 추가 옵션을 Popover로 제공합니다.',
      },
    },
  },
  render: () => (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" size="icon" aria-label="Open Popover" />
          }
        >
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl text-sm">
          <PopoverHeader>
            <PopoverTitle>Start a new task with Copilot</PopoverTitle>
            <PopoverDescription>
              Describe your task in natural language.
            </PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel htmlFor="task" className="sr-only">
              Task Description
            </FieldLabel>
            <Textarea
              id="task"
              placeholder="I need to..."
              className="resize-none"
            />
            <FieldDescription>
              Copilot will open a pull request for review.
            </FieldDescription>
          </Field>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  ),
};

export const InputGroupUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'InputGroup과 결합한 ButtonGroup. 채팅 입력 UI처럼 버튼, 입력 필드, 토글을 하나의 둥근 그룹으로 구성합니다.',
      },
    },
  },
  render: () => {
    const [voiceEnabled, setVoiceEnabled] = React.useState(false);

    return (
      <ButtonGroup className="[--radius:9999rem]">
        <ButtonGroup>
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <InputGroup>
            <InputGroupInput
              placeholder={
                voiceEnabled ? 'Record and send audio...' : 'Send a message...'
              }
              disabled={voiceEnabled}
            />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <InputGroupButton
                      onClick={() => setVoiceEnabled(!voiceEnabled)}
                      size="icon-xs"
                      data-active={voiceEnabled}
                      className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                      aria-pressed={voiceEnabled}
                    />
                  }
                >
                  <AudioLinesIcon />
                </TooltipTrigger>
                <TooltipContent>Voice Mode</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        </ButtonGroup>
      </ButtonGroup>
    );
  },
};
