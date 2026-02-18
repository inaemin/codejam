// useDarkMode.ts
import { useEffect } from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,

      toggleTheme: () =>
        set((state) => ({
          isDark: !state.isDark,
        })),
    }),
    {
      name: 'theme-mode',
      storage: createJSONStorage(() => localStorage),
      // 중요: 새로고침하면 날아가도록 isDark만 저장함
      partialize: (state) => ({ isDark: state.isDark }),
    },
  ),
);

export function useDarkMode() {
  const { isDark, toggleTheme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;

    // 다크모드 적용
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  return { isDark, toggleTheme };
}
