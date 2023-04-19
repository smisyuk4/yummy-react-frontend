import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DivStyled } from './Layout.styled';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const Layout = () => {
  return (
    <DivStyled>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </DivStyled>
  );
};
