import { FieldsetHTMLAttributes, ReactNode } from 'react'

interface FieldProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode
}

export default function Field({ children, ...rest }: FieldProps) {
  return (
    <fieldset
      {...rest}
      className="flex w-full flex-col items-start justify-center gap-2"
    >
      {children}
    </fieldset>
  )
}
