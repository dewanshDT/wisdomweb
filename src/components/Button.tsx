import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import React from 'react'

const button = cva(
  clsx(
    'flex',
    'items-center',
    'justify-center',
    'gap-[0.5em]',
    'active:translate-y-[1px]',
    'font-semibold',
    'whitespace-no-wrap',
    'font-Poppins',
    'rounded-sm',
    'border',
  ),
  {
    variants: {
      intent: {
        primary: ['bg-primary-400', 'text-neutral-black', 'border-primary-400'],
        secondary: ['bg-primary-100', 'text-primary-600', 'border-primary-600'],
      },
      size: {
        small: ['text-sm', 'py-1.5', 'px-5'],
        base: ['text-base', 'py-2.5', 'px-7'],
        medium: ['text-lg', 'py-3', 'px-8'],
        large: ['text-xl', 'py-4', 'px-9'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'base',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => (
  <button className={twMerge(button({ intent, size }), className)} {...props} />
)

export default Button
