'use client'

import { ReactQueryProviderProps } from '@/@types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function ReactQueryProvider({ children }: ReactQueryProviderProps) {
    return (
        <QueryClientProvider client={new QueryClient()}>
            {children}
        </QueryClientProvider>
    )
}