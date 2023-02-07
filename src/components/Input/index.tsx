import { InputHTMLAttributes } from 'react'
import { FieldErrors } from 'react-hook-form'
import { ErrorMessageContainer, InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any
  name: string
  propsRegister?: any
  errorMessage?: FieldErrors | undefined
}

export function Input({
  register,
  name,
  propsRegister,
  errorMessage,
  ...rest
}: InputProps) {
  const hasError: boolean = !!errorMessage && !!errorMessage[name]?.message

  return (
    <InputContainer error={hasError}>
      <input type="text" {...register(name, propsRegister)} {...rest} />
      {errorMessage && errorMessage[name]?.message && (
        <ErrorMessageContainer>
          {errorMessage[name]?.message?.toString()}
        </ErrorMessageContainer>
      )}
    </InputContainer>
  )
}
