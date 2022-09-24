import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

type InputProps = {
  name: string;
} & Pick<React.ComponentProps<typeof Controller>, 'rules' | 'shouldUnregister' | 'defaultValue'> &
  React.ComponentProps<typeof TextField>;

const Input: React.FC<InputProps> = ({
  name,
  shouldUnregister,
  defaultValue = '',
  rules,
  ...inputProps
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister={shouldUnregister}
      rules={rules}
      defaultValue={defaultValue}
      render={(fieldProps) => <TextField {...fieldProps.field} {...inputProps} />}
    />
  );
};

export { Input };
