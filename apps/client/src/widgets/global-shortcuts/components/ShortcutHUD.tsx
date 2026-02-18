import { useShortcutStore } from '@/stores/shortcut';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@codejam/ui';
import { ShortcutListContent } from './ShortcutListContent';

export function ShortcutHUD() {
  const isHUDOpen = useShortcutStore((state) => state.isHUDOpen);
  const setHUDOpen = useShortcutStore((state) => state.setHUDOpen);

  return (
    <Dialog open={isHUDOpen} onOpenChange={setHUDOpen}>
      <DialogContent showCloseButton={false} className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>단축키 안내</DialogTitle>
          <DialogDescription>
            자주 쓰는 단축키를 한눈에 확인하고, 원하는 작업을 더 빠르게 실행해
            보세요.
          </DialogDescription>
        </DialogHeader>

        <ShortcutListContent className="gap-6 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6" />

        <DialogDescription className="text-center text-xs">
          누르고 있는 키를 떼면 창이 닫힙니다
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
