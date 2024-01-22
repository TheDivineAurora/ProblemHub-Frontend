'use client'
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../context/AuthContext';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
}
