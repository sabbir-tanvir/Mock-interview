import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';


interface formFieldProps<T extends FieldValues> {
    control: Control<T>;
    username: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'file';
}

const FormField = ({ control, name, label, placeholder, type = "text" }: formFieldProps<T>) => (

    <Controller
        name={name}
        control={control}

        render={({ field }) => (

            <FormItem>
                <FormLabel className="label">Username</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
            </FormItem>
        )}
    />
)

export default FormField;