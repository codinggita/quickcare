import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { toggleTheme, setTheme } from '../store/slices/uiSlice';

/**
 * useTheme — Provides access to the current theme and toggle/set actions.
 *
 * Usage:
 *   const { theme, isDark, toggle, setDark, setLight } = useTheme();
 */
export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const toggle = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const setDark = useCallback(() => {
    dispatch(setTheme('dark'));
  }, [dispatch]);

  const setLight = useCallback(() => {
    dispatch(setTheme('light'));
  }, [dispatch]);

  return {
    theme,
    isDark: theme === 'dark',
    toggle,
    setDark,
    setLight,
  };
};
