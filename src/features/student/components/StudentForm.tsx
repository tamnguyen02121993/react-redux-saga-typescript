import { Box, Button } from '@material-ui/core';
import { useAppSelector } from 'app/hooks';
import { InputField, RadioGroupField, SelectField } from 'components/FormFields';
import { selectCityOptions } from 'features/city/citySilce';
import { Student } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter name')
    .test('two-words', 'Please enter at least two words.', (value) => {
      if (!value) return true;
      const parts = value.split(' ');
      return parts.filter((x) => Boolean(x)).length >= 2;
    }),
  age: yup
    .number()
    .positive('Please enter a positive number.')
    .integer('Please enter an integer.')
    .min(18, 'Min is 18.')
    .max(60, 'Max is 60.')
    .required('Please enter age.')
    .typeError('Please enter a valid number.'),
  mark: yup
    .number()
    .min(0, 'Min is 0.')
    .max(10, 'Max is 10.')
    .required('Please enter mark.')
    .typeError('Please enter a valid number.'),
  gender: yup
    .string()
    .oneOf(['male', 'female'], 'Please select either male or female.')
    .required('Please select gender.'),
  city: yup.string().required('Please select a city.'),
});

export interface StudentFormProps {
  initialValues?: Student;
  onSubmit?: (formValues: Student) => void;
}

export default function StudentForm({ initialValues, onSubmit }: StudentFormProps) {
  const { control, handleSubmit } = useForm<Student>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const cityOptions = useAppSelector(selectCityOptions);

  const handleFormSubmit = (formValues: Student) => {
    console.log(formValues);
  };
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Form Fields */}
        <InputField name="name" control={control} label="Full Name" />

        <RadioGroupField
          name="gender"
          control={control}
          label="Gender"
          row={true}
          options={[
            {
              label: 'Male',
              value: 'male',
            },
            {
              label: 'Female',
              value: 'female',
            },
          ]}
        />
        <InputField name="age" control={control} label="Age" type="number" />
        <InputField name="mark" control={control} label="Mark" type="number" />

        <SelectField name="city" control={control} label="City" options={cityOptions} />
        <Box>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
