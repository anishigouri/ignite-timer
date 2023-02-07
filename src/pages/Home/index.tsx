import { zodResolver } from '@hookform/resolvers/zod'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number({ invalid_type_error: 'Inválido' })
    .min(5, 'O ciclo precisa ter no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

export function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Input
            name="task"
            type="text"
            register={register}
            placeholder="Dê um nome para seu projeto"
            style={{ flex: 1 }}
            errorMessage={errors}
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
          </datalist>

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
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>

          <Separator>:</Separator>

          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <Button type="submit">
          <>
            <Play size={24} /> Começar
          </>
        </Button>
      </form>
    </HomeContainer>
  )
}
