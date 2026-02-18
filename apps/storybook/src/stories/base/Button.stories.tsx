import type { Meta, StoryObj, StoryContext } from '@storybook/react-vite';
import { Button } from '@codejam/ui';
import {
  ArrowUpIcon,
  ArrowUpRightIcon,
  CircleFadingArrowUpIcon,
  GitBranchIcon,
  GitForkIcon,
  Loader2,
} from 'lucide-react';

const meta = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: [
        'default',
        'xs',
        'sm',
        'lg',
        'icon',
        'icon-xs',
        'icon-sm',
        'icon-lg',
      ],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          '기본 Button. Controls에서 variant, size, disabled 속성을 변경할 수 있습니다.',
      },
      source: {
        transform: (_: string, storyContext: StoryContext) => {
          const { variant, size, disabled, children } = storyContext.args;
          const props = [
            variant !== 'default' && `variant="${variant}"`,
            size !== 'default' && `size="${size}"`,
            disabled && 'disabled',
          ]
            .filter(Boolean)
            .join(' ');
          return `<Button${props ? ` ${props}` : ''}>${children}</Button>`;
        },
      },
    },
  },
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'secondary variant. 보조 액션에 사용합니다.',
      },
    },
  },
  render: () => <Button variant="secondary">Secondary</Button>,
};

export const Destructive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'destructive variant. 삭제 등 위험한 작업에 사용합니다.',
      },
    },
  },
  render: () => <Button variant="destructive">Destructive</Button>,
};

export const Outline: Story = {
  parameters: {
    docs: {
      description: {
        story: 'outline variant. 테두리만 있는 스타일입니다.',
      },
    },
  },
  render: () => <Button variant="outline">Outline</Button>,
};

export const Ghost: Story = {
  parameters: {
    docs: {
      description: {
        story: 'ghost variant. 배경 없이 호버 시에만 표시되는 스타일입니다.',
      },
    },
  },
  render: () => <Button variant="ghost">Ghost</Button>,
};

export const Link: Story = {
  parameters: {
    docs: {
      description: {
        story: 'link variant. 링크처럼 보이는 버튼입니다.',
      },
    },
  },
  render: () => <Button variant="link">Link</Button>,
};

export const Icon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '아이콘 전용 Button. `size="icon"`으로 정사각형 버튼을 만듭니다.',
      },
    },
  },
  render: () => (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  ),
};

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '아이콘이 포함된 Button. `data-icon="inline-start"` 또는 `data-icon="inline-end"`로 아이콘 위치를 지정합니다.',
      },
    },
  },
  render: () => (
    <div className="flex gap-2">
      <Button variant="outline">
        <GitBranchIcon data-icon="inline-start" /> New Branch
      </Button>
      <Button variant="outline">
        Fork
        <GitForkIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
};

export const Rounded: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '완전히 둥근 Button. `rounded-full` 클래스를 추가하여 pill 형태로 표시합니다.',
      },
    },
  },
  render: () => (
    <div className="flex gap-2">
      <Button className="rounded-full">Get Started</Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '로딩 상태의 Button. disabled 상태에서 Loader2 아이콘의 spin 애니메이션을 표시합니다.',
      },
    },
  },
  render: () => (
    <div className="flex gap-2">
      <Button variant="outline" disabled>
        <Loader2 className="animate-spin" data-icon="inline-start" />
        Generating
      </Button>
      <Button variant="secondary" disabled>
        Downloading
        <Loader2 className="animate-spin" data-icon="inline-start" />
      </Button>
    </div>
  ),
};

export const AsLink: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'a 태그로 렌더링되는 Button. `render` prop으로 HTML 요소를 변경할 수 있습니다.',
      },
    },
  },
  render: () => <Button render={<a href="#" />}>Login</Button>,
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '모든 크기 비교. xs, sm, default, lg 사이즈와 대응하는 icon 사이즈를 보여줍니다.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <Button size="xs" variant="outline">
          Extra Small
        </Button>
        <Button size="icon-xs" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button size="icon-sm" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">Default</Button>
        <Button size="icon" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button size="icon-lg" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  ),
};
