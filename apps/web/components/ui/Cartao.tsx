import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CartaoProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Cartao({ children, className, hover = true }: CartaoProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white p-6 shadow-md border border-gray-100',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
