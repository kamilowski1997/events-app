import React from 'react';
import { Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { StyledForm, StyledMainStack, StyledSubmitButton } from './AddEventForm.styled';
import { Input } from '../common/Input/Input';
import { DatePicker } from '../common/DatePicker/DatePicker';
import { emailValidator } from '../../utils/validators';
import { useDispatch } from '../../redux/store';
import { actions } from '../../redux/slices/events';
import { Event } from '../../utils/interfaces/event';

const AddEventForm = () => {
  const dispatch = useDispatch();
  const form = useForm<Event>();
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: Event) => {
    dispatch(actions.addEvent(data));
  };

  return (
    <StyledMainStack marginY="100px">
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...form}>
          <Typography variant="h2" marginBottom="16px">
            {'Add event'}
          </Typography>

          <Input
            label="First name"
            name="firstName"
            rules={{ required: 'This field is required' }}
            error={!!errors.firstName}
            helperText={(errors?.firstName?.message || '') as string}
          />

          <Input
            label="Last name"
            name="lastName"
            rules={{ required: 'This field is required' }}
            error={!!errors.lastName}
            helperText={(errors?.lastName?.message || '') as string}
          />

          <Input
            label="Email"
            name="email"
            rules={{
              validate: {
                emailValidator: emailValidator('Invalid email address'),
              },
            }}
            error={!!errors.email}
            helperText={(errors?.email?.message || '') as string}
          />

          <DatePicker
            rules={{ required: 'Invalid date' }}
            name="eventDate"
            label="Event date"
            inputFormat="DD/MM/YYYY"
            defaultValue={new Date()}
            error={!!errors.eventDate}
            helperText={(errors?.eventDate?.message || '') as string}
          />

          <StyledSubmitButton variant="contained" type="submit">
            {'Submit'}
          </StyledSubmitButton>
        </FormProvider>
      </StyledForm>
    </StyledMainStack>
  );
};

export default AddEventForm;
