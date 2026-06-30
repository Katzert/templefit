import type { ReactNode } from 'react';
import { useAuth, type UserRole } from '../context/AuthContext';

interface RoleGuardProps {
  minRole: UserRole;
  children: ReactNode;
  fallback?: ReactNode;
}

export function RoleGuard({ minRole, children, fallback = null }: RoleGuardProps) {
  const { hasRole } = useAuth();
  if (!hasRole(minRole)) return <>{fallback}</>;
  return <>{children}</>;
}
