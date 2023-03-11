import React from 'react';
// Libraries
import { cva, VariantProps } from 'class-variance-authority';
// Utilities
import { cn } from '@/lib/utils';

const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface Props
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const BaseParagraph: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  Props
> = ({ children, className, size, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={cn(paragraphVariants({ size, className }))}
    >
      {children}
    </p>
  );
};

const Paragraph = React.forwardRef(BaseParagraph);

export default Paragraph;
