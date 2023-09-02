import { forwardRef, HTMLProps, ForwardedRef, useState } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

// Define your variant configuration here
const inputVariants = {
  intent: {
    primary: ['border', 'rounded-sm', 'focus:border-neutral-grey'],
    secondary: [
      'bg-transparent',
      'border-b-2',
      'focus:border-neutral-grey',
      'px-[.5em] py-[.2em]',
    ],
  },
  inputSize: {
    small: ['text-sm', 'py-1.5', 'px-2'],
    base: ['text-base', 'py-2.5', 'px-4'],
    medium: ['text-lg', 'py-3', 'px-5'],
  },
}

// Create a function that generates the class variance authority
const createInputCVA = () => {
  return clsx(
    'bg-white',
    'placeholder:text-neutral-charcoal',
    'border-neutral-divider',
    'focus:outline-none',
    'w-full',
  )
}

// ForwardRef callback type
type InputRefCallback = (instance: HTMLInputElement | null) => void

// InputProps with ref forwarding support
interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'className'> {
  className?: string
  intent?: keyof typeof inputVariants.intent
  inputSize?: keyof typeof inputVariants.inputSize
}

const Field = forwardRef<InputRefCallback, InputProps>(
  (
    { className, intent = 'primary', inputSize = 'base', type, ...props },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const inputType = type === 'password' && showPassword ? 'text' : type

    const inputClass = twMerge(
      createInputCVA(),
      clsx(inputVariants.intent[intent]),
      clsx(inputVariants.inputSize[inputSize]),
      className,
    )

    if (type !== 'password')
      return (
        <input
          className={inputClass}
          {...props}
          ref={ref as ForwardedRef<HTMLInputElement>}
        />
      )

    return (
      <div className="relative w-full">
        <input
          type={inputType}
          className={inputClass}
          {...props}
          ref={ref as ForwardedRef<HTMLInputElement>}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
    )
  },
)

export default Field
