'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <SessionProvider>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </SessionProvider>
    </>
  );
}
