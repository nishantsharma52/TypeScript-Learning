import { PropsWithChildren, ReactNode } from 'react';

export interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode; // Optional footer node
}

export function Card({ title, children, footer }: CardProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      {footer && <footer>{footer}</footer>}
    </section>
  );
}