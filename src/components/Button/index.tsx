import { ButtonHTMLAttributes, ReactElement } from 'react'
import { ButtonContainer, BUTTON_VARIANTS } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_VARIANTS
  children: ReactElement
}

export function Button({
  variant = 'success',
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}
