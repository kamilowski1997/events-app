import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { colors } from '../../consts/colors';
import { StyledMainStack, StyledSubmitButton } from './AddEventForm.styled';

const AddEventForm = () => {
  const [day, setDay] = useState(new Date());

  return (
    <StyledMainStack gap="40px" marginY="100px">
      <Typography variant="h2" marginBottom="16px">
        {'Add event'}
      </Typography>
      <TextField label="First name" required />
      <TextField label="Last name" required />
      <TextField label="Email" required />
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
        label="Event date"
        inputFormat="DD/MM/YYYY"
        value={day}
        onChange={(value) => value && setDay(value)}
        renderInput={(params) => <TextField {...params} color="primary" required />}
      />
      <StyledSubmitButton variant="contained">{'Submit'}</StyledSubmitButton>
    </StyledMainStack>
  );
};

export default AddEventForm;
