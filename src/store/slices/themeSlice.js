import { createSlice } from '@reduxjs/toolkit';

// Helper function to get initial theme
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    // First check for saved theme
    const savedTheme = localStorage.getItem('foodio-theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // If no saved theme, check system preference
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return systemTheme;
  }
  return 'light';
};

const initialState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      
      // Update DOM and localStorage
      document.body.setAttribute('data-theme', state.mode);
      document.body.style.colorScheme = state.mode;
      localStorage.setItem('foodio-theme', state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      
      // Update DOM and localStorage
      document.body.setAttribute('data-theme', state.mode);
      document.body.style.colorScheme = state.mode;
      localStorage.setItem('foodio-theme', state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;

