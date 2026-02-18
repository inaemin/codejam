import type { Preview } from '@storybook/react-vite';
import { createElement, useEffect } from 'react';
import { ThemeProvider } from '@codejam/ui';
import '@codejam/ui/styles.css';

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      const background = context.globals.backgrounds?.value;
      const forcedTheme =
        theme === 'light' || theme === 'dark'
          ? theme
          : background === 'dark'
            ? 'dark'
            : background === 'light'
              ? 'light'
              : getSystemTheme();

      useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(forcedTheme);
      }, [forcedTheme]);

      return createElement(
        ThemeProvider,
        {
          attribute: 'class',
          defaultTheme: 'system',
          enableSystem: true,
          storageKey: 'vite-ui-theme',
          forcedTheme,
        },
        createElement(Story),
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
