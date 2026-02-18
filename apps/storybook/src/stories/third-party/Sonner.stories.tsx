import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DocsContainer,
  type DocsContainerProps,
} from '@storybook/addon-docs/blocks';
import type { PropsWithChildren } from 'react';
import { Button, ThemeProvider, Toaster, toast } from '@codejam/ui';

const resolveForcedTheme = (): 'light' | 'dark' => {
  if (typeof document === 'undefined') {
    return 'light';
  }

  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

const SonnerDocsContainer = ({
  children,
  context,
}: PropsWithChildren<DocsContainerProps>) => (
  <DocsContainer context={context}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="vite-ui-theme"
      forcedTheme={resolveForcedTheme()}
    >
      <Toaster />
    </ThemeProvider>
    {children}
  </DocsContainer>
);

const meta = {
  title: 'Third-Party/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'shadcn Sonner 예제를 기준으로 구성한 스토리입니다. Storybook Docs/Canvas 모두에서 토스트 동작을 확인할 수 있도록 Toaster를 스토리 컨텍스트에 맞게 1회 마운트합니다.',
      },
      container: SonnerDocsContainer,
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const shouldRenderToaster = context.viewMode === 'story';

      return (
        <>
          {shouldRenderToaster ? <Toaster /> : null}
          <Story />
        </>
      );
    },
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => undefined,
          },
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast('Event has been created')}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success('Event has been created')}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info('Be at the area 10 minutes before the event time')
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Event start time cannot be earlier than 8am')
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error('Event has not been created')}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: 'Event' }), 2000),
              ),
            {
              loading: 'Loading...',
              success: (data) => `${data.name} has been created`,
              error: 'Error',
            },
          );
        }}
      >
        Promise
      </Button>
    </div>
  ),
};

export const Description: Story = {
  render: () => (
    <Button
      variant="outline"
      className="w-fit"
      onClick={() =>
        toast('Event has been created', {
          description: 'Monday, January 3rd at 6:00pm',
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const Position: Story = {
  render: () => (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', { position: 'top-left' })
        }
      >
        Top Left
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', { position: 'top-center' })
        }
      >
        Top Center
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', { position: 'top-right' })
        }
      >
        Top Right
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', { position: 'bottom-left' })
        }
      >
        Bottom Left
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', { position: 'bottom-center' })
        }
      >
        Bottom Center
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', { position: 'bottom-right' })
        }
      >
        Bottom Right
      </Button>
    </div>
  ),
};
