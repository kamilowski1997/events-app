import React from 'react';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { LayoutStyledContainer } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutStyledContainer>
      <Stack flex={1}>
        <Outlet />
      </Stack>
    </LayoutStyledContainer>
  );
};

export default Layout;
