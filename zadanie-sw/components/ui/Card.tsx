import { FC } from 'react';
import { ReactNode } from 'react';

export const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`bg-white shadow rounded-lg ${className}`}>
      {children}
    </div>
  );
