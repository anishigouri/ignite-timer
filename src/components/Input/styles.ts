import styled from 'styled-components'

interface InputProps {
  error: boolean
}

export const InputContainer = styled.div<InputProps>`
  position: relative;
  input {
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid
      ${(props) =>
        props.error ? props.theme['red-300'] : props.theme['gray-500']};
    font-weight: 700;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};

    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme['green-500']};
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
  }
`

export const ErrorMessageContainer = styled.span`
  position: absolute;
  font-size: 0.775rem;
  color: ${(props) => props.theme['red-300']};
  left: 0;
  margin-top: 2.5rem;
`
