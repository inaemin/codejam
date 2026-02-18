import { useCallback, useMemo, useState } from 'react';
import { type AvatarUser } from '../plugin/LineAvatars';

const MOCK_AVATAR_USERS: AvatarUser[] = [
  { hash: '1001', name: '김민준' },
  { hash: '1002', name: '이서준' },
  { hash: '1003', name: '박지호' },
  { hash: '1004', name: '최도윤' },
  { hash: '1005', name: '정하준' },
];

export function useAvatarMenu() {
  const useMockAvatarUsers = useMemo(() => {
    if (!import.meta.env.DEV || typeof window === 'undefined') {
      return false;
    }

    const param = new URLSearchParams(window.location.search).get(
      'mockAvatarUsers',
    );
    return param === '1' || param === 'true';
  }, []);

  const [menuState, setMenuState] = useState<{
    isOpen: boolean;
    position: { x: number; y: number } | null;
    users: AvatarUser[];
  }>({
    isOpen: false,
    position: null,
    users: [],
  });

  const handleGutterClick = useCallback(
    ({ event, users }: { event: MouseEvent; users: AvatarUser[] }) => {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const baseUser = users[0];
      const displayUsers = useMockAvatarUsers
        ? [
            ...(baseUser ? [baseUser] : []),
            ...MOCK_AVATAR_USERS.filter((user) => user.hash !== baseUser?.hash),
          ]
        : users;

      setMenuState({
        isOpen: true,
        position: { x: rect.right, y: rect.top },
        users: displayUsers,
      });
    },
    [useMockAvatarUsers],
  );

  const closeMenu = useCallback(() => {
    setMenuState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return { menuState, handleGutterClick, closeMenu };
}
