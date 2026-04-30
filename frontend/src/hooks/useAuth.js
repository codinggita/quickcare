import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { loginStart, loginSuccess, loginFailure, logout, clearError } from '../store/slices/authSlice';
import { authService } from '../services/api';

/**
 * useAuth — Provides access to authentication state and actions.
 *
 * Usage:
 *   const { user, isAuthenticated, isLoading, error, login, logoutUser } = useAuth();
 */
export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state) => state.auth
  );

  const login = useCallback(
    async (credentials) => {
      dispatch(loginStart());
      try {
        const { data } = await authService.login(credentials);
        dispatch(loginSuccess({ user: data.user, token: data.token }));
        return { success: true };
      } catch (err) {
        const message =
          err.response?.data?.message || 'Login failed. Please try again.';
        dispatch(loginFailure(message));
        return { success: false, message };
      }
    },
    [dispatch]
  );

  const register = useCallback(
    async (userData) => {
      dispatch(loginStart());
      try {
        const { data } = await authService.register(userData);
        dispatch(loginSuccess({ user: data.user, token: data.token }));
        return { success: true };
      } catch (err) {
        const message =
          err.response?.data?.message || 'Registration failed. Please try again.';
        dispatch(loginFailure(message));
        return { success: false, message };
      }
    },
    [dispatch]
  );

  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const dismissError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logoutUser,
    dismissError,
  };
};
