import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { colors } from '../../../consts/colors';

type DatePicker = {
  name: string;
  label: string;
  disabled?: boolean;
  error: boolean;
  helperText: string;
  inputFormat?: string;
} & Pick<React.ComponentProps<typeof Controller>, 'rules' | 'shouldUnregister' | 'defaultValue'>;

const DatePicker: React.FC<DatePicker> = ({
  name,
  label,
  rules,
  defaultValue = null,
  shouldUnregister,
  disabled,
  error,
  helperText,
  inputFormat = 'DD/MM/YYYY',
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      shouldUnregister={shouldUnregister}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <DesktopDatePicker
          PopperProps={{
            sx: {
              '& .MuiPaper-root': {
                backgroundColor: '#464649',
              },
              '& .MuiPickersDay-dayWithMargin': {
                color: 'white',
                backgroundColor: 'gray',
              },
              '& .MuiPickersDay-today': {
                border: `2px solid ${colors.primary} !important`,
              },
              '& .MuiDayPicker-weekDayLabel': {
                color: colors.primary,
                backgroundColor: colors.background,
                width: '26px',
                height: '26px',
                margin: '7px ',
                borderRadius: '13px',
              },
              '& .MuiPickersCalendarHeader-label': { color: colors.primary },
            },
          }}
          label={label}
          inputFormat={inputFormat}
          disabled={disabled}
          {...field}
          renderInput={(props) => (
            <TextField {...props} error={error && !disabled} helperText={helperText} />
          )}
        />
      )}
    />
  );
};

export { DatePicker };
