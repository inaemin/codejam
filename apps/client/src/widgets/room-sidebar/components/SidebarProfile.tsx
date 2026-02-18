import {
  AvatarBadge,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@codejam/ui';
import { usePt } from '@/stores/pts';
import { useRoomStore } from '@/stores/room';
import { AvvvatarsAvatar } from '@codejam/ui';
import { ProfileCardContent } from './ProfileCardContent';
import { PRESENCE } from '@codejam/common';

export function SidebarProfile() {
  const { myPtId } = useRoomStore();
  const me = usePt(myPtId);

  if (!myPtId || !me) {
    return <div className="bg-muted/50 h-10 w-10 animate-pulse rounded-full" />;
  }

  return (
    <Popover>
      <PopoverTrigger
        render={
          <button
            className="group relative flex h-12 w-12 items-center justify-center rounded-2xl outline-none"
            title="설정 및 프로필"
          >
            <div className="transition-transform duration-150 ease-out group-hover:scale-[1.08] group-active:scale-[0.96]">
              <AvvvatarsAvatar
                id={me.ptHash}
                size={40}
                className="ring-accent ring-1"
              >
                {me.presence === PRESENCE.ONLINE && (
                  <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                )}
              </AvvvatarsAvatar>
            </div>
          </button>
        }
      />
      <PopoverContent
        side="right"
        align="end"
        sideOffset={17}
        className="border-none bg-transparent p-0 shadow-none"
      >
        <ProfileCardContent me={me} />
      </PopoverContent>
    </Popover>
  );
}
