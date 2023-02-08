import { HandPalm, Play } from 'phosphor-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as zod from 'zod'
import { Button } from '../../components/Button'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { HomeContainer } from './styles'
import { CycleContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number({ invalid_type_error: 'Inválido' })
    .min(5, 'O ciclo precisa ter no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { createNewCycle, interruptCycle, activeCycle } =
    useContext(CycleContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = newCycleForm

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast.error('Verifique os campos')
    }
  }, [errors])

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <Button type="button" onClick={interruptCycle} variant="danger">
            <>
              <HandPalm size={24} /> Interromper
            </>
          </Button>
        ) : (
          <Button type="submit">
            <>
              <Play size={24} /> Começar
            </>
          </Button>
        )}
      </form>
    </HomeContainer>
  )
}
