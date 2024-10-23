import { createFileRoute } from '@tanstack/react-router'
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import { client } from '@/httpClient';

export const Route = createFileRoute('/teachers/exclusion/suspend-student')({
  component: Page
})

const schema = z.object({
    name: z.string().min(1, { message: 'Required' }),
    age: z.number().min(10),
  });

function Page() {

    const mutation = useMutation({
        mutationFn: () => {
            client.quiz
        },
        onSuccess: () => {
            // TODO navigate to another page with param?
        },
      })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });

    return <div>
        <h1>Suspend student</h1>
      <form className='flex flex-col items' onSubmit={handleSubmit((d) => console.log(d))}>
      <Input {...register('name')} />
      {errors.name?.message && <p>{errors.name?.message.toString()}</p>}
      <Input type="number" {...register('age', { valueAsNumber: true })} />
      {errors.age?.message && <p>{errors.age?.message.toString()}</p>}
      <Input type="submit" onSubmit={() => mutation.mutate} />
    </form>

    </div>
}
