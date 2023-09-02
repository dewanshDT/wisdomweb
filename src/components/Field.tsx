import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const input = cva(
  clsx(
    'bg-white',
    'placeholder:text-neutral-charcoal',
    'border-neutral-divider',
    'focus:outline-none',
  ),
  {
    variants: {
      intent: {
        primary: ['border', 'rounded-sm', 'focus:border-primary-600'],
        secondary: [
          'bg-transparent',
          'border-b-2',
          'focus:border-primary-400',
          'px-[.5em] py-[.2em]',
        ],
      },
      inputSize: {
        small: ['text-sm', 'py-1.5', 'px-2'],
        base: ['text-base', 'py-2.5', 'px-4'],
        medium: ['text-lg', 'py-3', 'px-5'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      inputSize: 'base',
    },
  },
)

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

const Field: React.FC<InputProps> = ({
  className,
  intent,
  inputSize,
  ...props
}) => (
  <input
    className={twMerge(input({ intent, inputSize }), className)}
    {...props}
  />
)

export default Field
