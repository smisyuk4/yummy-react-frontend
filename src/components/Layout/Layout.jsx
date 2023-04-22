import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DivStyled } from './Layout.styled';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useAuth } from 'hooks/useAuth';
import { ColorRing } from 'react-loader-spinner';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn)
    return (
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={['#2a2c36', '#f47e60', '#f8b26a', '#8BAA36', '#EBF3D4']}
          />
        }
      >
        <Outlet />
      </Suspense>
    );
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
