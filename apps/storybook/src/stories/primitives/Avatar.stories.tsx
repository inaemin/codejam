import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  createAvatarGenerator,
  LucideAvatarProvider,
  BoringAvatarProvider,
  AvvvatarsProvider,
} from '@codejam/ui';

const provider = new LucideAvatarProvider();
const { Avatar } = createAvatarGenerator(provider);
const { Avatar: BoringAvatar } = createAvatarGenerator(
  new BoringAvatarProvider({ variant: 'beam' }),
);
const { Avatar: AvvvatarsAvatar } = createAvatarGenerator(
  new AvvvatarsProvider({ variant: 'shape' }),
);

// 참가자 색상 (PT_COLORS)
const PT_COLORS = [
  '#ef4444', // red
  '#22c55e', // green
  '#3b82f6', // blue
  '#eab308', // yellow
  '#a855f7', // purple
  '#ec4899', // pink
] as const;

const meta = {
  title: 'Primitives/AvatarComparison',
  component: Avatar,
  parameters: {
    layout: 'centered',
    controls: {
      disable: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Comparison: Story = {
  args: {
    id: 'user-123',
  },
  parameters: {
    docs: {
      description: {
        story:
          'LucideAvatar, BoringAvatar, Avvvatars를 size와 badge 기준으로 한 화면에서 비교하는 스토리입니다.',
      },
    },
  },
  render: () => {
    const sizes = [24, 40, 56] as const;

    return (
      <div className="flex w-full max-w-4xl flex-col gap-8 p-2">
        <section className="space-y-3">
          <h3 className="text-sm font-semibold">Size</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="w-28 text-sm text-gray-500">Lucide</span>
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-1">
                  <Avatar id="user-123" color={PT_COLORS[2]} size={size} />
                  <span className="text-xs text-gray-500">{size}px</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="w-28 text-sm text-gray-500">Boring</span>
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-1">
                  <BoringAvatar id="1001" size={size} />
                  <span className="text-xs text-gray-500">{size}px</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="w-28 text-sm text-gray-500">Avvvatars</span>
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-1">
                  <AvvvatarsAvatar id="1001" size={size} />
                  <span className="text-xs text-gray-500">{size}px</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-semibold">Badge</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="w-28 text-sm text-gray-500">Lucide</span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Avatar id="user-123" color={PT_COLORS[2]} size={40} />
                  <span className="text-xs text-gray-500">without</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Avatar
                    id="user-123"
                    color={PT_COLORS[2]}
                    size={40}
                    badge="👑"
                  />
                  <span className="text-xs text-gray-500">with</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="w-28 text-sm text-gray-500">Boring</span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <BoringAvatar id="1001" size={40} />
                  <span className="text-xs text-gray-500">without</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <BoringAvatar id="1001" size={40} badge="👑" />
                  <span className="text-xs text-gray-500">with</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="w-28 text-sm text-gray-500">Avvvatars</span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <AvvvatarsAvatar id="1001" size={40} />
                  <span className="text-xs text-gray-500">without</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <AvvvatarsAvatar id="1001" size={40} badge="👑" />
                  <span className="text-xs text-gray-500">with</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
};
