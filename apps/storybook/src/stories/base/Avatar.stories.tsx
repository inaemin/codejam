import type { Meta, StoryContext, StoryObj } from '@storybook/react-vite';
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@codejam/ui';
import { PlusIcon } from 'lucide-react';

const meta = {
  title: 'Base/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the avatar',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story:
          '기본 Avatar 예시입니다. Controls에서 size를 변경해 기본, 작은, 큰 크기를 확인할 수 있습니다.',
      },
      source: {
        transform: (_: string, storyContext: StoryContext) => {
          const size = storyContext.args.size as 'default' | 'sm' | 'lg';
          const sizeProp = size !== 'default' ? ` size="${size}"` : '';
          return `<Avatar${sizeProp}>
  <AvatarImage
    src="https://github.com/shadcn.png"
    alt="@shadcn"
    className="grayscale"
  />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`;
        },
      },
    },
  },
  render: (args) => (
    <Avatar size={args.size}>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Avatar 기본, 배지, 그룹 카운트를 한 번에 보여주는 데모입니다. 문서의 avatar-demo 구성을 그대로 확인할 수 있습니다.',
      },
    },
  },
  render: () => (
    <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className="grayscale"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
      <AvatarGroup className="grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  ),
};

export const Badge: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '상태 배지를 추가한 Avatar 예시입니다. 배지는 우하단에 표시되며 녹색 배경 스타일을 적용합니다.',
      },
    },
  },
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  ),
};

export const BadgeIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '아이콘을 포함한 Avatar 배지 예시입니다. grayscale 아바타와 Plus 아이콘 배지를 함께 보여줍니다.',
      },
    },
  },
  render: () => (
    <Avatar className="grayscale">
      <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
      <AvatarFallback>PP</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  ),
};

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '여러 사용자를 겹쳐 표시하는 AvatarGroup 예시입니다. 각 아바타는 fallback 이니셜과 함께 구성됩니다.',
      },
    },
  },
  render: () => (
    <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
};

export const GroupCount: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'AvatarGroup에 추가 인원 수를 표시한 예시입니다. 그룹 마지막에 +3 카운트를 노출합니다.',
      },
    },
  },
  render: () => (
    <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const GroupCountIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '카운트 대신 아이콘을 사용하는 AvatarGroup 예시입니다. 추가 인원 표시 영역에 Plus 아이콘을 렌더링합니다.',
      },
    },
  },
  render: () => (
    <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>
        <PlusIcon />
      </AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'size prop에 따른 Avatar 크기 변화를 보여주는 예시입니다. sm, default, lg 순서로 비교할 수 있습니다.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-2 grayscale">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ),
};
