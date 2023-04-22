import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute