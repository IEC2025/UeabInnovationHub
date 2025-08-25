// Simplified auth hook - no authentication required
export function useAuth() {
  // Return a mock admin user for dashboard access
  const user = {
    role: 'admin',
    email: 'admin@ueab.ac.ke',
    firstName: 'Admin',
    lastName: 'User'
  };

  return {
    user,
    isLoading: false,
    isAuthenticated: true,
  };
}