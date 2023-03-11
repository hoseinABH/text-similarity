import React from 'react';
// Libraries
import { cva, VariantProps } from 'class-variance-authority';
// Utilities
import { cn } from '@/lib/utils';

const headingVariants = cva(
  'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  Props
> = ({ children, className, size, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      {...props}
      className={cn(headingVariants({ size, className }))}
    >
      {children}
    </h1>
  );
};

const Heading = React.forwardRef(LargeHeading);

export default Heading;
