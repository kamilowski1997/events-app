import React, { useState } from 'react';
import { Container } from '@mui/material';
import { StyledMainStack } from './AddEventPage.styled';
import AddEventForm from '../../components/AddEventForm/AddEventForm';
const AddEventPage = () => {
  const [day, setDay] = useState(new Date());
  return (
    <Container>
      <StyledMainStack gap="30px" alignItems="center">
        <AddEventForm />
      </StyledMainStack>
    </Container>
  );
};

export default AddEventPage;
