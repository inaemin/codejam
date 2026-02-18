import type { Meta, StoryContext, StoryObj } from '@storybook/react-vite';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
} from '@codejam/ui';
import {
  ArrowUpRight,
  Bell,
  Cloud,
  FolderCode,
  Plus,
  RefreshCcw,
  Search,
} from 'lucide-react';

const meta = {
  title: 'Base/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: undefined,
  },
  render: (args) => (
    <Empty className={args.className}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating your
          first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
      <Button
        variant="link"
        size="sm"
        className="text-muted-foreground"
        render={<a href="#" />}
      >
        Learn More
        <ArrowUpRight data-icon="inline-end" />
      </Button>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '기본 Empty 상태입니다. 프로젝트가 없을 때의 안내 문구와 두 개의 CTA 버튼, 보조 링크 버튼을 함께 표시합니다.',
      },
      source: {
        transform: (_: string, storyContext: StoryContext) => {
          const className = storyContext.args.className as string | undefined;
          const classProp = className ? ` className="${className}"` : '';
          return `<Empty${classProp}>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FolderCode />
    </EmptyMedia>
    <EmptyTitle>No Projects Yet</EmptyTitle>
    <EmptyDescription>
      You haven't created any projects yet. Get started by creating your first project.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent className="flex-row justify-center gap-2">
    <Button>Create Project</Button>
    <Button variant="outline">Import Project</Button>
  </EmptyContent>
  <Button
    variant="link"
    size="sm"
    className="text-muted-foreground"
    render={<a href="#" />}
  >
    Learn More
    <ArrowUpRight data-icon="inline-end" />
  </Button>
</Empty>`;
        },
      },
    },
  },
};

export const Outline: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '테두리만 강조한 Empty 예시입니다. 클라우드 스토리지에 파일을 업로드하도록 유도합니다.',
      },
    },
  },
  render: () => (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Cloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Upload Files
        </Button>
      </EmptyContent>
    </Empty>
  ),
};

export const Background: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '배경을 적용한 Empty 예시입니다. 알림이 없을 때의 상태를 깔끔하게 보여줍니다.',
      },
    },
  },
  render: () => (
    <Empty className="bg-muted/30 h-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Bell />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          You&apos;re all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <RefreshCcw data-icon="inline-start" />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  ),
};

export const AvatarExample: Story = {
  name: 'Avatar',
  parameters: {
    docs: {
      description: {
        story:
          '아바타를 사용하는 Empty 예시입니다. 오프라인 사용자 상태와 후속 행동 버튼을 제공합니다.',
      },
    },
  },
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-12">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="grayscale"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>User Offline</EmptyTitle>
        <EmptyDescription>
          This user is currently offline. You can leave a message to notify them
          or try again later.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Leave Message</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const AvatarGroup: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '여러 아바타를 그룹으로 보여주는 Empty 예시입니다. 팀 초대 액션을 함께 배치합니다.',
      },
    },
  },
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
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
          </div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>
          Invite your team to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <Plus />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  ),
};

export const InputGroupUsage: Story = {
  name: 'InputGroup',
  parameters: {
    docs: {
      description: {
        story:
          '검색 입력 그룹을 포함한 Empty 예시입니다. 404 상태에서 빠르게 다시 탐색할 수 있도록 구성합니다.',
      },
    },
  },
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  ),
};
