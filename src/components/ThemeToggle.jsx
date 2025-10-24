import { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from '../store/slices/themeSlice';

const ThemeToggle = () => {
  // Redux theme state
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  // Initial theme set (first load time)
  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
    document.body.removeAttribute('data-theme');
    document.body.setAttribute('data-theme', theme);
    document.body.style.colorScheme = theme;
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only update if user hasn't manually set a theme
      const savedTheme = localStorage.getItem('foodio-theme');
      if (!savedTheme) {
        dispatch(setTheme(e.matches ? 'dark' : 'light'));
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [dispatch]);

  // Redux action dispatch 
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="btn btn-secondary btn-outline btn-sm rounded-full shadow flex items-center justify-center px-3 py-2"
      aria-label="Toggle dark mode"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
    </button>
  );
};

export default ThemeToggle;