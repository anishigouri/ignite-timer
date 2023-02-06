import { ReactElement } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
  children: ReactElement
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}
