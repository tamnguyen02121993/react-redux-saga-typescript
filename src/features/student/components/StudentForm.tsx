import { Box, Button } from '@material-ui/core';
import { InputField } from 'components/FormFields';
import { Student } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';

export interface StudentFormProps {
  initialValues?: Student;
  onSubmit?: (formValues: Student) => void;
}

export default function StudentForm({ initialValues, onSubmit }: StudentFormProps) {
  const { control, handleSubmit } = useForm<Student>({
    defaultValues: initialValues,
  });

  const handleFormSubmit = (formValues: Student) => {
    console.log(formValues);
  };
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Form Fields */}
        <InputField name="name" control={control} label="Full Name" />
        <InputField name="age" control={control} label="Age" type="number" />
        <InputField name="mark" control={control} label="Mark" type="number" />
        <InputField name="gender" control={control} label="Gender" />
        <InputField name="city" control={control} label="City" />

        <Box>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
