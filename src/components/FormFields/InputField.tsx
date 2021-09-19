import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';
import { TextField } from '@material-ui/core';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label: string;
}

export function InputField({ name, control, label, ...inputProps }: InputFieldProps) {
  const {
    field: { value, onBlur, onChange, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <TextField
      label={label}
      fullWidth
      margin="normal"
      variant="outlined"
      value={value}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
      size="small"
      onBlur={onBlur}
      onChange={onChange}
    />
  );
}
