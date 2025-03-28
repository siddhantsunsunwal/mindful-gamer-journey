
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  guestAllowed?: boolean;
}

const ProtectedRoute = ({ children, guestAllowed = true }: ProtectedRouteProps) => {
  const { user, loading, isGuest } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  // Allow access if user is logged in or guest mode is allowed and active
  if (user || (guestAllowed && isGuest)) {
    return <>{children}</>;
  }

  return <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
