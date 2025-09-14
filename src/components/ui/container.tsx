import { cn } from '@/lib/utils';

export default function Container({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'w-full max-w-[1500px] mx-auto px-4 sm:px-3 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}
