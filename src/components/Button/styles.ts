import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

// const buttonVariants = {
//   primary: 'purple',
//   secondary: 'orange',
//   danger: 'red',
//   success: 'green-500',
// }

export const ButtonContainer = styled.button<ButtonContainerProps>`
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

  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
