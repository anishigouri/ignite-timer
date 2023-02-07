import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from './styles'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  const task = watch('task')
  const minutesAmount = watch('minutesAmount')

  const isSubmitDisabled = !task && !minutesAmount

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para seu projeto"
            list="task-suggestion"
            {...register('task')}
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
          </datalist>

          <label htmlFor="task">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
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
        <Button type="submit" disabled={isSubmitDisabled}>
          <>
            <Play size={24} /> Começar
          </>
        </Button>
      </form>
    </HomeContainer>
  )
}
