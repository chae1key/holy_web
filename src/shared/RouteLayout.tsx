import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const RouteLayout: React.FC = () => {
  return (
    <RouteLayoutWrap>
      <Outlet />
    </RouteLayoutWrap>
  );
};

const RouteLayoutWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default RouteLayout;