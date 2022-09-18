import React, { useState } from 'react';
import { Button, Container, Select, TextField, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { StyledMainStack } from './AddEventPage.styled';
import { colors } from '../../consts/colors';
const AddEventPage = () => {
  const [day, setDay] = useState(new Date());
  return (
    <Container>
      <StyledMainStack gap="30px">
        <Typography variant="h2">{'AddEventPage'}</Typography>
        <Typography variant="h3">{'AddEventPage'}</Typography>
        <Typography variant="h4">{'AddEventPage'}</Typography>
        <Typography variant="h5">{'AddEventPage'}</Typography>
        <Typography variant="body1">{'AddEventPage'}</Typography>
        <Typography variant="body2">{'AddEventPage'}</Typography>
        <TextField color="primary" label="dasdsa" />
        <TextField color="secondary" label="dasdsa" />
        <Button variant="contained" color="secondary">
          {'dsadsa'}
        </Button>
        <Button variant="contained" color="primary">
          {'dsadsa'}
        </Button>
        <Select color="secondary" />
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
              '& .MuiDayPicker-weekDayLabel': { color: colors.primary },
              '& .MuiPickersCalendarHeader-label': { color: colors.primary },
            },
          }}
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={day}
          onChange={(value) => value && setDay(value)}
          renderInput={(params) => <TextField {...params} color="primary" />}
        />
      </StyledMainStack>
    </Container>
  );
};

export default AddEventPage;
