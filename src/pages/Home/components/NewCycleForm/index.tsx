import { Input } from '../../../../components/Input'
import { FormContainer } from './styled'
import { useContext } from 'react'
import { CycleContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <Input
        name="task"
        type="text"
        register={register}
        placeholder="Dê um nome para seu projeto"
        style={{ flex: 1 }}
        errorMessage={errors}
        disabled={!!activeCycle}
      />

      <label htmlFor="task">durante</label>
      <Input
        type="text"
        name="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        register={register}
        propsRegister={{ valueAsNumber: true }}
        style={{ width: '4rem' }}
        errorMessage={errors}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
