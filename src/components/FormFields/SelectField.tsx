import { FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export interface SelectOption {
  label: string;
  value: number | string;
  disabled?: boolean;
}

export interface SelectFieldProps {
  name: string;
  control: Control<any>;
  label: string;
  disabled?: boolean;
  options: SelectOption[];
  row?: boolean;
}

export function SelectField({ name, control, label, disabled, options }: SelectFieldProps) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <FormControl
      variant="outlined"
      size="small"
      fullWidth
      error={invalid}
      disabled={disabled}
      margin="normal"
    >
      <InputLabel id={`${name}_label`}>{label}</InputLabel>
      <Select
        labelId={`${name}_label`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
