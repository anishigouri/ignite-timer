import styled from 'styled-components'

export const BUTTON_VARIANTS = {
  warning: 'yellow-500',
  danger: 'red-500',
  success: 'green-500',
} as const

export interface ButtonVariantProps {
  variant: keyof typeof BUTTON_VARIANTS
}

export const ButtonContainer = styled.button<ButtonVariantProps>`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 1px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: 700;

  cursor: pointer;

  color: ${(props) => props.theme['gray-100']};

  background: ${(props) => props.theme[BUTTON_VARIANTS[props.variant]]};

  transition: all 0.5s;

  &:not(:disabled):hover {
    filter: brightness(130%);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
