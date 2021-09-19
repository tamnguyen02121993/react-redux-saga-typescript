import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export interface RadioOption {
  label: string;
  value: number | string;
  disabled?: boolean;
}

export interface RadioGroupFieldProps {
  name: string;
  control: Control<any>;
  label: string;
  disabled?: boolean;
  options: RadioOption[];
  row?: boolean;
}

export function RadioGroupField({
  name,
  control,
  label,
  disabled,
  options,
  row,
}: RadioGroupFieldProps) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <FormControl component="fieldset" disabled={disabled} error={invalid} fullWidth>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup row={row} name={name} onChange={onChange} onBlur={onBlur} value={value}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            disabled={option.disabled}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
