import React from 'react';
import { Container } from '@mui/material';
import { StyledMainStack } from './AddEventPage.styled';
import AddEventForm from '../../components/AddEventForm/AddEventForm';
import { useSelector } from 'react-redux';
import { actions, selectors } from '../../redux/slices/events';
import BackdropAppLoader from '../../components/common/BackdropAppLoader/BackdropAppLoader';
import { Snackbar } from '../../components/common/Snackbar';
import { useDispatch } from '../../redux/store';
const AddEventPage = () => {
  const dispatch = useDispatch();

  const addEventState = useSelector(selectors.selectAddEventState);

  const onAddEventErrorClose = () => dispatch(actions.clearAddEvent());
  const onAddEventSuccesClose = onAddEventErrorClose;

  return (
    <Container>
      <StyledMainStack gap="30px" alignItems="center">
        <AddEventForm />
      </StyledMainStack>
      <BackdropAppLoader open={addEventState.loading} />
      <Snackbar
        open={!!addEventState.error}
        onClose={onAddEventErrorClose}
        type="error"
        title="Error!"
        message="There was a problem adding the event."
      />
      <Snackbar
        open={!!addEventState.success}
        onClose={onAddEventSuccesClose}
        type="success"
        title="Success!"
        message="Successfully added the event."
      />
    </Container>
  );
};

export default AddEventPage;
