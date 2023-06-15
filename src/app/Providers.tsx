'use client';

import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
  children: React.ReactNode;
}

function Providers({ children }: ProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Providers;
