import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  Kbd as KbdPrimitive,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@codejam/ui';
import {
  CheckIcon,
  CopyIcon,
  CreditCardIcon,
  EyeOffIcon,
  FileCodeIcon,
  InfoIcon,
  Loader2,
  MailIcon,
  RefreshCcw,
  SearchIcon,
  StarIcon,
} from 'lucide-react';

const meta = {
  title: 'Base/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '검색 입력에 아이콘과 결과 수를 함께 배치한 input-group-demo 예제입니다.',
      },
    },
  },
  render: () => (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
    </InputGroup>
  ),
};

export const InlineStart: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'inline-start 정렬로 아이콘을 입력 시작 위치에 배치한 예제입니다.',
      },
    },
  },
  render: () => (
    <Field className="max-w-sm w-100">
      <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the start.</FieldDescription>
    </Field>
  ),
};

export const InlineEnd: Story = {
  parameters: {
    docs: {
      description: {
        story: 'inline-end 정렬로 아이콘을 입력 끝 위치에 배치한 예제입니다.',
      },
    },
  },
  render: () => (
    <Field className="max-w-sm w-100">
      <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="inline-end-input"
          type="password"
          placeholder="Enter password"
        />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  ),
};

export const BlockStart: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'block-start 정렬로 입력 상단에 헤더형 애드온을 배치한 예제입니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="max-w-sm w-100">
      <Field>
        <FieldLabel htmlFor="block-start-input">Input</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput
            id="block-start-input"
            placeholder="Enter your name"
          />
          <InputGroupAddon align="block-start">
            <InputGroupText>Full Name</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Header positioned above the input.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-start-textarea">Textarea</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-start-textarea"
            placeholder="console.log('Hello, world!');"
            className="font-mono text-sm"
          />
          <InputGroupAddon align="block-start">
            <FileCodeIcon className="text-muted-foreground" />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto">
              <CopyIcon />
              <span className="sr-only">Copy</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          Header positioned above the textarea.
        </FieldDescription>
      </Field>
    </FieldGroup>
  ),
};

export const BlockEnd: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'block-end 정렬로 입력 하단에 푸터형 애드온을 배치한 예제입니다.',
      },
    },
  },
  render: () => (
    <FieldGroup className="max-w-sm w-100">
      <Field>
        <FieldLabel htmlFor="block-end-input">Input</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="Enter amount" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Footer positioned below the input.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-textarea">Textarea</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="Write a comment..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="default" size="sm" className="ml-auto">
              Post
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          Footer positioned below the textarea.
        </FieldDescription>
      </Field>
    </FieldGroup>
  ),
};

export const Icon: Story = {
  parameters: {
    docs: {
      description: {
        story: '아이콘 중심 input-group-icon 조합 4가지를 보여주는 예제입니다.',
      },
    },
  },
  render: () => (
    <div className="grid w-100 max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="Enter your email" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Text: Story = {
  parameters: {
    docs: {
      description: {
        story: '텍스트 중심 input-group-text 조합 4가지를 보여주는 예제입니다.',
      },
    },
  },
  render: () => (
    <div className="grid w-100 max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Button: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '버튼 중심 input-group-button 조합 3가지를 로컬 API에 맞게 반영한 예제입니다.',
      },
    },
  },
  render: () => {
    const [isCopied, setIsCopied] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    return (
      <div className="grid w-100 max-w-sm gap-6">
        <InputGroup>
          <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Copy"
              title="Copy"
              size="icon-xs"
              onClick={() => {
                void navigator.clipboard?.writeText('https://x.com/shadcn');
                setIsCopied(true);
                window.setTimeout(() => setIsCopied(false), 1200);
              }}
            >
              {isCopied ? <CheckIcon /> : <CopyIcon />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup className="[--radius:9999px]">
          <Popover>
            <PopoverTrigger render={<InputGroupAddon />}>
              <InputGroupButton variant="secondary" size="icon-xs">
                <InfoIcon />
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="flex flex-col gap-1 rounded-xl text-sm"
            >
              <p className="font-medium">Your connection is not secure.</p>
              <p>
                You should not enter any sensitive information on this site.
              </p>
            </PopoverContent>
          </Popover>
          <InputGroupAddon className="text-muted-foreground pl-1.5">
            https://
          </InputGroupAddon>
          <InputGroupInput id="input-secure-19" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              onClick={() => setIsFavorite((prev) => !prev)}
              size="icon-xs"
            >
              <StarIcon
                data-favorite={isFavorite}
                className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
              />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Type to search..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary">Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
};

export const Kbd: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Kbd 컴포넌트로 단축키를 표시하는 input-group-kbd 예제입니다.',
      },
    },
  },
  render: () => (
    <InputGroup className="max-w-sm w-100">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <KbdPrimitive>⌘K</KbdPrimitive>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const Dropdown: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'DropdownMenu 미export 환경에서 Select로 dropdown 시나리오를 적응한 예제입니다.',
      },
    },
  },
  render: () => (
    <div className="grid w-100 max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter file name" />
        <InputGroupAddon align="inline-end">
          <Select defaultValue="settings">
            <SelectTrigger className="rounded-none border-0 px-2 text-xs shadow-none focus:ring-0 focus:ring-offset-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="settings">Settings</SelectItem>
              <SelectItem value="copy-path">Copy path</SelectItem>
              <SelectItem value="open-location">Open location</SelectItem>
            </SelectContent>
          </Select>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <Select defaultValue="documentation">
            <SelectTrigger className="rounded-none border-0 px-2 text-xs shadow-none focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Search In..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="documentation">Documentation</SelectItem>
              <SelectItem value="blog-posts">Blog Posts</SelectItem>
              <SelectItem value="changelog">Changelog</SelectItem>
            </SelectContent>
          </Select>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Spinner: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Spinner 컴포넌트 대신 Loader2 아이콘으로 로딩 상태를 표현한 예제입니다.',
      },
    },
  },
  render: () => (
    <div className="grid w-100 max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Searching..." />
        <InputGroupAddon align="inline-end">
          <Loader2 className="animate-spin" />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Processing..." />
        <InputGroupAddon>
          <Loader2 className="animate-spin" />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Saving changes..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Saving...</InputGroupText>
          <Loader2 className="animate-spin" />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Refreshing data..." />
        <InputGroupAddon>
          <Loader2 className="animate-spin" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground">
            Please wait...
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Textarea: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '상단/하단 블록 애드온을 함께 사용하는 input-group-textarea 예제입니다.',
      },
    },
  },
  render: () => (
    <div className="grid w-100 max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <FileCodeIcon />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <RefreshCcw />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const CustomInput: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'react-textarea-autosize 없이 data-slot 기반 커스텀 입력을 구성한 예제입니다.',
      },
    },
  },
  render: () => (
    <div className="grid w-100 max-w-sm gap-6">
      <InputGroup>
        <textarea
          data-slot="input-group-control"
          className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
          placeholder="Autoresize textarea..."
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton className="ml-auto" size="sm" variant="default">
            Submit
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};
