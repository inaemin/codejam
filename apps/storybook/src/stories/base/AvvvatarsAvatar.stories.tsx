import type { Meta, StoryContext, StoryObj } from '@storybook/react-vite';
import {
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
  AvvvatarsAvatar,
  type AvvvatarsVariant,
} from '@codejam/ui';
import { PlusIcon } from 'lucide-react';

function normalizeSize(size?: number): number {
  if (typeof size === 'number' && Number.isFinite(size) && size > 0) {
    return size;
  }

  return 32;
}

function normalizeVariant(variant?: AvvvatarsVariant): AvvvatarsVariant {
  if (variant === 'character') {
    return variant;
  }

  return 'shape';
}

const meta = {
  title: 'Base/AvvvatarsAvatar',
  component: AvvvatarsAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique ID used for avatar generation',
    },
    size: {
      control: { type: 'range', min: 14, max: 120, step: 2 },
      description: 'Avatar size in pixels',
    },
    variant: {
      control: 'select',
      options: ['shape', 'character'],
      description: 'The Avvvatars style variant',
    },
  },
} satisfies Meta<typeof AvvvatarsAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1001',
    size: 32,
    variant: 'shape',
  },
  parameters: {
    docs: {
      description: {
        story:
          '기본 Avatar 예시입니다. AvatarImage 대신 AvvvatarsAvatar 컴포넌트를 사용합니다.',
      },
      source: {
        transform: (_: string, storyContext: StoryContext) => {
          const size = normalizeSize(storyContext.args.size as number | undefined);
          const id = String(storyContext.args.id ?? '1001');
          const variant = normalizeVariant(
            storyContext.args.variant as AvvvatarsVariant | undefined,
          );

          const sizeProp = size !== 32 ? ` size={${size}}` : '';
          const variantProp =
            variant !== 'shape' ? ` variant="${variant}"` : '';

          return `<AvvvatarsAvatar id="${id}"${sizeProp}${variantProp} />`;
        },
      },
    },
  },
  render: (args) => {
    const size = normalizeSize(args.size as number | undefined);
    const variant = normalizeVariant(
      args.variant as AvvvatarsVariant | undefined,
    );
    const id = String(args.id ?? '1001');

    return <AvvvatarsAvatar id={id} size={size} variant={variant} />;
  },
};

export const Demo: Story = {
  args: {
    id: '1001',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Avatar 기본, 배지, 그룹 카운트를 한 번에 보여주는 Avvvatars 데모입니다.',
      },
    },
  },
  render: () => (
    <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
      <AvvvatarsAvatar id="1001" />
      <AvvvatarsAvatar id="1002">
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </AvvvatarsAvatar>
      <AvatarGroup className="grayscale">
        <AvvvatarsAvatar id="1001" />
        <AvvvatarsAvatar id="1003" />
        <AvvvatarsAvatar id="1004" />
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  ),
};

export const Badge: Story = {
  args: {
    id: '1001',
  },
  parameters: {
    docs: {
      description: {
        story:
          '상태 배지를 추가한 Avatar 예시입니다. 배지는 우하단에 표시되며 녹색 배경 스타일을 적용합니다.',
      },
    },
  },
  render: () => (
    <AvvvatarsAvatar id="1001">
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </AvvvatarsAvatar>
  ),
};

export const BadgeIcon: Story = {
  args: {
    id: '1005',
  },
  parameters: {
    docs: {
      description: {
        story:
          '아이콘을 포함한 Avatar 배지 예시입니다. Avvvatars 아바타와 Plus 아이콘 배지를 함께 보여줍니다.',
      },
    },
  },
  render: () => (
    <AvvvatarsAvatar id="1005">
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </AvvvatarsAvatar>
  ),
};

export const Group: Story = {
  args: {
    id: '1001',
  },
  parameters: {
    docs: {
      description: {
        story:
          '여러 사용자를 겹쳐 표시하는 AvatarGroup 예시입니다. 각 아바타 fallback에는 id를 포함합니다.',
      },
    },
  },
  render: () => (
    <AvatarGroup className="grayscale">
      <AvvvatarsAvatar id="1001" />
      <AvvvatarsAvatar id="1002" />
      <AvvvatarsAvatar id="1003" />
    </AvatarGroup>
  ),
};

export const GroupCount: Story = {
  args: {
    id: '1001',
  },
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
      <AvvvatarsAvatar id="1001" />
      <AvvvatarsAvatar id="1002" />
      <AvvvatarsAvatar id="1003" />
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const GroupCountIcon: Story = {
  args: {
    id: '1001',
  },
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
      <AvvvatarsAvatar id="1001" />
      <AvvvatarsAvatar id="1002" />
      <AvvvatarsAvatar id="1003" />
      <AvatarGroupCount>
        <PlusIcon />
      </AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const Sizes: Story = {
  args: {
    id: '1001',
  },
  parameters: {
    docs: {
      description: {
        story:
          'size prop에 따른 Avatar 크기 변화를 보여주는 예시입니다. 14px, 24px, 32px, 40px 순서로 비교할 수 있습니다.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-2 grayscale">
      <AvvvatarsAvatar id="1001" size={14} />
      <AvvvatarsAvatar id="1001" size={24} />
      <AvvvatarsAvatar id="1001" size={32} />
      <AvvvatarsAvatar id="1001" size={40} />
    </div>
  ),
};
