'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAddEventModal } from '@/app/hooks/useAddEventModal';
import { addEvent } from '@/actions/eventActions';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50),
  location: z.string().min(1, 'Location is required').max(50),
  date: z.string(),
});

export default function EventForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      location: '',
      date: '',
    },
    mode: 'onChange',
  });

  const { isSubmitting, isValid } = form.formState;
  const { onClose } = useAddEventModal();

  const action: () => void = form.handleSubmit(async (values: z.infer<typeof formSchema>) => {
    await addEvent(values);
    onClose();
  });

  return (
    <Form {...form}>
      <form action={action} className="w-full max-w-lg flex flex-col justify-center">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="my-3">
              <FormLabel>What is the name of the event?</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="my-3">
              <FormLabel>Where the event will take place?</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="my-3">
              <FormLabel>When the event will take place?</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-6" type="submit" disabled={isSubmitting || !isValid}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
