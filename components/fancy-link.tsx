import type { ElementType, ReactNode } from 'react';

interface FancyLinkProps {
  href: string;
  children: ReactNode;
  icon?: ElementType;
  className?: string;
  external?: boolean;
}

export const FancyLink = ({
  href,
  children,
  icon,
  className = '',
  external = false,
}: FancyLinkProps) => {
  const externalProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  const Icon = icon;

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center pl-[1.65rem] text-foreground font-medium ${className}`}
      {...externalProps}
    >
      {Icon && (
        <span className="absolute left-0.5 top-[2.5px] block">
          <Icon className="h-5 w-5" />
        </span>
      )}
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-sm bg-current opacity-10 transition-opacity group-hover:opacity-25" />
      </span>
    </a>
  );
};
